import React, { Component } from 'react';
import { Actions } from 'react-router';
import './PlayerCardSmall.css';


class PlayerCardSmall extends Component {

  constructor(){
    super();
    this.state = {
      selectedPlayerID: ''
    }
  }

  // currentSelected() {
  //   let selectedPlayer = this.playersData.playerId.filter(val => {
  //     return val === playersData.playerId;
  //   });
  //     alert(playersData.playerId)
  // }

  render() {
    console.log(this.state);

    var tmgPlayers = this
    .props
    .data
    .map(function(playersData, index){

      return(
          <button
            className="card player"
            onClick={ () => alert(playersData.playerId)}
          >
            <tbody>
              <tr>
                <th scope="row">
                  <img className='smallImg' src={playersData.playerImgUrl} />
                </th>
                <td>{playersData.playerFirstName} </td>
                <td> {playersData.playerLastName}</td>
              </tr>
            </tbody>
          </button>
      );
    });

    return (
        <div>{tmgPlayers}</div>
    );
  }
}

export default PlayerCardSmall;
