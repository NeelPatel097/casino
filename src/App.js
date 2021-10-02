import logo from './logo.svg';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import PopUp from './components/PopUp';
import { useEffect, useState } from 'react';

function App() {
  const [openPopup, setOpenPopup] = useState(false);
  const [loggedIn, SetLoggedIn] = useState(false);
  const [balance, setBalance] = useState(
    parseFloat(localStorage.getItem("balance") ?? 10)
  );
  const [results, setResults] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("loggedIn")) {
      SetLoggedIn(true);
    }
  }, [localStorage.getItem("loggedIn")]);

  useEffect(() => {
    localStorage.setItem("balance", balance);
  }, [balance]);

  return (
    <div className="casino">
      <Header balance={balance} loggedIn={loggedIn} SetLoggedIn={SetLoggedIn} />
      <Content setOpenPopup={setOpenPopup} results={results} setResults={setResults}/>
      <Footer />
      {openPopup && (
        <PopUp
        setBalance={setBalance}
        balance={balance}
        setOpenPopup={setOpenPopup}
        setResults={setResults}
        results={results}/>
      )}
    </div>
  );
}

export default App;
