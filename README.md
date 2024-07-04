# Diabetes Predictor Web App

## Overview

This web application predicts the likelihood of diabetes based on user inputs such as the number of pregnancies, glucose level, blood pressure, skin thickness, insulin level, BMI, diabetes pedigree function, and age. The prediction model is pre-trained and implemented in Python. The Node.js server utilizes the child process module to spawn the Python script and provide predictions.

## Features

- User-friendly interface built with React.
- Backend powered by Node.js.
- Utilizes a pre-trained machine learning model in Python for diabetes prediction.
- Accepts various health metrics as input.
- Provides real-time prediction results.


## Getting Started

### Prerequisites

- Node.js
- Python 3
- pip (Python package installer)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/hallowshaw/Diabetes-Predictor-Web.git
    ```

2. Navigate to the project directory:
    ```sh
    cd Diabetes-Predictor-Web
    ```

3. Install dependencies for the server:
    ```sh
    cd server
    npm install
    ```

4. Install dependencies for the client:
    ```sh
    cd ../client
    npm install
    ```

5. Install Python dependencies:
    ```sh
    pip install -r server/requirements.txt
    ```

### Running the Application

1. Start the backend server:
    ```sh
    cd server
    node app.js
    ```

2. Start the frontend development server:
    ```sh
    cd client
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Fill in the input fields with the required health metrics.
2. Click the "Predict" button.
3. The prediction result will be displayed on the screen.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Acknowledgements

- [Pima Indians Diabetes Database](https://www.kaggle.com/datasets/uciml/pima-indians-diabetes-database)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Python](https://www.python.org/)

## Contact

For any questions or feedback, please reach out to [myEmail](mailto:rhitam.rit54@gmail.com).


