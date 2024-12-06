const { Firestore } = require('@google-cloud/firestore');
const db = new Firestore();

const recycles = async (input) => {
    const sortInput = input.sort((a, b) => a.localeCompare(b));
    const results = [];

    try {
        const docRef = db.collection('kreasi-daur-ulang');
        const snapshot = await docRef
            .where('materials', 'array-contains-any', sortInput)
            .get();

        snapshot.forEach((doc) => {
            const data = doc.data();
            if (
                data.materials.every((material) => sortInput.includes(material))
            ) {
                results.push(data);
            }
        });

        return results;
    } catch (err) {
        console.error(err);
        return null;
    }
};

const detailsRecycle = async (id) => {
    try {
        const docRef = db.collection('details-kreasi-daur-ulang').doc(id);
        const doc = await docRef.get();
        return doc.data();
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = { recycles, detailsRecycle };
