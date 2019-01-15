<h1>Birthday</h1>

[![made-with-python](https://img.shields.io/badge/Made%20with-Python-blue.svg?longCache=true&style=plastic)](https://www.python.org/) [![GitHub license](https://img.shields.io/aur/license/yaourt.svg?style=popout-square?longCache=true&style=plastic)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE) ![PyPI - Status](https://img.shields.io/pypi/status/Django.svg?style=plastic)

<p>
This is a template to wish somebody on their birthday. It contains a scattered gallery, cards with birthday wishes 
on them, a word cloud made from their chat history generated using <a href="https://github.com/amueller/word_cloud">Word Cloud Generator</a> and an embedded gift card. The recepient's email address is pre-configured and it gets delivered to them when they view it. 
</p>
<br>
<small><strong>Note:</strong> The site works best on Chrome. </small>

<h2>Demo<h2>

![](demo/demo.gif)


<h2> Download and Installation</h2>
<ul>
<li> Clone the repository</li>
<pre>git clone https://github.com/boudhayan-dev/Birthday</pre>
<li> Set few environment variables </li>
<pre>
""" I have used Gmail. If another service is used then set the following optional variables as well.
    set MAIL_SERVER = mail_server_host
    set MAIL_PORT = mail_server_port
"""
cd Bday-flask<br>
set MAIL_USERNAME = sender's email address<br>
set MAIL_PASSWORD = sender's password<br>
set MAIL_RECEIVER = receiver's email address
</pre>
<small><strong>Note:</strong></small> use <code> export </code> instead of <code>set</code> in case of Linux.
<li>Create a user for accessing the site</li>
<pre>
flask db init<br>
python util/create_user.py username password<br>
flask db migrate -m "Created admin user"<br>
flask db upgrade
</pre>
The above creds will be used to login in the website.
<li>Create virtual environment and activate it</li>
<pre>
virtualenv venv
</pre>
<li>Activate the virtualenv</li>
<pre>
cd venv/Scripts<br>
activate
cd ../../
</pre>
<li>Install all dependencies</li>
<pre>
pip install -r requirements.txt
</pre>
<li> Run</li>
<pre>
flask run
</pre>
</ul>



<small>© 2019 Boudhayan Dev.  All rights reserved.</small>
