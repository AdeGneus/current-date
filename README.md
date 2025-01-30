# HNG12 Stage 0 - Public API

## Project Description

This is a simple **public API** developed for the **HNG12 Internship (Stage 0 Backend Task)**. It returns basic information including:

- The registered **HNG12 email address**.
- The **current datetime** in **ISO 8601 format (UTC)**.
- The **GitHub repository URL**.

## Technology Stack

- **Node.js** (JavaScript runtime)
- **Express.js** (Web framework)
- **Yarn** (Package manager)
- **CORS** (Middleware to handle cross-origin requests)

## API Endpoint

**Method:** `GET`

**URL:** `/`

### **Response Format** (`200 OK`)

```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/AdeGneus/current-date"
}
```

## Setup Instructions

### **1. Clone the Repository**

```sh
git clone https://github.com/AdeGneus/current-date.git
cd current-date
```

### **2. Install Dependencies**

```sh
yarn install
```

### **3. Run the API Locally**

#### **Development Mode (with Auto-restart)**

```sh
yarn dev
```

This runs the API using Node.js built-in watch mode (`node --watch index.js`), which automatically restarts on file changes.

#### **Production Mode**

```sh
yarn start
```

## Deployment

This API is deployed and accessible [here](https://current-date-tan.vercel.app/)

## Additional Resources

- [Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)

## License

This project is licensed under the MIT License.
