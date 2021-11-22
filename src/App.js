import logo from './logo.svg';
import './App.css';

function App() {

  const userLogged = "Angga BWA";
  const userLoggedJSX = <strong>BWA for future! </strong>


  return (
    <div className="App">
      {userLogged}
      {userLoggedJSX}
    </div>
  );
}

export default App;
