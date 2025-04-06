import pickle
import pandas as pd
from sklearn.preprocessing import LabelEncoder

bmi = ['Extremely Weak', 'Weak', 'Normal', 'Overweight', 'Obesity', 'Extremely Obesity']

# use model in the saved model file in the model directory to predict the index for the given data
def predict_bmi_index(height, weight, gender):
    # Load the model from the file
    model_path = './models/qda_model.pkl'
    with open(model_path, 'rb') as model_file:
        model = pickle.load(model_file)
    
    # Prepare the input data
    #input_data = np.array([[height, weight]])
    input_data = pd.DataFrame([[gender, height, weight]], columns=['Gender', 'Height', 'Weight'])
    le = LabelEncoder()
    input_data['Gender'] = le.fit_transform(input_data['Gender'])
    
    # Predict the BMI index
    prediction = model.predict(input_data)
    print(prediction, prediction[0])
    return bmi[prediction[0]]


# Example usage
if __name__ == "__main__":
    # Example input
    height = input('What is your height in centimeters? ')  # in centimeters
    weight = input('What is your weight in kilograms? ')    # in kilograms
    gender = input('Is your gender Male/Female? ')

    # Predict the BMI index
    predicted_index = predict_bmi_index(height, weight, gender)
    
    print(f"Predicted BMI index for a {gender} with height {height} cm and weight {weight} kg is {predicted_index}")