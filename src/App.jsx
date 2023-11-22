import './App.css';
import { UseContext } from './UseContext/UseContext';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Router from './Router/Router';
import Loader from './components/Loader/Loader';

const App = () => {
  const { getData, isLoading } = UseContext();

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app">
      <Navbar />
      {isLoading ? <Loader /> : <Router />}
    </div>
  );
};

export default App;
