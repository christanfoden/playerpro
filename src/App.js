import React, { Component } from 'react';
import './App.css';
import PlayerProfile from './components/PlayerProfile';
import PlayerCardSmall from './components/PlayerCardSmall';
import FullPlayerInfo from './components/FullPlayerInfo';

import Header from './components/Header';

FullPlayerInfo

class App extends Component {

  constructor(){
    super();
    this.state = {
      playerData: []
    }
  }

  getPlayer() {
    return fetch('https://tmgfootball-a704b.firebaseio.com/.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ playerData: responseJson });
      })
      .catch((error) => {
        console.error(error);
      })
  }

  componentWillMount() {
    this.getPlayer();
  }

  render() {

    console.log(this.state);
    return (
      <div className="Container-fluid">
        <div className="Card Header">
            <Header />
        </div>
        <div className="Card">
          <div className="row">
            <div className="Card col-sm-4 selector">
              <PlayerCardSmall data={this.state.playerData} />
            </div>
            <div className="Card col-sm-8 selector1">
              <FullPlayerInfo data={this.state.playerData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
