// client/src/App.jsx

import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputData, setInputData] = useState({
    pregnancies: "",
    glucose: "",
    bloodPressure: "",
    skinThickness: "",
    insulin: "",
    bmi: "",
    diabetesPedigreeFunction: "",
    age: "",
  });
  const [prediction, setPrediction] = useState("");
  const [showPrediction, setShowPrediction] = useState(false);

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputData: Object.values(inputData) }),
    });

    const data = await response.json();
    setPrediction(
      data.prediction === "1"
        ? "The person is diabetic"
        : "The person is not diabetic"
    );
    setShowPrediction(true);
  };

  const handlePredictAnother = () => {
    setShowPrediction(false);
    setInputData({
      pregnancies: "",
      glucose: "",
      bloodPressure: "",
      skinThickness: "",
      insulin: "",
      bmi: "",
      diabetesPedigreeFunction: "",
      age: "",
    });
    setPrediction("");
  };

  return (
    <div className="container">
      <h1>Diabetes Prediction</h1>
      {!showPrediction && (
        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-group">
            <label>Pregnancies:</label>
            <input
              type="number"
              name="pregnancies"
              value={inputData.pregnancies}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Glucose:</label>
            <input
              type="number"
              name="glucose"
              value={inputData.glucose}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Blood Pressure:</label>
            <input
              type="number"
              name="bloodPressure"
              value={inputData.bloodPressure}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Skin Thickness:</label>
            <input
              type="number"
              name="skinThickness"
              value={inputData.skinThickness}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Insulin:</label>
            <input
              type="number"
              name="insulin"
              value={inputData.insulin}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>BMI:</label>
            <input
              type="number"
              name="bmi"
              value={inputData.bmi}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Diabetes Pedigree Function:</label>
            <input
              type="number"
              name="diabetesPedigreeFunction"
              value={inputData.diabetesPedigreeFunction}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={inputData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Predict</button>
          </div>
        </form>
      )}
      {showPrediction && (
        <div className="prediction">
          <h2>{prediction}</h2>
          <button className="predict-another" onClick={handlePredictAnother}>
            Predict Another
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
