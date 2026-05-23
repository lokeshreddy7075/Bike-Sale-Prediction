import pandas as pd

from sklearn.model_selection import train_test_split

from sklearn.preprocessing import LabelEncoder

from sklearn.ensemble import RandomForestRegressor

import joblib

# LOAD DATASET

data = pd.read_csv(
    "bike_data.csv"
)

print(data.head())

# ENCODERS

brand_encoder = LabelEncoder()

fuel_encoder = LabelEncoder()

data["brand"] = brand_encoder.fit_transform(
    data["brand"]
)

data["fuel"] = fuel_encoder.fit_transform(
    data["fuel"]
)

# FEATURES

X = data[[

    "brand",
    "year",
    "km_driven",
    "owner",
    "fuel"

]]

# TARGET

y = data["price"]

# SPLIT DATA

X_train,X_test,y_train,y_test = train_test_split(

    X,
    y,

    test_size=0.2,

    random_state=42

)

# RANDOM FOREST MODEL

model = RandomForestRegressor(

    n_estimators=200,

    random_state=42

)

# TRAIN MODEL

model.fit(

    X_train,
    y_train

)

# ACCURACY

score = model.score(

    X_test,
    y_test

)

print(

    "Model Accuracy:",
    score

)

# SAVE MODEL

joblib.dump(

    model,
    "bike_price_model.pkl"

)

joblib.dump(

    brand_encoder,
    "brand_encoder.pkl"

)

joblib.dump(

    fuel_encoder,
    "fuel_encoder.pkl"

)

print(
    "Random Forest Model Trained Successfully 🚀"
)