const { articles, detailsArticle } = require('../api/articles');
const banners = require('../api/banner');
const { recycles, detailsRecycle } = require('../api/recycles');
const {
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    updatePassword,
    signInWithEmailAndPassword,
} = require('firebase/auth');
const { doc, setDoc } = require('firebase/firestore');
const { auth, db } = require('../auth/firebase');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.SECRET_KEY;

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
    const recycleList = await recycles(['plastic bottle', 'paper']);

    if (recycleList.length === 0) {
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
            data: recycleList,
        })
        .code(200);
};

const detailsRecycleApi = async (request, h) => {
    const { id } = request.params;

    const recycle = await detailsRecycle(id);

    if (!recycle) {
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
            .response({ message: 'User registered successfully' })
            .code(201);
    } catch (err) {
        return h.response({ error: error.message }).code(400);
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

        const token = jwt.sign(
            {
                uid: user.uid,
                email: user.email,
            },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        return h
            .response({
                message: 'User logged in successfully',
                userId: token,
            })
            .code(200);
    } catch (error) {
        return h.response({ error: error.message }).code(401);
    }
};

const resetPasswordApi = async (request, h) => {
    const { email } = request.payload;

    try {
        await sendPasswordResetEmail(auth, email);

        return h
            .response({ message: 'Password reset email sent successfully' })
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
            .response({ message: 'Profile updated successfully' })
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
