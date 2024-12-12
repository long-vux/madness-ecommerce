# Madness E-commerce App

Madness is a full-featured e-commerce application that allows users to browse, search, and purchase products. The app supports two modes for purchases:

1. **Logged-in Users**: Users who have created an account and logged in can enjoy a personalized shopping experience, including order history and saved preferences.
2. **Guest Users**: Non-logged-in users can also make purchases, enabling quick and convenient shopping without the need for an account.

## Admin Account

- **Email**: Hoanglongvu233@gmail.com
- **Password**: admin123456

## Features

- **Product Management**: View, search, and filter products.
- **User Authentication**: Secure sign-up, login, and session management.
- **Shopping Cart**: Add, update, and remove items in the cart.
- **Checkout Process**: Complete purchases with or without an account.
- **Order Management**: Logged-in users can view their order history.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Containerization**: Docker Compose

## Prerequisites

Make sure you have the following installed on your system:

- Docker: [Download Docker](https://www.docker.com/)
- Docker Compose: Comes with Docker Desktop

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/long-vux/madness-ecommerce.git
cd madness-ecommerce
```

### 2. Build and Run the Application

Use Docker Compose to build and run the application:

```bash
docker-compose up --build
```

This command will:

1. Build the Docker images for the backend, frontend, and database services.
2. Start all the services defined in the `docker-compose.yml` file.

### 3. Access the Application

- Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the frontend.
- The backend API is available at [http://localhost:5000](http://localhost:5000).

### 4. Stopping the Application

To stop the running containers, press `CTRL+C` in the terminal and run:

```bash
docker-compose down
```

## Project Structure

```plaintext
madness-ecommerce/
├── frontend/       # React app source code
├── backend/        # Node.js & Express backend source code
├── database/       # MongoDB initialization scripts
├── docker-compose.yml  # Docker Compose configuration
└── README.txt      # Project documentation
```

## Configuration

### Environment Variables

Ensure the following environment variables are correctly set in `.env` files for the backend and database services:

- **Backend**:
  - `PORT`: Backend server port (default: 5000)
  - `MONGO_URI`: MongoDB connection string
  - `JWT_SECRET`: Secret key for JWT authentication

- **Database**:
  - `MONGO_INITDB_ROOT_USERNAME`: MongoDB root username
  - `MONGO_INITDB_ROOT_PASSWORD`: MongoDB root password

### Sample `.env` File

Create a `.env` file in the `backend` directory:

```plaintext
PORT=5000
MONGO_URI=mongodb://database:27017/finalNode
JWT_SECRET=your-secret-key
```

## Contribution

Feel free to fork this repository, make improvements, and submit pull requests. Your contributions are greatly appreciated!

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for using Madness! If you encounter any issues, please open an issue in the repository.

