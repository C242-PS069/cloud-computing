# C242-PS069

Dokumentasi learning path cloud computing yang digunakan pada Capstone Project C242-PS069

## Features

-   Get Articles API
-   Get Details article API
-   Get Banner API
-   Post Register
-   Post Login
-   Post Reset password
-   Post Edit profile
-   Post Predict image
-   Get Details Predict Data

## API Reference

#### API TOKEN

```http
  Before you can use all those APIs (except login, register and reset password), you need to get an API Token for all the services we build then use it in headers authorization.
```

#### How To Get?

```
Just register and login then you get the api key😇😇
```

#### Get all items

if you want to get articles

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

if you want to get details articles

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

if you want to get image banner

```http
  GET /api/banners
```

```
{
    "status": "success",
    "message": "Banners fetched successfully",
    "data": [
        {
            "id": number,
            "image": string
        },
        ...
    ]
}
```

#### Post register

if you want to register

```http
  POST /register
```

| Parameter  | Type     | Description   |
| :--------- | :------- | :------------ |
| `email`    | `string` | **Required**. |
| `password` | `string` | **Required**. |
| `username` | `string` | **Required**. |

```
{
    "status": "success",
    "message": "User registered successfully"
}
```

#### Post login

if you want to login

```http
  POST /login
```

| Parameter  | Type     | Description   |
| :--------- | :------- | :------------ |
| `email`    | `string` | **Required**. |
| `password` | `string` | **Required**. |

```
{
    "status": "success",
    "message": "User logged in successfully",
    data: {
        "uid": string,
        "name": string,
        "token": string
    }
}
```

#### Post reset password

if you forget your password you can use it

```http
  POST /reset-password
```

| Parameter | Type     | Description   |
| :-------- | :------- | :------------ |
| `email`   | `string` | **Required**. |

```
{
    "status": "success",
    "message": "Password reset email sent successfully",
}
```

#### Post edit profile

if you want to edit your profile

```http
  POST /edit-profile
```

| Parameter     | Type     | Description                                         |
| :------------ | :------- | :-------------------------------------------------- |
| `newUsername` | `string` | **optional**.                                       |
| `oldPassword` | `string` | **optional (required if want to change password)**. |
| `newPassword` | `string` | **optional (required if want to change password)**. |
| `email`       | `string` | **Required**.                                       |

```
{
    "status": "success",
    "message": "Profile updated successfully",
}
```

#### Post predict

use this if you want to send image to machine learning feature

```http
  POST /predict
```

| Parameter | Type                    | Description   |
| :-------- | :---------------------- | :------------ |
| `image`   | `application/form-data` | **required**. |

```
{
    "status": "success",
    "message": "Predict fetched successfully",
    "data": [
        {
            "id": number,
            "description": string,
            "image": string,
            "materials": [
                string,
                ...
            ],
            "title": string
        },
        ...
    ],
    "predict": {
        "confident": string,
        "label": string
    }
}
```

#### Get details data predict

if you want to know about details

```http
  GET /api/recycles/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of item to fetch |

```
{
    "status": "success",
    "message": "recycle fetched successfully",
    "data": {
        "id": number,
        "description": string,
        "makes": {
            "step": [
              string
              ...
            ],
            "title": string
        },
        "title": string,
        "materials": [
            string
            ...
        ],
        "tools": {
            "materials-tools": [
              string
              ...
            ],
            "title": string
        },
        "video": string
    }
}
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

-   **Cloud Storage**: to save machine learning models and fixed profile user
-   **Cloud Firestore**: to save data user
-   **Firebase**: to user login
-   **Cloud Run**: to deploy backend services and machine learning prediction services
-   **App Engine**: to deploy mobile application

## Cloud Computing Cohort

-   Rifqi Alisba Garwita Sutrisno as [@sirWerq](https://github.com/sirWerq)
-   Andi Faqriyah Putra Purnama as [@Andifaqriya](https://github.com/Andifaqriya)

## Author

-   Rifqi Alisba Garwita Sutrisno as [@sirWerq](https://github.com/sirWerq)
