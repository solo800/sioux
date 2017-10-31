import React from 'react';
import {connect} from 'react-redux';
import * as recipeActions from '../../actions/recipeActions';

class Recipe extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            title: '',
            ingredients: [],
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange (event) {
        this.setState({title: event.target.value});
    }

    onClickSave (event) {
        event.preventDefault();
        this.props.dispatch(recipeActions.createRecipe(this.state));
    }

    render () {
        return (
            <div>
                <h3>{this.state.title}</h3>
                <form>
                    <input type='text' value={this.state.title}
                        onChange={this.onTitleChange} />
                    <input type='submit' value='Save'
                        onClick={this.onClickSave} />
                </form>
            </div>
        );
    }
}

function mapStateToProps (state, ownProps) {
    return {
        title: state.title
    };
}

export default connect(mapStateToProps)(Recipe);
// const About = (props) => (
//     <div>
//         <p>I be the about page.</p>
//     </div>
// );
//
// export default About;

// export default class About extends React.Component {
//     constructor (props) {
//         super(props);
//     }
//     render () {
//         return (
//             <div>
//                 <p>I be the About page man!</p>
//             </div>
//         );
//     }
// }
