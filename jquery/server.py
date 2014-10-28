from flask import Flask, request
app = Flask(__name__, static_url_path='/static')

@app.route("/search")
def do_stub_search():
    q = request.args.get("q", "nothing")
    print(q)
    return """
    [
    {
        "name": "The Cat and the Gat",
        "description": "An enthralling children's story",
        "isbn": "QAAAA-BBBB-CCCC",
        "cover_image": "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7",
        "available": 2,
        "quantity": 2,
        "active_date": "2012-04-23T18:25:43.511Z",
        "permission": "FreeToCheckOut"
    },
    {
        "name": "Everyone Poops",
        "description": "Well it's true",
        "isbn": "QAAAA-BBBB-CCCC",
        "cover_image": "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7",
        "available": 2,
        "quantity": 2,
        "active_date": "2012-04-23T18:25:43.511Z",
        "permission": "FreeToCheckOut"
    }
    ]
    """ 

@app.route("/index.html")
def index():
    return open("index.html").read()
    #app.send_static_file("index.html")

@app.route("/")
def root():
    return index()

if __name__ == "__main__":
    app.run(debug = True)
