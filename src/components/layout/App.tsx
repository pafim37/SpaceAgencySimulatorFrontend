import React from 'react'
import '../../styles/App.css';
import Header from './Header.tsx';
import Footer from './Footer.tsx';
import Content from './Content.tsx';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
