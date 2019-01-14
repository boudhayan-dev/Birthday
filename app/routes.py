from flask import render_template, flash, redirect, url_for, request
from app import app,mail
from app.forms import LoginForm
from flask_login import current_user, login_user , logout_user, login_required
from app.models import User
from config import Config
from flask_mail import Mail, Message

@app.route('/')
@app.route('/index')
def index():
    return render_template("index.html")


@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('main'))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user is None or not user.check_password(form.password.data):
            flash('Invalid username or password')
            print("Invalid username or password")
            return redirect(url_for('login'))
        login_user(user)
        return redirect(url_for('main'))
    return render_template("login.html",form=form)


@app.route('/main')
@login_required
def main():
    return render_template("main.html")

@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('index'))

@login_required
@app.route('/sendMail')
def sendMail():
    msg = Message('Hello', sender = Config.MAIL_USERNAME, recipients = [Config.MAIL_RECEIVER])
    msg.body = "Mail content"
    mail.send(msg)
    return  ('', 204)