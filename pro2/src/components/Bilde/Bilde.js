import React, { Component } from 'react';
import axios from 'axios';


class Bilde extends Component {
    constructor({category, tabnr}) {
        super()

        this.state = {
            pictures: ""
        }

        this.getImg({category, tabnr});
    }



    getImg = async ({category, tabnr}) => {
          try {
            const picture = await axios.get('/BilderP2/' + category + '/' + tabnr + '.svg');
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
        return (
          <div className = "pictureName">
                <div dangerouslySetInnerHTML={{__html: this.state.pictures}}></div>
          </div>
        )
    }
}

export default Bilde;
