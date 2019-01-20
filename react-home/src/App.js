import React from 'react';

import './index.css'
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
        <div className="wrapper">
          <Header />
          <Sidebar />
          <Footer />
        </div>
    );
  }
}

export default App;
