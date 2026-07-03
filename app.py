from flask import Flask, render_template, request, send_from_directory, redirect, url_for, make_response
import os

app = Flask(__name__)

# Main Index Route
@app.route('/')
def home():
    return render_template('index.html')

# Clean URLs implementation (SEO Optimization)
@app.route('/join-us')
def join_us():
    return render_template('join_us.html')

# Redirect old .html to clean URL for SEO preservation
@app.route('/join_us.html')
def join_us_redirect():
    return redirect(url_for('join_us'), code=301)

# Clean URLs implementation (SEO Optimization)
@app.route('/reading')
def reading():
    story_id = request.args.get('id')
    return render_template('reading.html', story_id=story_id)

# Redirect old .html to clean URL for SEO preservation
@app.route('/reading.html')
def reading_redirect():
    story_id = request.args.get('id')
    if story_id:
        return redirect(url_for('reading', id=story_id), code=301)
    return redirect(url_for('reading'), code=301)

@app.route('/robots.txt')
def static_from_root():
    return send_from_directory(app.static_folder, request.path[1:])

@app.route('/sitemap.xml')
def sitemap():
    # Dynamic sitemap generation
    pages = [
        {"loc": "https://www.masikacare.com/", "priority": "1.0"},
        {"loc": "https://www.masikacare.com/join-us", "priority": "0.8"},
        {"loc": "https://www.masikacare.com/reading", "priority": "0.8"}
    ]
    sitemap_xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    sitemap_xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    for page in pages:
        sitemap_xml += '  <url>\n'
        sitemap_xml += f'    <loc>{page["loc"]}</loc>\n'
        sitemap_xml += f'    <priority>{page["priority"]}</priority>\n'
        sitemap_xml += '  </url>\n'
    sitemap_xml += '</urlset>'
    
    response = make_response(sitemap_xml)
    response.headers["Content-Type"] = "application/xml"
    return response

if __name__ == '__main__':
    # Runs the app on all available IPs on port 5000
    app.run(debug=True, host='0.0.0.0', port=5000)