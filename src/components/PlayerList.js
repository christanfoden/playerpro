import React, { Component } from 'react';
import './PlayerList.css';
// import '../tmgPlayers.json';

var data = require('../tmgPlayers.json');

class PlayerList extends Component {
  render() {
    console.log(data.playerImgUrl);
    return(
      <div className="card">
        <div className="row">
          <div className="col-sm-3">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={data.PlayerVideoUrl} allowfullscreen></iframe>
            </div>
          </div>
          <div className="col-sm-9">

          </div>

        </div>

          <img className="card-img-top" src={data.playerImgUrl} alt="Card image cap" />
          <div className="card-body">
            <h4 className="card-title">PlayerPortfolio</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            <button className="btn">
              Notifications <span className="badge badge-info">4</span>
            </button>
          </div>
      </div>

    );
  }
}

export default PlayerList;
