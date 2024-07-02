import sys
import pickle
import numpy as np

# Load the model
with open('model/diabetes_model.pkl', 'rb') as file:
    classifier = pickle.load(file)

# Load the scaler
with open('model/scaler.pkl', 'rb') as file:
    scaler = pickle.load(file)

# Get the input data from the command line arguments
input_data = list(map(float, sys.argv[1:]))

# Change the input_data to a numpy array
input_data_as_numpy_array = np.asarray(input_data)

# Reshape the array as we are predicting for one instance
input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)

# Standardize the input data
std_data = scaler.transform(input_data_reshaped)

# Make the prediction
prediction = classifier.predict(std_data)

# Output the prediction
print(prediction[0])
