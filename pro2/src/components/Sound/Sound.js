import React, {Component} from 'react';
import mp3_animal0 from './LyderP2/1elephant.mp3';
import mp3_animal1 from './LyderP2/1monkey.mp3';
import mp3_animal2 from './LyderP2/1rooster.mp3';
import mp3_animal3 from './LyderP2/1seagulls.mp3';
import mp3_instrument0 from './LyderP2/2flute.mp3';
import mp3_instrument1 from './LyderP2/2guitar.mp3';
import mp3_instrument2 from './LyderP2/2harmonica.mp3';
import mp3_instrument3 from './LyderP2/2trumpet.mp3';
import mp3_feeling0 from './LyderP2/3chill.mp3';
import mp3_feeling1 from './LyderP2/3happy.mp3';
import mp3_feeling2 from './LyderP2/3sad.mp3';
import mp3_feeling3 from './LyderP2/3spooky.mp3';
//Har ikke tenkt å importere alt på en gang, gjør det bare foreløpig.


class Sound extends Component{

  render(){
    return (
      <div className="soundContainer">
        <audio controls>
          <source type="audio/mp3" src={mp3_animal1} />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}

export default Sound;
