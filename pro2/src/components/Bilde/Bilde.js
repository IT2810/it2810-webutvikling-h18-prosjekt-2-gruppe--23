import React, { Component } from 'react';
import axios from 'axios';


class Bilde extends Component {
    constructor(props) {
        super()

        this.state = {
            pictures: ""
        }

        this.getImg(props.name);
    }

    getImg = async (props) => {
          try {
            const picture = await axios.get('/BilderP2/' + props + '.svg');
            this.setState({
              pictures: picture.data
            })
          }
          catch (error) {
            console.error(error);
          }
        }

    render() {
        console.log(this.state)
        return (  <div className = "pictureName">
                <div dangerouslySetInnerHTML={{__html: this.state.pictures}}></div>
          </div>
        )
    }
}

export default Bilde;
