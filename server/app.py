#!/usr/bin/env python3

# Standard library imports

# Remote library imports


from flask import Flask, request, make_response, jsonify, session
# from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import Furniture, Project, User
# from flask_cors import CORS
# from flask_bcrypt import Bcrypt
from config import app, db, api, bcrypt

# Add your model imports
# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.json.compact = False

# migrate = Migrate(app, db)
# db.init_app(app)
# CORS(app)
# api = Api(app)

# Views go here!

# @app.route('/')
# def index():
#     return '<h1>Phase 4 Project Server</h1>'




class AllProjects(Resource):
    def get(self):
        ap = Project.query.all()
        return [project.to_dict() for project in ap],200
    def post(self):
        try:
            data = request.get_json()
            p = Project(
                title=data["title"],
                budget=data.get("budget"),
                descriptione=data["description"]
            )
            db.session.add(p)
            db.session.commit()
            return p.to_dict()
        except Exception as e:
            print(e)
            return {
                "error": "not valid or projects"
            },400
api.add_resource(AllProjects,"/projects")


class OneProject(Resource):
    def get(self,id):
        project = Project.query.filter(Project.id == id).first()
        if project:
            return project.to_dict()
        else:
            return {
                "error": "not valid id0"
            },400
    def patch(self,id):
        project = Project.query.filter(Project.id == id).first()
        if project:
            try:
                data = request.get_json()
                for key in data:
                    setattr(project,key,data[key])
                db.session.add(project)
                db.session.commit()
                return project.to_dict()
            except Exception as e:
                print(e)
                return {
                    "error": "validation error"
                }
        else:
            return {
                "error": "not valid id1"
            },400
    def delete(self,id):
        project = Project.query.filter(Project.id == id).first()
        if project:
            db.session.delete(project)
            db.session.commit()
        else:
            return {
                "error": "not valid id2"
            },400

api.add_resource(OneProject,'/projects/<int:id>')

class All_Furniture(Resource):
    def get(self):
        
        af = Furniture.query.all()
        return [furniture.to_dict() for furniture in af]
    def post(self):
        try:
            data = request.get_json()
            f = Furniture(
                name = data["name"],
                price = data["price"],
                img = data["img"],
                type = data["type"]
            )
            db.session.add(f)
            db.session.commit()
            return f.to_dict(),201
        except Exception as e:
            print(e)
            return {"error": "Not valid furniture"}, 400
        
api.add_resource(All_Furniture,'/furniture')

class SaveSession(Resource):
    def get(self):
        print(session)
        return {}
    def post(self):
        data = request.get_json()
        session['data'] = data['data']
        print(data)
        return {}

api.add_resource(SaveSession,'/session')

# How can use this for user login?

# Lets create a login route that will check if the user exist and
# Save it to session
class Login(Resource):
    def post(self):
        data = request.get_json()
        print(data)
        user = User.query.filter(User.username == data['username']).first()
        if user and user.authenticate(data['password']):
            if data['stayLoggedIn']:
                session['user_id'] = user.id
            return user.to_dict()
        else:
            return {"Error": "Not valid user"},400
api.add_resource(Login,'/login')

# class Logout(Resource):
#     def delete(self):
#         session['user_id'] = None
#         return {}, 200
# api.add_resource(Logout,'/logout')

class Logout(Resource):
    def delete(self):
        session.pop('user_id', None)
        return {}, 200
api.add_resource(Logout,'/logout')


class Signup(Resource):
    def post(self):
        try:
            data = request.get_json()
            user = User( name= data['user'], username = data['username'], password_hash = data['password'])
            print(user.username)
            db.session.add(user)
            db.session.commit()
            session['user_id'] = user.id
            return user.to_dict()
        except Exception as e:
            print(e)
            return {"Error":"Can't signup"},400
api.add_resource(Signup,'/signup')

class CheckSession(Resource):
    def get(self):
        if session.get('user_id'):
            user = User.query.filter(User.id == session.get('user_id')).first()
            return user.to_dict()
        else:
            return {},404
api.add_resource(CheckSession,'/checksessions')
# Create a logout route now! set session to None


# Use @app.before_request!
# @app.before_request
# def check_session():
#     valid_routes = ['/checksessions','/login','/signup']
#     # print(request.path)
#     if session.get('user_id') or request.path in valid_routes:
#         pass
#     else:
#         return {
#             "error":"not valid route"
#         },400



if __name__ == '__main__':
    app.run(port=5555, debug=True)

# small change

# second small change
