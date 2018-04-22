from flask import render_template
from app import app


@app.route('/')
def index():
    return "Hebrew practice!"


@app.route('/abc')
def alphabet():
    return render_template('alphabet.html')


@app.route('/numbers')
def custom_numbers():
    return render_template('custom_numbers.html')


@app.route('/random')
def random_numbers():
    return render_template('random_numbers.html')


@app.route('/clock')
def clock():
    return render_template('clock.html')
