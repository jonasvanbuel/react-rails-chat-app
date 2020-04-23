import React from 'react';
import ChannelList from '../containers/channel_list';
import MessageList from '../containers/message_list';
import Logo from 'images/logo.png';

const App = (props) => {
  const channelName = props.match.params.channel;
  return (
    <div className="messaging-wrapper">
      <div className="logo-container">
        <img className="messaging-logo" src={Logo} alt="logo" />
      </div>
      <ChannelList selectedChannel={channelName} />
      <MessageList selectedChannel={channelName} />
    </div>
  );
};

export default App;
