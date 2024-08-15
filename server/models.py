
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from config import db, bcrypt
from sqlalchemy.ext.hybrid import hybrid_property

project_furniture_table = db.Table('project_furniture',
    db.Column('project_id', db.Integer, db.ForeignKey('projects.id'), primary_key=True),
    db.Column('furniture_id', db.Integer, db.ForeignKey('furniture.id'), primary_key=True)
)

class User(db.Model, SerializerMixin):

    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    username = db.Column(db.String, unique=True, nullable=False)

    projects = db.relationship('Projects', back_populates='user', cascade="all, delete-orphan")

    @hybrid_property
    def password_hash(self):
        return self._password_hash

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self,password):
        return bcrypt.check_password_hash(self._password_hash,password.encode('utf-8'))

class Project(db.Model, SerializerMixin):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False) 
    budget = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String)
    
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    user = db.relationship('Users', backpopulates='projects')
    
    furniture = db.relationship('Furniture', secondary=project_furniture_table, back_populates='projects')

    serialize_rules = ('-user.projects', '-furniture.projects')

    @validates('title')
    def validate_title(self, key, title):
        if 2 <= len(title) <= 15:
            return title
        else:
            raise ValueError('Title must be between 2 and 15 characters')
        
    @validates('budget')
    def validate_budget(self, key, budget):
        if budget > 0:
            return budget
        else:
            raise ValueError('Budget must be greater than 0')
        
    @validates('description')
    def validate_description(self, key, description):
        if 2 <= len(description) <= 200:
            return description
        else:
            raise ValueError('Description must be between 2 and 200 characters')
        
class Furniture(db.Model, SerializerMixin):
    __tablename__ = 'furniture'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    price = db.Column(db.Integer)
    image = db.Column(db.String)
    type = db.Column(db.String)

    projects = db.relationship('Projects', secondary=project_furniture_table, back_populates='furniture')

    serialize_rules = ('-projects.furniture',)

    @validates('name')
    def validate_name(self, key, name):
        if 2 <= len(name) <= 60:
            return name
        else:
            raise ValueError('Name must be between 2 and 60 characters')
        
    @validates('price')
    def validate_price(self, key, price):
        if price > 0:
            return price
        else:
            raise ValueError('Price must be greater than 0')
        
    @validates('image')
    def validate_image(self, key, image):
        if "http" in image:
            return image
        else:
            raise ValueError('Image must be a valid URL')
        
    
        
    
