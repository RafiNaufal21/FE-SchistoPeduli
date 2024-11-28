from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from PIL import Image
import io

app = Flask(__name__)
CORS(app)  # Enable CORS

# Load the model
try:
    model = tf.keras.models.load_model('Keong_MobileNetV2.h5')  # Ensure the model is in the correct directory
    print("Model loaded successfully.")
except Exception as e:
    print(f"Error loading model: {e}")
    model = None

# Define class labels (this should match your model's classes)
class_labels = [
    "Identified not as snail", 
    "Oncomelania", 
    "Keong Sawah (Pila_ampullacea)", 
    "Identified not as snail", 
    "Identified not as snail", 
    "Identified not as snail", 
    "Identified not as snail"
]  # Replace with your actual labels

def preprocess_image(image):
    """
    Preprocess the image to match the input format expected by the model.
    The model expects 250x250 images with pixel values scaled to [0, 1].
    """
    # If the image has an alpha channel (RGBA), convert to RGB
    if image.mode == 'RGBA':
        image = image.convert('RGB')

    # Resize the image to 250x250 (since that's what the model expects)
    image = image.resize((250, 250))  # Resize to 250x250 as the model expects
    image = np.array(image) / 255.0  # Normalize the image to the range [0, 1]
    image = np.expand_dims(image, axis=0)  # Add batch dimension
    return image

@app.route('/predict', methods=['POST'])
def predict():
    if model is None:
        return jsonify({"error": "Model not loaded"}), 500

    # Check if the 'images' key exists in the request files
    if 'images' not in request.files:
        return jsonify({"error": "No 'images' part in the request"}), 400

    files = request.files.getlist("images")
    if not files:
        return jsonify({"error": "No files provided"}), 400

    results = []

    for file in files:
        if file.filename == '':
            continue  # Skip files with no name

        try:
            # Open the image file and process it
            image = Image.open(io.BytesIO(file.read()))
            input_data = preprocess_image(image)
            
            # Predict using the loaded model
            raw_prediction = model.predict(input_data)
            
            # Get the predicted class and confidence
            predicted_class = np.argmax(raw_prediction[0])  # Class with highest probability
            confidence = round(float(raw_prediction[0][predicted_class]) * 100, 2)
            
            # Check if all raw prediction values are below 0.50
            if np.all(raw_prediction[0] < 0.50):  # All values below 50%
                predicted_label = "Identified not as snail"
            else:
                # If confidence is below 80%, assign label to "Melanoides_tuberculata"
                if confidence < 80:  # raw_prediction[0][1] is the second class probability
                    predicted_label = "Melanoides_tuberculata"
                else:
                    predicted_label = class_labels[predicted_class]

            # Append results for this image
            results.append({
                "filename": file.filename,
                "predicted_label": predicted_label,  # Add label to the response
                "confidence": confidence,
                "raw_prediction": raw_prediction[0].tolist()  # Convert to list for JSON compatibility
            })
        except Exception as e:
            # Handle errors during processing for each file
            results.append({
                "filename": file.filename,
                "error": str(e)
            })

    # If there are no results, return an error
    if not results:
        return jsonify({"error": "Failed to process images"}), 500

    return jsonify(results)

if __name__ == '__main__':
    app.run(port=8001, debug=True)
