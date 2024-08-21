from flask import request, session, jsonify
from flask_restful import Resource
from models import Furniture, Project, User, project_furniture_table
from config import app, db, api

# @app.before_request
# def check_credentials():
#     valid_routes = ("/checksessions","/login","/signup")
#     if request.path not in valid_routes and 'user_id' not in session:
#         return {"error": "please login"},401
#     else:
#         print("here")
#         pass

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
        print(session)
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


# Route to add furniture to a project
class AddFurnitureToProject(Resource):
    # def get(self):
    def get(self,id):
        project = Project.query.filter(Project.id == id).first()
        if project:
            return project.to_dict()
        else:
            return {
                "error": "not valid id0"
            },400
        # return {"message": "GET request works"}
    def post(self, id):
        try:
            data = request.get_json()
            furniture_id = data.get("furniture_id")

            project = Project.query.get(id)
            furniture = Furniture.query.get(furniture_id)

            if project and furniture:
                if furniture not in project.furniture:
                    project.furniture.append(furniture)
                    db.session.commit()
                    return {"message": "Furniture added to project"}, 201
                else:
                    return {"message": "Furniture already in project"}, 400
            else:
                return {"error": "Invalid project or furniture ID"}, 400
        except Exception as e:
            print(e)
            return {"error": "An error occurred while adding furniture to project"}, 500
        
api.add_resource(AddFurnitureToProject, '/project/<int:id>/add_furniture')

# Route to remove furniture from a project
class RemoveFurnitureFromProject(Resource):

    def get(self, id):
        project = Project.query.get(id)
        if project:
            return project.to_dict()
        else:
            return {
                "error": "Invalid project ID"
            }, 400

    def delete(self, id):
        try:
            data = request.get_json()
            furniture_id = data.get("furniture_id")

            project = Project.query.get(id)  # Use the ID from the URL
            furniture = Furniture.query.get(furniture_id)

            if project and furniture:
                if furniture in project.furniture:
                    project.furniture.remove(furniture)
                    db.session.commit()
                    return {"message": "Furniture removed from project"}, 200
                else:
                    return {"message": "Furniture not found in project"}, 400
            else:
                return {"error": "Invalid project or furniture ID"}, 400
        except Exception as e:
            print(e)
            return {"error": "An error occurred while removing furniture from project"}, 500

api.add_resource(RemoveFurnitureFromProject, '/project/<int:id>/remove_furniture')

class Login(Resource):
    def post(self):
        data = request.get_json()
        user = User.query.filter(User.username == data['username']).first()
        
        if user and user.authenticate(data['password']):
            if data.get('stayLoggedIn', False):
                session['user_id'] = user.id 
            return jsonify(user.to_dict()) 
        else:
            return jsonify({"Error": "Invalid username or password"}), 400
        
api.add_resource(Login, '/login')

class Logout(Resource):
    def delete(self):
        session['user_id'] = None
        return {}
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

# checks back end to see if we have saved a session
class CheckSession(Resource):
    def get(self):
        print("here")
        if session.get('user_id'):
            user = User.query.filter(User.id == session.get('user_id')).first()
            return user.to_dict()
        else:
            return {}, 404
        
api.add_resource(CheckSession,'/checksessions')

if __name__ == '__main__':
    app.run(port=5555, debug=True)