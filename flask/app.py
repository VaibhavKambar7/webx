import os
from flask import Flask, render_template, request,url_for


app = Flask(__name__)
# app.config['DEBUG'] = True

@app.route('/', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']
        # Do something with the form data, like send an email
        return render_template(os.path.join('thankyou.html'))
    else:
        return render_template(os.path.join('contact.html'))

