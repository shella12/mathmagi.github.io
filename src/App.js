import React from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Calculator from './component/calculator';
import Quote from './component/quote';
import Home from './component/home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Math Magician</h1>
          <ul>
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/calculator" className="link">Calculator</Link></li>
            <li><Link to="/quote" className="link">Qoute</Link></li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>

      </div>
    );
  }
}

export default App;
