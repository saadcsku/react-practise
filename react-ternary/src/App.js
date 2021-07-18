import './App.css';
import loader from './loader.gif'

function App() {

  const loading=false;
  const onLoading=<img src={loader} className="loader" width="100px" height="100px" />;
  const welcome =<h1>Welcome Saad</h1>;
  return (
    <div className="App">
      <header className="App-header">
      {loading ?  onLoading: welcome}
      </header>
    </div>
  );
}

export default App;
