import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import NavMenu from './components/NavMenu';

function App() {
  return (
    <>
      <Header />
      <NavMenu />
      <div className="main">
        <Content />
        <MainContent />
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;
