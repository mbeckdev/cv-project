import './App.css';
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
    </div>
  );
}

export default App;
