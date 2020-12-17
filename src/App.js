import './App.css';
import {Header} from './header/Header';
import {Body} from './body/Body';
import ApiMaps from './apimaps/ApiMaps'

function App() {
  return (
    <div className="App">
        <Header />
        <Body />
        <img src="https://www.goodvinil.pt/6625-large_default/papel-de-parede-animais-da-quinta-.jpg" />
        <ApiMaps />
    </div>
  );
}

export default App;
