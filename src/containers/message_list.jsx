import React, { Component } from 'react';
import Message from '../components/message.jsx';
import MessageForm from './message_form.jsx';

// external dependencies
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

class MessageList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("MOUNTING MESSAGE LIST");
    this.fetchMessages(this.props.selectedChannel)
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  componentDidUpdate() {
    console.log(this.list);
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  renderMessageList = (messages) => {
    return messages.map(m => {
      return <Message key={m.id} author={m.author} createdAt={m.created_at} content={m.content} />
    })
  }

  render() {
    return (
      <div>
        <div className="message-list-container" ref={(list) => { this.list = list; }}>
          {this.renderMessageList(this.props.messages)}
        </div>
        <div className="message-form-container">
          <MessageForm />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages: fetchMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
