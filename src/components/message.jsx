import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const time = new Date(this.props.createdAt).toLocaleTimeString();
    return(
      <div className="message">
        <h4>{this.props.author}</h4>
        <h4>{time}</h4>
        <h4>{this.props.content}</h4>
      </div>
    );
  }
}

export default Message;
