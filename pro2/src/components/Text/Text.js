import React, { Component } from 'react';
import axios from 'axios';

class Text extends Component {
    constructor(props) {
        super(props)

        this.state = {
            texts: ""
        }

    }

    componentDidMount(props) {
      this.getText()
    }


    componentDidUpdate(prewprops) {
      if( this.props!== prewprops) {
        this.getText()

      }
    } 
    
    componentWillReceiveProps(props) {
      this.getText(props)
    }

    
    //Function checking if file is in session storage, if it is not, it loads and saves the new file to session
    //storage. If the file is in session storage already, the file is retrieved from here.
    async getText() {
          if(sessionStorage.getItem('/TextFile/' + this.props.category + "/" + this.props.tabnr + '.json') === null){
              try {
              const text = await axios.get('/TextFile/' + this.props.category + "/" + this.props.tabnr + '.json');
              sessionStorage.setItem('/TextFile/' + this.props.category + "/" + this.props.tabnr + '.json', text.data.text)
              this.setState({
                  texts: text.data.text
              })
          }
          catch (error) {
              console.error(error);
          }} else{
              this.setState({
                      texts: sessionStorage.getItem('/TextFile/' + this.props.category + "/" + this.props.tabnr + '.json')
              })
          }

        }



        render() {
            return (
                <div className = "jsontxt">
                    <p> {this.state.texts} </p>
                </div>
            );
        }
}

export default Text;