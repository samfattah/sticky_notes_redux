import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NoteForm />
        <NoteList />
        <Footer />
      </div>
    );
  }
}

export default App;
