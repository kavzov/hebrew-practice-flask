from flask import render_template
from app import app


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/abc')
def alphabet():
    return render_template('alphabet.html')


@app.route('/num_custom')
def num_custom():
    return render_template('num_custom.html')


@app.route('/num_random')
def num_random():
    return render_template('num_random.html')


@app.route('/time_custom')
def time_custom():
    return render_template('time_custom.html')


@app.route('/time_random')
def time_random():
    return render_template('time_random.html')
