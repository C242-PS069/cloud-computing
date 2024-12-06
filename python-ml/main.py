from flask import Flask, request, jsonify
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from flask_cors import CORS
from PIL import Image

app = Flask(__name__)
CORS(app)


classes = [
    'cardboard',
    'glass',
    'metal',
    'paper',
    'plastic_bottle',
    'plastic_container',
    'plastic_cup',
]

model = load_model('trained_model.h5')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        file = request.files.get("image")
        print(request.files)
        if not file:
            return jsonify({"error": True, "message": "File is not image"})
        img = Image.open(file).resize((224,224), Image.Resampling.BICUBIC).convert("RGB")
        img_array = image.img_to_array(img)
        img_array = img_array / 255
        img_array = np.expand_dims(img_array, axis=0)

        predictions = model.predict(img_array)
        predicted_class_index = np.argmax(predictions, axis=-1)[0]
        predicted_class_name = classes[predicted_class_index]

        return jsonify({
            "error": False,
            'predicted_class': predicted_class_name,
            'confidence': str(round(predictions[0][predicted_class_index]) * 100)
        }), 200
    except Exception as e:
        return jsonify({
            'error': True,
            'message_error': e
        }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
