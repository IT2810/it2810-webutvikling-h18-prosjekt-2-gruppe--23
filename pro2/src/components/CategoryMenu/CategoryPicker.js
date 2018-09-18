import React, {Component} from 'react';
import './CategoryMenu.css';

class CategoryPicker extends Component {
   
   //Source: https://magnusbenoni.com/radio-buttons-react/
    constructor(props) {
       super(props);

        this.state = {
           category : this.props.mainCat,
        };

        this.handleChange = this.handleChange.bind(this);

   }

   //Manages the category-choice
   handleChange(event) {
       this.setState({
           category : event.target.value
       });
       this.props.selectCategory(event.target.value)
   }

   //Renders a Radio-button group of 3 radiobuttons with categories based on the props
   render () {
       return (
           <div className="radioHolder">
               <form onSubmit={this.handleSubmit}>
                    <ul>

                        <li>
                            
                            <label>
                                <input
                                className="radioButtons"
                                type="radio"
                                value={this.props.cat1}
                                checked={this.state.category === this.props.cat1}
                                onChange={this.handleChange}
                                />
                                {this.props.name1}
                            </label>
                        </li>

                        <li>
                            <label>
                                <input
                                className="radioButtons"
                                type="radio"
                                value={this.props.cat2}
                                checked={this.state.category === this.props.cat2}
                                onChange={this.handleChange}
                                />
                                {this.props.name2}
                            </label>
                        </li>

                        <li>
                            <label>
                                <input
                                className="radioButtons"
                                type="radio"
                                value= {this.props.cat3}
                                checked={this.state.category === this.props.cat3}
                                onChange={this.handleChange}
                                />
                                {this.props.name3}
                            </label>
                        </li>

                    </ul>

                </form>
            </div>
           
       )
       
   }
}

export default CategoryPicker;