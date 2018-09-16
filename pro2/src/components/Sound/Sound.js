import React, {Component} from 'react';

class Sound extends Component{
  constructor(props) {
        super()

        this.state = {
            sound: "",
        }
    }

  render(){
    let url = "Lyder/" + this.props.category + "/" + this.props.tabnr + ".mp3";
    return (
      <div className="soundContainer">
        <audio controls>
          <source type="audio/mp3" src={url} />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}

export default Sound;
