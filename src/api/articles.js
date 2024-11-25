const { Firestore } = require('@google-cloud/firestore');
const db = new Firestore();

const articles = async () => {
    const docRef = db.collection('articles');
    const snapshot = await docRef.get();
    const articlesList = snapshot.docs.map((doc) => doc.data());

    return articlesList;
};

const detailsArticle = async (id) => {
    const docRef = db.collection('details-article').doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
        console.log('Artikel dengan ID tersebut tidak ditemukan.');
        return null;
    }

    return doc.data();
};

module.exports = { articles, detailsArticle };
