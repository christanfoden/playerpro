import React, { Component } from 'react';
import './App.css';
import PlayerProfile from './components/PlayerProfile';
import PlayerList from './components/PlayerList';

var data = require('./tmgPlayers.json');

class App extends Component {

  render() {
    const PlayersList = data.map((player) =>
    <PlayerProfile
      id={player.playerId}
      playerFirstName={player.playerFirstName}
      playerLastName={player.playerLastName}
      PlayerDescription={player.PlayerDescription}
      PlayerVideoUrl={player.PlayerVideoUrl}
      playerImgUrl={player.playerImgUrl}
      playerAge={player.playerAge}
      playerClubCurrent={player.playerClubCurrent}
      playerPosition={player.playerPosition}
      playerHeightCms={player.playerHeightCms}
      playerWeightKg={player.playerWeightKg}
    />
  );

    console.log(data);
    return (
      <div className="App">
        {/* <header className="App-header" /> */}
        <header className="App-header band">
          {/* <h1>Dashboard</h1> */}
        </header>
        {/* <header className="App-header" /> */}
        <div className="row playerRow">
          <div className="row playerCards">
            {PlayersList}
          </div>
        </div>
    </div>
    );
  }
}

export default App;