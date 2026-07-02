
from flask import Flask, render_template, request

app = Flask(__name__)

# Main Index Route
@app.route('/')
def home():
    return render_template('index.html')

# Redirection for Join Us page
@app.route('/join_us.html')
def join_us():
    return render_template('join_us.html')

# Redirection for Stories/Reading page
@app.route('/reading.html')
def reading():
    # Catches the '?id=' parameter if needed in your backend logic later
    story_id = request.args.get('id')
    return render_template('reading.html', story_id=story_id)

if __name__ == '__main__':
    # Runs the app on all available IPs on port 5000
    app.run(debug=True, host='0.0.0.0', port=5000)