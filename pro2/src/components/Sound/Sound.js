import React, {Component} from 'react';
import './Sound.css'

class Sound extends Component{
  constructor(props) {
        super(props)

        this.state = {
            sound: "",
        }

        this.playAudio = this.playAudio.bind(this);
        this.onPauseClick = this.onPauseClick.bind(this);
    }

    playAudio() {
      this.Audio.pause()
      this.Audio.load()
      this.Audio.play()
    }

    onPauseClick(){
      this.Audio.pause()
    }

  render(){
    console.log(this.props.tabnr)
    return (
      <div className="soundContainer">
        <audio ref={(Audio) => {this.Audio = Audio;}}>
          <source type="audio/mp3" src={"Lyder/" + this.props.category + "/" + this.props.tabnr + ".mp3"} />
          Your browser does not support the audio element.
        </audio>
        <button class="soundBtn" onClick={this.playAudio}>Spill av lyd</button>
        <button class="soundBtn" onClick={this.onPauseClick}>Stopp lyd</button>
      </div>
    );
  }
}

export default Sound;
