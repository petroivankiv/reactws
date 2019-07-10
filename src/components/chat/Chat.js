import React, { Component } from 'react';
import { connect } from "react-redux";
import { addMessage } from "./thunks";

import './Chat.scss';

class Chat extends Component {
    state = {
        messages: [],
        value: ''
    };

    addMessage = () => {
        this.setState({ value: '' })
        this.props.addMessage(this.state.value);
    };

    render() {
        console.log(this.state.messages);
        return (
            <div>
                <ul id="msg">
                    {this.state.messages.map((msg, i) => (<li key={i}>{msg}</li>))}
                </ul>
                <form onSubmit={e => e.preventDefault()}>
                    <input id="m" autoComplete="off" onChange={event => this.setState({ value: event.target.value })} /><button onClick={() => this.addMessage()}>Send</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        messages: state.chat.messages,
        value: ''
    };
};

const mapDispatchToProps = dispatch => ({
    addMessage: message => dispatch(addMessage(message)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);
