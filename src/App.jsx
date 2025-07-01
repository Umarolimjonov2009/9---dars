import  './App.css'

function App() {
  const body = document.getElementsByTagName("body")[0];
   function a(rang) {
    body.style.backgroundColor = rang;
   }


  return (
    <div>
      <button onClick={()=>a("red")}>Qizil</button>
      <button onClick={()=>a("blue")}>Ko'k</button>
      <button onClick={()=>a("green")}>Yashil</button>
    </div>
  )
}

export default App