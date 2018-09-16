import React, {Component} from 'react';

class Sound extends Component{
  constructor(props) {
        super()

        this.state = {
            sound: "",
        }

    }

/*  componentDidUpdate(){
    this.getSound();
  }

  shouldComponentUpdate(props, newProps) {
    if (props.tabnr === newProps.tabnr){
      return false;
    }
    return true;
  }*/

  getSound(){
    const url = "Lyder/" + this.props.category + "/" + this.props.tabnr + ".mp3";
    return url;
  }

  render(){
    return (
      <div className="soundContainer">
        <audio controls>
          <source type="audio/mp3" src={this.getSound()} />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}

export default Sound;
