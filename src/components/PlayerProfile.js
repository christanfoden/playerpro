import React, { Component } from 'react';
import './PlayerProfile.css';

class PlayerProfile extends Component {

  render() {
    console.log(this.state)
    var tmgPlayers = this
    .props
    .data
    .map(function(playersData, index){

      return(
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-12">
                <img
                  className='card-img-top'
                  // onClick={() => this.showDescription()}
                  src={playersData.playerImgUrl}
                />
                <div className='playerTitle'>
                    <h5>{playersData.playerFirstName} {playersData.playerLastName}</h5>
                </div>
                <hr />
                <ul className="portfolio-meta bottommargin">
                  <li><span>Age:</span> {playersData.playerAge}</li>
                  <li><span>Position:</span> {playersData.playerPosition}</li>
                  <li><span>Club:</span> {playersData.playerClubCurrent}</li>
                  <li><span>Country:</span> {playersData.playerCountry}</li>
                  <li><span>Height:</span> {playersData.playerHeightCms} Cm</li>
                  <li><span>Weight:</span> {playersData.playerWeightKg} Kgs</li>
                </ul>
                <div className="d-flex justify-content-center">
                  <div className="buttonCol">
                    <button type="button" className="btn btn-info">+ Add</button>
                  </div>
                </div>
                <hr />
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" src={playersData.PlayerVideoUrl} allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
        <div>{tmgPlayers}</div>
    );
  }
}

export default PlayerProfile;
