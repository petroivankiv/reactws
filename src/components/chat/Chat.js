import React, { Component } from 'react';
import { connect } from "react-redux";
import { addMessage } from "./thunks";
import { addedMessage } from "./actions";
import { get } from "lodash/fp";
import socketIOClient from "socket.io-client";
import { ioConfig } from '../../config/io-config';


import './Chat.scss';

class Chat extends Component {
    state = {
        value: ''
    };

    addMessage = () => {
        this.setState({ value: '' })
        this.props.addMessage(this.state.value);
    };

    componentDidMount() {
        const socket = socketIOClient(ioConfig.chatUrl);
        socket.on("chat message", message => this.props.receiveMessage(message));
      }

    render() {
        const messages = get("messages", this.props, []);
        
        return (
            <div>
                <ul id="msg">
                    {messages.map((msg, i) => (<li key={i}>{msg}</li>))}
                </ul>
                <form onSubmit={e => e.preventDefault()}>
                    <input id="m" value={this.state.value} autoComplete="off" onChange={event => this.setState({ value: event.target.value })} /><button onClick={() => this.addMessage()}>Send</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        messages: state.chat.messages
    };
};

const mapDispatchToProps = dispatch => ({
    addMessage: message => dispatch(addMessage(message)),
    receiveMessage: message => dispatch(addedMessage(message)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);
