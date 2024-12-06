const { Firestore } = require('@google-cloud/firestore');
const db = new Firestore();

const articles = async () => {
    try {
        const docRef = db.collection('articles');
        const snapshot = await docRef.get();
        const articlesList = snapshot.docs.map((doc) => doc.data());

        return articlesList;
    } catch (err) {
        console.error(err.message);
    }
};

const detailsArticle = async (id) => {
    try {
        const docRef = db.collection('details-article').doc(id);
        const doc = await docRef.get();
        return doc.data();
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = { articles, detailsArticle };
