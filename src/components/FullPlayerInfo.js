import React, { Component } from 'react';
import './FullPlayerInfo.css';

class FullPlayerInfo extends Component {

  render() {
    let currentSelected = this
    .props
    .data
    .map(function(playersData, index){

      return(
        <div className="card Fullplayer">
          <img className='FullImg' src={playersData.playerImgUrl} />
          <div className='titleOfPlayer'>
              <h4>{playersData.playerFirstName} {playersData.playerLastName}</h4>
          </div>

        </div>
      );
    });

  return (
      <div>{currentSelected}</div>
    );
  };
}


export default FullPlayerInfo;
