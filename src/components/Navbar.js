import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Component } from 'react/cjs/react.production.min';
import Calculator from './Calculator';

class Navbar extends Component {
  static NavLinks() {
    return (
      <Routes>
        <Route path="/" element={this.CalculatorPage} />
        <Route path="/" element={this.CalculatorPage} />
        <Route path="/" element={this.CalculatorPage} />
      </Routes>
    );
  }

  static CalculatorPage() {
    return (
      <>
        <nav>
          <this.NavLinks />
        </nav>
        <div className="calculator-container">
          <Calculator />
        </div>
      </>
    );
  }
}
export default Navbar;
