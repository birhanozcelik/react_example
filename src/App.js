import React from 'react';
import Navbar from './components/Navbar';
import Users from './components/Users';
import './App.css';


class App extends React.Component {

  state = {
    users: [
      {
        id : 1,
        name : "Birhan Özçelik",
        salary : "8000",
        department : "Software",
      },
      {
        id : 2,
        name : "Selami Şahin",
        salary : "7000",
        department : "Hardware",
      },
      {
        id : 3,
        name : "Mülsüm Gürses",
        salary : "9000",
        department : "Software",
      },
    ]

  }

  render() {
    return (
      <div className="container">
        <Navbar title="User App" deger="Example App" />
        <hr />
        <Users users = {this.state.users}/>
      </div>

    );
  }
}

export default App;
