import os
basedir = os.path.abspath(os.path.dirname(__file__))



class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    MAIL_SERVER= os.environ.get('MAIL_SERVER') or 'smtp.gmail.com'
    MAIL_PORT = os.environ.get('MAIL_PORT') or 465
    MAIL_USERNAME = os.environ.get('MAIL_USERNAME')
    MAIL_PASSWORD = os.environ.get('PASSWORD')
    MAIL_RECEIVER = os.environ.get('MAIL_RECEIVER')
    MAIL_USE_TLS = False
    MAIL_USE_SSL = True
    TESTING=False