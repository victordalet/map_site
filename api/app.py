import sys

import requests
from flask import Flask, request, jsonify
from flasgger import Swagger
from flask_mysqldb import MySQL
from flask_cors import CORS, cross_origin
import os
import hashlib
import uuid

"""
INITIALISATION FLASK
"""
app = Flask(
    __name__, static_url_path="",
    static_folder="static",
    template_folder="templates"
)
swagger = Swagger(app)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"
app.config["SECRET_KEY"] = os.urandom(24)
app.config["UPLOADED_FILES"] = ""

"""
INITIALISATION MYSQL
"""
app.config["MYSQL_DB"] = sys.argv[1]
app.config["MYSQL_HOST"] = sys.argv[2]
app.config["MYSQL_PASSWORD"] = sys.argv[3]
app.config["MYSQL_USER"] = sys.argv[4]
app.config["MYSQL_PORT"] = int(sys.argv[5])

mysql = MySQL(app)

"""
API ROUTES FOR CLIENT
"""


@app.route("/register", methods=["POST"])
@cross_origin()
def register():
    try:
        data = request.get_json()
        username = data["user"]
        password = data["password"]
        token = uuid.uuid4().hex
        h = hashlib.new('sha256')
        h.update(password.encode())
        password = h.hexdigest()
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM user WHERE name = %s", (username,))
        user = cur.fetchone()
        if user:
            cur.execute(
                "UPDATE user SET token = %s WHERE name = %s",
                (token, username)
            )
        else:
            cur.execute(
                "INSERT INTO user (name, password, token) VALUES (%s, %s, %s)",
                (username, password, token)
            )
        mysql.connection.commit()
        cur.close()
        return jsonify({"token": token, "message": "User registered"})
    except Exception as e:
        return jsonify({"message": "Error registering user"})


@app.route("/pos", methods=["GET"])
@cross_origin()
def pos():
    try:
        # token = request.headers.get("Authorization") ##TODO
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM position")
        pos = cur.fetchall()
        cur.close()
        return jsonify(pos)
    except Exception as e:
        return jsonify({"message": "Error getting pos"})


@app.route("/rank", methods=["GET"])
@cross_origin()
def rank():
    try:
        cur = mysql.connection.cursor()
        cur.execute("SELECT user, SUM(points) as points FROM city GROUP BY user")
        return jsonify(rank)
    except Exception as e:
        return jsonify({"message": "Error getting rank"})


@app.route("/user_map", methods=["GET"])
@cross_origin()
def user_map():
    try:
        token = request.headers.get("Authorization")
        cur = mysql.connection.cursor()
        cur.execute("SELECT name FROM user WHERE token = %s", (token,))
        user = cur.fetchone()
        if not user:
            return jsonify({"message": "User not found"})
        user = user[0]
        cur.execute("SELECT * FROM city WHERE user = %s", (user,))
        cities = cur.fetchall()
        cur.close()
        return jsonify(cities)
    except Exception as e:
        return jsonify({"message": "Error getting map"})


@app.route("/insert_pos", methods=["POST"])
@cross_origin()
def insert_pos():
    try:
        data = request.get_json()
        city = data["city"]
        response = requests.get(
            f"https://nominatim.openstreetmap.org/search?addressdetails=1&q={city.replace(' ', '+')}&format=json")
        response = response.json()
        lat = response[0]["lat"]
        lon = response[0]["lon"]
        token = request.headers.get("Authorization")
        cur = mysql.connection.cursor()
        cur.execute("SELECT name FROM user WHERE token = %s", (token,))
        user = cur.fetchone()
        if not user:
            return jsonify({"message": "User not found"})
        user = user[0]
        cur.execute(
            "INSERT INTO position (user, latitude, longitude,points) VALUES (%s, %s, %s, %s)",
            (user, lat, lon, data["points"])
        )
        mysql.connection.commit()
        cur.close()
        return jsonify({"message": "Position inserted"})
    except Exception as e:
        return jsonify({"message": "Error inserting position"})


"""
LAUNCH APPLICATION
"""

app.run(host="0.0.0.0", port=5000)