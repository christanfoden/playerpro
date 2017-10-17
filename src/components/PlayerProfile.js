import React, { Component } from 'react';
import './PlayerProfile.css';

class PlayerProfile extends Component {
  // constructor(props) {
  //   super();
  //   this.state = [{null}]
  // }

  componentDidMount() {
  }

  showDescription = () => {
    this.setState();
  }

  render() {
    // console.log(this.props);
    // console.log(data);
    return(
      <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-12">
              <img
                className='card-img-top'
                onClick={() => this.showDescription()}
                src={this.props.playerImgUrl}
              />
              <div className='playerTitle'>
                  <h5>{this.props.playerFirstName} {this.props.playerLastName}</h5>
              </div>
              <ul className="portfolio-meta bottommargin">
                <li><span><i className="icon-calendar3"></i>Age:</span> {this.props.playerAge}</li>
                <li><span><i className="icon-lightbulb"></i>Position:</span> {this.props.playerPosition}</li>
                <li><span><i className="icon-link"></i>Club:</span> {this.props.playerClubCurrent}</li>
                <li><span><i className="icon-signal"></i>Height:</span> {this.props.playerHeightCms} Cm</li>
                <li><span><i className="icon-signal"></i>Weight:</span> {this.props.playerWeightKg} Kgs</li>
              </ul>
              {/* <p className="card-text">{this.props.PlayerDescription}</p> */}
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={this.props.PlayerVideoUrl} allowfullscreen></iframe>
              </div>
              {/* <div className="col-sm-8">
              </div> */}
          </div>
          {/* <div className="row">
            <div className="col-sm-4">

            </div>
            <div className="col-sm-8">
            </div>
          </div> */}
        </div>
      </div>
    </div>
    );
  }
}

export default PlayerProfile;
