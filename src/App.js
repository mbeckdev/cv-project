import './App.css';
import Component1 from './components/component1/component1.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div className="App">
      <Header />

      {/* <Main />
      <Footer /> */}
      <Component1 />
    </div>
  );
}

export default App;
