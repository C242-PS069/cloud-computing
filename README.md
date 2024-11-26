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
            "id": number,
            "title": string,
            "description": string,
            "image": string
        },
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
        "id": number,
        "title": string,
        "content": [
            {
                "section": string,
                "text":string
            },
            ...
        ],
        "video": string
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
            "id": number,
            "image": string
        },
        ...
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
  git clone https://github.com/C242-PS069/cloud-computing.git
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
