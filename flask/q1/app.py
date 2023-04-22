import os
from flask import Flask, render_template, request, url_for

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']
        # Save the submission to a file
        with open(os.path.join(app.root_path, 'submissions.txt'), 'a') as f:
            f.write(f'{name}, {email}, {message}\n')
        # Render the thank you page
        return render_template('thankyou.html')
    else:
        return render_template('contact.html')
    
def read_submissions():
    submissions = []
    with open(os.path.join(app.root_path, 'submissions.txt'), 'r') as f:
        for line in f:
            try:
                name, email, message = line.strip().split(',')
                submission = {'name': name, 'email': email, 'message': message}
                submissions.append(submission)
            except ValueError:
                print(f"Skipping invalid line: {line}")
    return submissions

@app.route('/sub')
def submissions():
    submissions = []
    with open(os.path.join(app.root_path, 'submissions.txt'), 'r') as f:
        for line in f:
            print(f"Reading line: {line}")
            try:
                name, email, message = line.strip().split(',')
                submission = {'name': name, 'email': email, 'message': message}
                submissions.append(submission)
            except ValueError:
                print(f"Skipping invalid line: {line}")
    return submissions


# import os
# from flask import Flask, render_template, request, url_for

# app = Flask(__name__)

# def get_submissions():
#     with open(os.path.join(app.root_path, 'submissions.txt'), 'r') as f:
#         submissions = []
#         for line in f:
#             name, email, message = line.strip().split(',')
#             submissions.append({'name': name, 'email': email, 'message': message})
#         return submissions

# @app.route('/', methods=['GET', 'POST'])
# def contact():
#     if request.method == 'POST':
#         name = request.form['name']
#         email = request.form['email']
#         message = request.form['message']
#         # Save the submission to a file
#         with open(os.path.join(app.root_path, 'submissions.txt'), 'a') as f:
#             f.write(f'{name}, {email}, {message}\n')
#         # Render the thank you page
#         return render_template('thankyou.html')
#     else:
#         return render_template('contact.html')

# @app.route('/sub')
# def get_submissions():
#     submissions = []
#     with open(os.path.join(app.root_path, 'submissions.txt'), 'r') as f:
#         for line in f:
#             print(f"Reading line: {line}")
#             try:
#                 name, email, message = line.strip().split(',')
#                 submission = {'name': name, 'email': email, 'message': message}
#                 submissions.append(submission)
#             except ValueError:
#                 print(f"Skipping invalid line: {line}")
#     return submissions
