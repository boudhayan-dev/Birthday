
import sys,os
sys.path.append(os.path.dirname(os.getcwd()))
from app.models import User
from app import db
u = User(username=sys.argv[1])
u.set_password(sys.argv[2])
db.session.add(u)
db.session.commit()

