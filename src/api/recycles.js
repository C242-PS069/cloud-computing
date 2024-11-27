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
        console.error('Error during Firestore query:', err.message);
    }
};

module.exports = { recycles };
