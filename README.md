
# Banking online payment API

This is KBZ banking web with blogs and user sign-in/up.


## Features

- Login
- Register
- Logout
- Login 
- Sessions
- Create Posts
- Get All Posts
- Get Post By Id
- Get Post By Tags
- Get Post 5
- Categories
- Tags
- HealthCheck



## Tech Stack

Node.js, Express.js, TypeScript, MongoDB, JsonWebToken, Image Upload, Git & GitHub 


## API Reference

#### Healthcheck

```http
  GET /api/healthcheck
```
#### User Register

```http
  POST /api/user/auth/register
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required** |
| `email`      | `string` | **Required** |
| `password`      | `string` | **Required** |
| `img`      | `string` | **Required** |

#### User Login

```http
  POST /api/user/auth/login
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required** |
| `password`      | `string` | **Required** |
| `passwordComfirmation`      | `string` | **Required** |

#### Create Posts

```http
  POST /api/users/createposts
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required** |
| `content`      | `array` | **Required** |
| `img`      | `string` | **Required** |
| `category`      | `string` | **Required** |
| `tags`      | `array` | **Required** |
| `subTitle`      | `array` | **Required** |
| `avTime`      | `string` | **Required** |

#### Get All Posts

```http
  GET /api/users/posts
```
#### Get  Post By ID

```http
  GET /api/users/posts/:id

```

#### Get  Posts By Tags

```http
  GET /api/users/posts/tags/bytags
```
#### Get  Posts Latest 5

```http
  GET /api/users/posts/latest/five
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
  npm run dev
```


## 🚀 About Me
I'm a full stack developer...

