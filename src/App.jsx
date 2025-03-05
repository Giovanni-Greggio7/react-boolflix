import { GlobalProvider } from './context/GlobalContext';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

function App() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <Main />
      </GlobalProvider>
    </>
  );
}

export default App;


