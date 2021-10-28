import './App.css';
import Header from './components/Header.component';
import Main, { Main2 } from './components/Main.component';
import Footer from './components/Footer.component';

import COLORS from './colors';

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: `${COLORS.darkGrey}`,
        color: `${COLORS.whitish}`,
      }}
    >
      <Header />
      <Main />
      <Main2 />
      <Footer />
    </div>
  );
}

export default App;
