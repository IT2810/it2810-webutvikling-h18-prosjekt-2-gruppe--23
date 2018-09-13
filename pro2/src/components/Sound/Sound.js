import React, {Component} from 'react';

let url = "Lyder/Feelings/1.mp3";
//let url = "Lyder/" + category + "/" + tabnumber + ".mp3";

class Sound extends Component{

  render(){
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
