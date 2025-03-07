# Expense Tracker

A simple and efficient expense tracking application built with Node.js, Express, and MongoDB. This application allows users to track their expenses by category, amount, and date.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- Add, view, and manage expenses
- Categorize expenses (e.g., food, transport, shopping)
- View all expenses with date and description
- RESTful API design

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/expense-tracker.git
   ```

2. Navigate to the project directory:

   ```bash
   cd expense-tracker
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up your environment variables. Create a `.env` file in the root directory and add the following:

   ```plaintext
   PORT=5001
   MONGODB_URI=your_mongodb_connection_string
   ```

5. Start the server:

   ```bash
   npm start
   ```

## Usage

- Access the application at `http://localhost:5001` (or your specified port).
- Use the API endpoints to interact with the expense data.

## API Endpoints

- `POST /api/tracker/create-expense`: Create a new expense
- `GET /api/tracker/get-all-expenses`: Retrieve all expenses

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

