from flask import Flask, abort, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello():
    return "Hello World!"
        
if __name__ == "__main__":
    app.run(host="localhost", debug=True, port=8080)