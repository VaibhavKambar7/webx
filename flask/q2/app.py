from flask import Flask, render_template, request, flash, redirect, url_for, send_file
import os

app = Flask(__name__)
app.secret_key = 'hello'

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']

        # Send the form data to your email or do whatever you want with it

        # Flash a success message to the user
        # flash('Message sent successfully!', 'success')

        # Redirect the user to the contact page
        return redirect(url_for('home'))

    return render_template('contact.html')


@app.route('/resume')
def resume():
    return render_template('resume.html')

@app.route('/download_resume', methods=['POST'])
def download_resume():
    # Get the absolute path of the resume file
    resume_path = os.path.abspath('static\Resume.pdf')

    # Return a file download response
    return send_file(resume_path )

if __name__ == '__main__':
    app.run(debug=True)
