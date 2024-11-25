
# C242-PS069

Dokumentasi learning path cloud computing yang digunakan pada Capstone Project C242-PS069




![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)


## Features

- GetArticles API
- Get Details article API
- Get Banner API
- Get Prediction API



## API Reference

#### Get all items

```http
  GET /api/articles
```

#### Get item

```http
  GET /api/articles/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of item to fetch |

#### Get Banner

```http
  GET /api/banners
```

#### Get Machine Learning Prediction

```http
  coming soon
```

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
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

- Javascript Hapi js
- Tensorflow-nodejs

## Deployment

- **Cloud Storage**: to save machine learning models
- **Cloud Firestore**: to save machine learning output
- **Cloud Run**: to deploy backend services
- **App Engine**: to deploy mobile application
## Cloud Computing Cohort

- Rifqi Alisba Garwita Sutrisno as [@sirWerq](https://github.com/sirWerq)
- Andi Faqriyah Putra Purnama as [@Andifaqriya](https://github.com/Andifaqriya)

## Author
- Rifqi Alisba Garwita Sutrisno as [@sirWerq](https://github.com/sirWerq)

