#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request
from flask_restful import Resource

# Local imports
from config import app, db, api
from models import db, Furniture, Project, User

from flask import Flask, request, make_response, jsonify
from flask_migrate import Migrate

if __name__ == '__main__':
    app.run(port=5555, debug=True)

# small change
