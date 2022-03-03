/* eslint-disable react/prefer-stateless-function */

import './App.css';
import React, { Component } from 'react';
import Navbar from './components/js/Navbar';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
      </>
    );
  }
}
