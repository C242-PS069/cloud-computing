# C242-PS069

Dokumentasi learning path cloud computing yang digunakan pada Capstone Project C242-PS069

![Logo](https://media1.tenor.com/m/giUO2-235vAAAAAd/megumin-staff.gif)

## Features

-   Get Articles API
-   Get Details article API
-   Get Banner API
-   Get Prediction API

## API Reference

#### Get all items

```http
  GET /api/articles
```

```
{
    "status": "success",
    "message": "Articles fetched successfully",
    "data": [
        {
            "id": 1,
            "title": "Apa itu sampah ?",
            "description": "Penjelasan tentang pengertian sampah, jenis-jenisnya, dan cara mendaur ulangnya.",
            "image": "https://images.unsplash.com/photo-1602262442764-c14f8db98045?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "id": 2,
            "title": "Sampah organik dan non organik",
            "description": "Penjelasan tentang pengertian sampah organik dan non organik.",
            "image": "https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
}
```

#### Get item

```http
  GET /api/articles/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of item to fetch |

```
{
    "status": "success",
    "message": "Article fetched successfully",
    "data": {
        "id": 1,
        "title": "Apa itu sampah ?",
        "content": [
            {
                "section": "Definisi sampah",
                "text": "Sampah merupakan masalah lingkungan yang semakin kompleks di seluruh dunia. Pengelolaan sampah yang buruk dapat menyebabkan pencemaran tanah, air, dan udara, yang berpengaruh negatif terhadap kesehatan manusia dan makhluk hidup lainnya. Oleh karena itu, penting bagi setiap individu dan masyarakat untuk memahami cara mengelola sampah dengan baik."
            },
            {
                "section": "Jenis-Jenis Sampah",
                "text": "Sampah dapat dibagi menjadi dua kategori utama, yaitu sampah organik dan anorganik. Sampah organik terdiri dari bahan-bahan yang berasal dari makhluk hidup, seperti sisa makanan dan daun. Sedangkan sampah anorganik mencakup barang-barang seperti plastik, kaca, dan logam yang tidak dapat terurai secara alami dalam waktu singkat."
            },
            {
                "section": "Dampak Sampah yang Tidak Terkelola dengan Baik",
                "text": "Sampah yang menumpuk tanpa pengelolaan yang tepat dapat mencemari lingkungan dan mempengaruhi kualitas hidup manusia. Sampah plastik, misalnya, dapat menyebabkan polusi di lautan dan mengancam keberadaan biota laut. Sementara itu, sampah organik yang tidak dikelola dengan benar dapat menimbulkan bau tidak sedap dan menjadi tempat berkembang biaknya berbagai penyakit."
            },
            {
                "section": "Cara Mengelola Sampah dengan Baik",
                "text": "Untuk mengurangi dampak negatif sampah, kita perlu menerapkan prinsip 3R: Reduce (mengurangi), Reuse (menggunakan kembali), dan Recycle (mendaur ulang). Mengurangi penggunaan plastik sekali pakai, menggunakan barang-barang yang dapat digunakan kembali, dan mendaur ulang sampah anorganik adalah langkah-langkah yang dapat kita lakukan sehari-hari."
            },
            {
                "section": "Peran Pemerintah dan Masyarakat",
                "text": "Pemerintah memiliki peran penting dalam membuat kebijakan yang mendukung pengelolaan sampah yang efektif, seperti menyediakan tempat sampah yang terpisah untuk sampah organik dan anorganik, serta mendorong program daur ulang. Masyarakat juga perlu berperan aktif dalam memilah sampah dan mengurangi penggunaan bahan-bahan yang sulit terurai."
            },
            {
                "section": "Kesimpulan",
                "text": "Pengelolaan sampah yang baik merupakan tanggung jawab bersama antara individu, masyarakat, dan pemerintah. Dengan kesadaran yang lebih tinggi tentang pentingnya pengelolaan sampah, kita dapat menjaga kelestarian lingkungan dan menciptakan dunia yang lebih sehat untuk generasi mendatang."
            }
        ],
        "video": "https://youtu.be/O-psaaoiVuA?si=L8DeD3MHGra19f_Z"
    }
}
```

#### Get banner

```http
  GET /api/banners
```

```
{
    "status": "success",
    "message": "Articles fetched successfully",
    "data": [
        {
            "id": 1,
            "image": "https://storage.googleapis.com/banner-sampah/banner-1.png"
        },
        {
            "id": 3,
            "image": "https://storage.googleapis.com/banner-sampah/banner-3.png"
        },
        {
            "image": "https://storage.googleapis.com/banner-sampah/banner-2.png",
            "id": 2
        }
    ]
}
```

#### Get machine learning prediction

```http
  coming soon
```

## Run Locally

Clone the project

```bash
  git clone https://https://github.com/C242-PS069/cloud-computing.git
```

Go to the project directory

```bash
  cd cloud-computing
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Tech Stack

-   Javascript Hapi js
-   Tensorflow-nodejs

## Deployment

-   **Cloud Storage**: to save machine learning models
-   **Cloud Firestore**: to save machine learning output
-   **Cloud Run**: to deploy backend services
-   **App Engine**: to deploy mobile application

## Cloud Computing Cohort

-   Rifqi Alisba Garwita Sutrisno as [@sirWerq](https://github.com/sirWerq)
-   Andi Faqriyah Putra Purnama as [@Andifaqriya](https://github.com/Andifaqriya)

## Author

-   Rifqi Alisba Garwita Sutrisno as [@sirWerq](https://github.com/sirWerq)
