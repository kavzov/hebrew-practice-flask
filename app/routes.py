from flask import render_template
from app import app


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/abc')
def alphabet():
    return render_template('alphabet.html')


@app.route('/numbers')
def num_custom():
    return render_template('num_custom.html')


@app.route('/random')
def num_random():
    return render_template('num_random.html')


@app.route('/clock')
def clock():
    return render_template('clock.html')
