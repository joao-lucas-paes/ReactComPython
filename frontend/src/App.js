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
