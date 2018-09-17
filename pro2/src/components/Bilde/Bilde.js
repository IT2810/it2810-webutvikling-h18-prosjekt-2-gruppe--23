import React, { Component } from 'react';
import axios from 'axios';



class Bilde extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pictures: ""
        }

        //this.getImg({category, tabnr});
    }

    componentDidMount(props) {
      this.getImg()
    }


    componentDidUpdate(prewprops) {
      if( this.props!== prewprops) {
        this.getImg()
      }
    } 

    async getImg() {
          if(sessionStorage.getItem('/BilderP2/' + this.props.category + '/' + this.props.tabnr + '.svg') === null){try {
              const picture = await axios.get('/BilderP2/' + this.props.category + '/' + this.props.tabnr + '.svg');
              sessionStorage.setItem('/BilderP2/' + this.props.category + '/' + this.props.tabnr + '.svg', picture.data)
              this.setState({
                  pictures: picture.data
              })
          }
          catch (error) {
              console.error(error);
          }} else{
              this.setState({
                      pictures: sessionStorage.getItem('/BilderP2/' + this.props.category + '/' + this.props.tabnr + '.svg')
              })
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
