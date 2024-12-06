const { Firestore } = require('@google-cloud/firestore');

const db = new Firestore();

async function banners() {
    try {
        const getCollection = db.collection('banner');
        const snapshot = await getCollection.get();
        const data = snapshot.docs.map((doc) => doc.data());

        return data;
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = banners;
