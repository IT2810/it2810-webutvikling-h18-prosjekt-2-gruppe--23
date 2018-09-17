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

    componentWillReceiveProps(props) {
      this.getImg(props)
    }

    shouldComponentUpdate(props, newProps) {
      if( props.tabnr === newProps.tabnr) {
        return false;
      }
      return true;
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
    
        return (
          <div className = "pictureName">
                <div dangerouslySetInnerHTML={{__html: this.state.pictures}}></div>
          </div>
        )
    }
}

export default Bilde;
