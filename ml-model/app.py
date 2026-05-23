from flask import Flask,request,jsonify

from flask_cors import CORS

import joblib

import pandas as pd

# LOAD TRAINED MODEL

model = joblib.load(
    "bike_price_model.pkl"
)

brand_encoder = joblib.load(
    "brand_encoder.pkl"
)

fuel_encoder = joblib.load(
    "fuel_encoder.pkl"
)

# FLASK APP

app = Flask(__name__)

CORS(app)

# HOME ROUTE

@app.route("/")

def home():

    return "Bike Price Prediction API Running 🚀"

# PREDICT ROUTE

@app.route("/predict",methods=["POST"])

def predict():

    try:

        # GET DATA

        data = request.json

        print("Received Data:",data)

        # EXTRACT VALUES

        brand = data["brand"]

        year = int(data["year"])

        km = int(data["kmDriven"])

        owner = int(data["owner"])

        fuel = data["fuel"]

        # ENCODE BRAND

        brand_encoded = brand_encoder.transform(
            [brand]
        )[0]

        # ENCODE FUEL

        fuel_encoded = fuel_encoder.transform(
            [fuel]
        )[0]

        # CREATE DATAFRAME

        input_data = pd.DataFrame([{

            "brand":brand_encoded,

            "year":year,

            "km_driven":km,

            "owner":owner,

            "fuel":fuel_encoded

        }])

        print(input_data)

        # PREDICT PRICE

        prediction = model.predict(
            input_data
        )[0]

        predicted_price = round(
            prediction
        )

        print(
            "Prediction:",
            predicted_price
        )

        # SEND RESPONSE

        return jsonify({

            "predicted_price":
            predicted_price

        })

    except Exception as e:

        print("Error:",e)

        return jsonify({

            "error":str(e)

        })

# RUN SERVER

if __name__ == "__main__":

    app.run(

        debug=True,

        port=5001

    )