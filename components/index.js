import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        answer: '',
    };
    asyncFunc = () => {
        return Promise.resolve('Adam');
    };
    async componentDidMount () {
        this.setState({
            answer: await this.asyncFunc()
        });
    };
    render () {
        return (
            <h2>Hola! Welcome {this.state.answer}.</h2>
        );
    };
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);