const { articles, detailsArticle } = require('../api/articles');
const banners = require('../api/banner');
const {
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    updatePassword,
    signInWithEmailAndPassword,
} = require('firebase/auth');
const { doc, setDoc, getDoc } = require('firebase/firestore');
const { auth, db } = require('../auth/firebase');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.SECRET_KEY;
const { recycles, detailsRecycle } = require('../api/recycles');
const FormData = require('form-data');
const axios = require('axios');

const articlesApi = async (request, h) => {
    const articlesList = await articles();

    if (articlesList.length === 0) {
        return h
            .response({
                status: 'fail',
                message: `Articles not found`,
            })
            .code(404);
    }

    return h
        .response({
            status: 'success',
            message: 'Articles fetched successfully',
            data: articlesList,
        })
        .code(200);
};

const detailsArticleApi = async (request, h) => {
    const { id } = request.params;

    const article = await detailsArticle(id);

    if (!article) {
        return h
            .response({
                status: 'fail',
                message: `Article with ID ${id} not found`,
            })
            .code(404);
    }

    return h
        .response({
            status: 'success',
            message: 'Article fetched successfully',
            data: article,
        })
        .code(200);
};

const bannersApi = async (request, h) => {
    const bannerList = await banners();

    if (bannerList.length === 0) {
        return h
            .response({
                status: 'fail',
                message: `Banners not found`,
            })
            .code(404);
    }

    return h
        .response({
            status: 'success',
            message: 'banners fetched successfully',
            data: bannerList,
        })
        .code(200);
};

const recyclesApi = async (request, h) => {
    try {
        const { image } = request.payload;

        if (!image) {
            throw new Error('Image is None');
        }

        const formData = new FormData();
        formData.append('image', image, 'image.jpg');

        const response = await axios.post(
            `${process.env.PYTHON_INFERENCE}/predict`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Accept: 'application/json',
                },
            }
        );

        if (response.ok) {
            throw new Error(
                `Failed to fetch predictions: ${response.statusText}`
            );
        }

        const predictions = response.data;

        const dataMachineLearning = await recycles([
            predictions.predicted_class,
        ]);
        if (!dataMachineLearning) {
            return h.response({
                status: 'failed',
                message: 'Error fetching predictions',
            });
        }

        return h
            .response({
                status: 'success',
                message: 'Predict fetched successfully',
                data: dataMachineLearning,
                predict: {
                    confident: predictions.confidence,
                    label: predictions.predicted_class,
                },
            })
            .code(200);
    } catch (err) {
        return h.response({
            status: 'failed',
            message: err.message,
        });
    }
};

const detailsRecycleApi = async (request, h) => {
    const { id } = request.params;

    const recycle = await detailsRecycle(id);

    if (!recycle) {
        return h
            .response({
                status: 'fail',
                message: `recycle with ID ${id} not found`,
            })
            .code(404);
    }

    return h
        .response({
            status: 'success',
            message: 'recycle fetched successfully',
            data: recycle,
        })
        .code(200);
};

const registerApi = async (request, h) => {
    const { email, password, username } = request.payload;
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;
        await setDoc(doc(db, 'users', user.uid), {
            displayName: username,
            email,
            imageUrl:
                'https://storage.googleapis.com/user-profile-ecofy/profile.png',
        });
        return h
            .response({
                status: 'success',
                message: 'User registered successfully',
            })
            .code(201);
    } catch (err) {
        return h.response({ error: err.message }).code(400);
    }
};

const loginApi = async (request, h) => {
    const { email, password } = request.payload;

    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;

        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        const userData = userDoc.data();
        const { displayName, imageUrl } = userData;

        const token = jwt.sign(
            {
                uid: user.uid,
                email: user.email,
            },
            JWT_SECRET,
            { expiresIn: '5h' }
        );

        return h
            .response({
                status: 'success',
                message: 'User logged in successfully',
                data: {
                    uid: user.uid,
                    displayName,
                    name: user.email,
                    token: token,
                    imageUrl,
                },
            })
            .code(200);
    } catch (err) {
        return h.response({ error: err.message }).code(401);
    }
};

const resetPasswordApi = async (request, h) => {
    const { email } = request.payload;

    try {
        await sendPasswordResetEmail(auth, email);

        return h
            .response({
                status: 'success',
                message: 'Password reset email sent successfully',
            })
            .code(200);
    } catch (error) {
        return h.response({ error: error.message }).code(400);
    }
};

const editProfileApi = async (request, h) => {
    const { newUsername, newPassword, oldPassword } = request.payload;
    const userId = request.app.uid;

    try {
        if (newPassword && oldPassword) {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                request.payload.email,
                oldPassword
            );
            const user = userCredential.user;

            await updatePassword(user, newPassword);
        }

        if (newUsername) {
            await setDoc(
                doc(db, 'users', userId),
                {
                    displayName: newUsername,
                },
                { merge: true }
            );
        }

        return h
            .response({
                status: 'success',
                message: 'Profile updated successfully',
            })
            .code(200);
    } catch (err) {
        return h.response({ error: err.message }).code(400);
    }
};

module.exports = {
    articlesApi,
    detailsArticleApi,
    bannersApi,
    recyclesApi,
    registerApi,
    loginApi,
    resetPasswordApi,
    editProfileApi,
    detailsRecycleApi,
};
