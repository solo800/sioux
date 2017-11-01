import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeListActions from '../../actions/recipeListActions';

class RecipeList extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            newRecipe: {
                title: '',
            },
            recipes: [],
        };

        this.onClickSave = this.onClickSave.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange (event) {
        // const newRecipe = this.state.newRecipe;
        // newRecipe.title = event.target.value;
        this.setState({
            newRecipe: {title: event.target.value},
        });
    }

    onClickSave (event) {
        event.preventDefault();
        console.log('saving');
        // This is how to dispatch without mapDispatchToProps
        // this.props.dispatch(recipeActions.createRecipe(this.state));

        // If not using bindActionCreators then ommit .actions or specify
        // createRecip as it's own property in the mapDispatchToProps return object
        this.props.actions.createRecipe(this.state);
        this.setState({newRecipe: {title: ''}});
    }

    recipeRow (recipe, index) {
        return <div key={index}>{recipe.title}</div>;
    }

    render () {
        console.log('rendering recipe list', this.state, 'props', this.props);
        return (
            <div>
                <h2>Recipes</h2>
                {this.props.recipes.map(this.recipeRow)}
                <form>
                    <h3>Add Recipe</h3>
                    <input type='text' value={this.state.newRecipe.title} onChange={this.onChange}/>
                    <input type='submit' value='Save' onClick={this.onClickSave} />
                </form>
            </div>
        );
    }
}

// Alternate syntax
// const mapStateToProps = (state, ownProps) => {
//     return {
//         newRecipe: state.newRecipe,
//         recipes: state.recipes,
//     };
// }

function mapStateToProps (state, ownProps) {
    return {
        newRecipe: state.newRecipe,
        recipes: state.recipes,
    };
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(recipeListActions, dispatch),
        // When not using bindActionCreators
        // createRecipe: recipeList => dispatch(recipeActions.createRecipe(recipeList)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
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
