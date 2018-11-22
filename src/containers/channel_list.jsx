import React, { Component } from 'react';

// external dependencies
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ChannelList extends Component {
  constructor(props) {
    super(props);
  }

  renderChannels = (channels) => {
    return channels.map(channel => {
      return (
        <h4 key={channel}>#{channel}</h4>
      );
    })
  }

  render() {
    return (
      <div className="channel-list-container">
        {this.renderChannels(this.props.channels)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels
  };
}

// import { setChannels } from '../actions';

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { setChannels: setChannels },
//     dispatch
//   );
// }

export default connect(mapStateToProps, null)(ChannelList);
