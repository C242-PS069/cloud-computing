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

## API Reference

#### API TOKEN

```http
  Before you can use all those APIs (except login and register), you need to get an API Token for all the services we build then use it in headers authorization.
```

#### How To Get?

```
Just register and login then you get the api key😇😇
```

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

```http
  POST /reset-password
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
