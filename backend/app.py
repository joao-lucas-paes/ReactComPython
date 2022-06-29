from flask import Flask

#criamos o app e escolhemos um nome qualquer, aqui eu denominei como estudo
app = Flask(__name__)

# o seguinte comando serve para definir
@app.route("/data")

def hello():
    return {'teste':'testizinho'}
if __name__ == "__main__":
    app.run(debug = True)
