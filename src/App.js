import './App.css';
import Component1 from './components/component1.component';
import Header from './components/header.component';
import Main from './components/main.component';
import Footer from './components/footer.component';

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
      <Footer />
      <Component1 />
    </div>
  );
}

export default App;
