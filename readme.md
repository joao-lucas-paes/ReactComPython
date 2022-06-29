- Pré-requisitos:
-- Python 3.6 ou superior
-- pip
-- npm
-- node (Uma das versões mais recentes, caso contrário o React não funcionará)

- Começo:
Primeiro vamos ter certeza que o http-server está instalado:
'''
npm install --global http-server
'''

Neste passo eu criei uma pasta chamada "estudo", ela será a minha /, mas qualquer outro nome é aceito.
Após settar a home do projeto, criaremos uma pasta chamada "backend"

(AVISO: eu utilizei o conda para evitar problema com as dependências, então se quiser usar ele ou o venv, acredito que não há problemas)

Usaremos o flask e o flask-cors. O flask é uma leve framework de web applications que vai nos permitir com agilidade prosseguir esse tutorial. Já o flask-cors é para habilitar de maneira fácil o CORS. Isso vai nos permitir o Js do front se comunicar com o Python do back, sem ele o front seria blockeado de maneira automática.

-- Segue o comando:
'''
pip install flask flask-cors
'''

Dentro da pasta backend crie um arquivo chamado "app.py", nele colocaremos o básico:
'''
from flask import Flask

#criamos o app e escolhemos um nome qualquer
app = Flask(__name__)

# o seguinte comando serve para definir a rota
@app.route("/data")

def hello():
    return "{'teste':'testado'}"
if __name__ == "__main__":
    app.run(debug = True)
'''

- Agora Vamos para o React:
-- Instale o React:
'''
npm install react
'''

-- Instale o módulo para que o react sette o projeto do front:
'''
npm install create-react-app
'''

-- Na root do projeto dê o comando:
'''
npx create-react-project frontend
'''

-- Entre no arquivo localizado no caminho "/estudo/frontend/package.json" e adicione:
'''
"proxy":"http://localhost:5000/"
'''

-- Rode o React:
'''
npm start
'''

-- Lembre-se de rodar o código Python também

-- altere o arquivo app.js localizado no caminho "estudo/frontend/src/app.js" e coloque o seguinte código no lugar:
'''
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState({
        teste: ""
    });

 useEffect(()=>{
   fetch("/data").then((res) => {
     res.json().then((data)=>{
       setData({teste:data.teste})
     })
   })
 })

  return (
    <div className="App">
      <header className="App-header">
        Olá, veja seu teste: {data.teste}
      </header>
    </div>
  );
}

export default App;
'''

-- Se tudo ocorrer de maneira correta, você poderá testar a conexão mudando o valor do teste em return no app.py e ao atualizar a página do React, ele funcionará e terá o valor exibido diferente na sua página
