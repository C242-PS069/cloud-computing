const articles = () => {
    return [
        {
            id: 1,
            title: 'Apa itu sampah ?',
            description:
                'Penjelasan tentang pengertian sampah, jenis-jenisnya, dan cara mendaur ulangnya.',
            image: 'https://images.unsplash.com/photo-1602262442764-c14f8db98045?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 2,
            title: 'Sampah organik dan non organik',
            description:
                'Penjelasan tentang pengertian sampah organik dan non organik.',
            image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];
};

const detailsArticle = (id) => {
    const detail = [
        {
            id: 1,
            title: 'Apa itu sampah ?',
            content: [
                {
                    section: 'Definisi sampah',
                    text: 'Sampah merupakan masalah lingkungan yang semakin kompleks di seluruh dunia. Pengelolaan sampah yang buruk dapat menyebabkan pencemaran tanah, air, dan udara, yang berpengaruh negatif terhadap kesehatan manusia dan makhluk hidup lainnya. Oleh karena itu, penting bagi setiap individu dan masyarakat untuk memahami cara mengelola sampah dengan baik.',
                },
                {
                    section: 'Jenis-Jenis Sampah',
                    text: 'Sampah dapat dibagi menjadi dua kategori utama, yaitu sampah organik dan anorganik. Sampah organik terdiri dari bahan-bahan yang berasal dari makhluk hidup, seperti sisa makanan dan daun. Sedangkan sampah anorganik mencakup barang-barang seperti plastik, kaca, dan logam yang tidak dapat terurai secara alami dalam waktu singkat.',
                },
                {
                    section: 'Dampak Sampah yang Tidak Terkelola dengan Baik',
                    text: 'Sampah yang menumpuk tanpa pengelolaan yang tepat dapat mencemari lingkungan dan mempengaruhi kualitas hidup manusia. Sampah plastik, misalnya, dapat menyebabkan polusi di lautan dan mengancam keberadaan biota laut. Sementara itu, sampah organik yang tidak dikelola dengan benar dapat menimbulkan bau tidak sedap dan menjadi tempat berkembang biaknya berbagai penyakit.',
                },
                {
                    section: 'Cara Mengelola Sampah dengan Baik',
                    text: 'Untuk mengurangi dampak negatif sampah, kita perlu menerapkan prinsip 3R: Reduce (mengurangi), Reuse (menggunakan kembali), dan Recycle (mendaur ulang). Mengurangi penggunaan plastik sekali pakai, menggunakan barang-barang yang dapat digunakan kembali, dan mendaur ulang sampah anorganik adalah langkah-langkah yang dapat kita lakukan sehari-hari.',
                },
                {
                    section: 'Peran Pemerintah dan Masyarakat',
                    text: 'Pemerintah memiliki peran penting dalam membuat kebijakan yang mendukung pengelolaan sampah yang efektif, seperti menyediakan tempat sampah yang terpisah untuk sampah organik dan anorganik, serta mendorong program daur ulang. Masyarakat juga perlu berperan aktif dalam memilah sampah dan mengurangi penggunaan bahan-bahan yang sulit terurai.',
                },
                {
                    section: 'Kesimpulan',
                    text: 'Pengelolaan sampah yang baik merupakan tanggung jawab bersama antara individu, masyarakat, dan pemerintah. Dengan kesadaran yang lebih tinggi tentang pentingnya pengelolaan sampah, kita dapat menjaga kelestarian lingkungan dan menciptakan dunia yang lebih sehat untuk generasi mendatang.',
                },
            ],
            video: 'https://youtu.be/O-psaaoiVuA?si=L8DeD3MHGra19f_Z',
        },
        {
            id: 2,
            title: 'Perbedaan Sampah Organik dan Anorganik serta Pentingnya Pemisahan Sampah',
            content: [
                {
                    section: 'Pendahuluan',
                    text: 'Sampah dapat dibedakan menjadi dua kategori utama, yaitu sampah organik dan sampah anorganik. Masing-masing jenis sampah memiliki karakteristik dan cara pengelolaan yang berbeda. Pemahaman tentang perbedaan ini sangat penting agar kita dapat mengelola sampah dengan lebih efektif dan ramah lingkungan.',
                },
                {
                    section: 'Apa Itu Sampah Organik?',
                    text: 'Sampah organik adalah sampah yang berasal dari makhluk hidup, baik tumbuhan maupun hewan. Sampah ini mudah terurai secara alami di lingkungan dalam waktu yang relatif singkat. Contoh sampah organik antara lain sisa makanan, daun, ranting, sisa sayuran, buah-buahan, dan limbah dari hewan seperti tulang atau kulit. Sampah organik memiliki potensi untuk dijadikan kompos, yang bisa digunakan sebagai pupuk alami untuk tanaman.',
                },
                {
                    section: 'Apa Itu Sampah Anorganik?',
                    text: 'Sampah anorganik adalah sampah yang berasal dari bahan-bahan buatan manusia yang tidak dapat terurai secara alami dalam waktu singkat. Sampah ini umumnya terbuat dari bahan seperti plastik, kaca, logam, dan kertas. Sampah anorganik sering kali memerlukan proses daur ulang atau pembuangan khusus agar tidak mencemari lingkungan. Contoh sampah anorganik antara lain kantong plastik, botol kaca, kaleng, dan kardus.',
                },
                {
                    section: 'Perbedaan Utama Sampah Organik dan Anorganik',
                    text: 'Perbedaan utama antara sampah organik dan anorganik terletak pada sifat degradasinya. Sampah organik bisa terurai secara alami melalui proses pembusukan, sementara sampah anorganik cenderung bertahan lebih lama di alam dan tidak dapat terurai dengan mudah. Selain itu, sampah organik lebih mudah dimanfaatkan untuk tujuan tertentu, seperti pembuatan kompos, sedangkan sampah anorganik lebih sering didaur ulang atau dibuang ke tempat pembuangan sampah.',
                },
                {
                    section: 'Mengapa Pemisahan Sampah Itu Penting?',
                    text: 'Pemisahan sampah organik dan anorganik sangat penting untuk memudahkan proses pengelolaan sampah yang lebih efektif. Sampah organik yang terpisah dapat dijadikan kompos, yang berguna untuk menyuburkan tanah. Sedangkan sampah anorganik yang terpisah lebih mudah untuk didaur ulang menjadi produk baru, sehingga mengurangi jumlah sampah yang masuk ke tempat pembuangan akhir. Dengan pemisahan yang tepat, kita dapat mengurangi pencemaran lingkungan dan memperpanjang umur tempat pembuangan sampah.',
                },
                {
                    section: 'Cara Memisahkan Sampah Organik dan Anorganik',
                    text: 'Pemisahan sampah dapat dilakukan dengan menyediakan dua tempat sampah terpisah di rumah atau tempat kerja. Sampah organik seperti sisa makanan, daun, dan bahan-bahan alami lainnya dapat dimasukkan ke dalam satu tempat sampah, sementara sampah anorganik seperti plastik, kaca, dan logam dimasukkan ke dalam tempat sampah lainnya. Pemisahan ini juga harus dilakukan di tingkat industri dan pemerintah agar proses pengelolaan sampah menjadi lebih efisien.',
                },
                {
                    section: 'Kesimpulan',
                    text: 'Mengenal dan memisahkan sampah organik dan anorganik adalah langkah awal yang penting dalam pengelolaan sampah yang ramah lingkungan. Dengan pemisahan yang baik, kita tidak hanya membantu menjaga kebersihan lingkungan, tetapi juga mendukung upaya daur ulang dan pembuatan kompos. Setiap individu memiliki peran penting dalam mewujudkan pengelolaan sampah yang lebih efektif dan berkelanjutan.',
                },
            ],
            video: 'https://youtu.be/nrANKUUHBf0?si=xzDpyuYfx4LNel8H',
        },
    ];

    const article = detail.find((article) => article.id === parseInt(id));

    if (!article) {
        return null;
    }

    return article;
};

module.exports = { articles, detailsArticle };
