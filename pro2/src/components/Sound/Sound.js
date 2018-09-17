import React, {Component} from 'react';

class Sound extends Component{
  constructor(props) {
        super()

        this.state = {
            sound: "",
        }

    }

  componentDidUpdate(props){
    this.getSound(props);
  }

  shouldComponentUpdate(props, newProps) {
    if (props.tabnr === newProps.tabnr){
      return false;
    }
    return true;
  }

  getSound({category, tabnr}){
    const url = "Lyder/" + category + "/" + tabnr + ".mp3";
    //this.setState({sound : url});
  }

  render(){
    return (
      <div className="soundContainer">
        <audio controls>
          <source type="audio/mp3" src={} />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}

export default Sound;
