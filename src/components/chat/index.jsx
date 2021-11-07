import React from 'react';
import { StreamChat } from 'stream-chat';
import { 
    Chat, 
    Channel, 
    ChannelHeader, 
    MessageInput, 
    MessageList, 
    Thread,
    useMessageContext,
    Window 
} from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance('dz5f4d5kzrue');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYWdlZC1maXJlLTgiLCJleHAiOjE2MzYyNjI2MDN9.kYLGNXfoH-omfnC8BPIsIG2_y8ootaNFl7YistkZItE';

chatClient.connectUser(
  {
    id: 'aged-fire-8',
    name: 'aged',
    image: 'https://getstream.io/random_png/?id=aged-fire-8&name=aged',
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'custom_channel_id', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'Flying Bird',
  members: ['aged-fire-8'],
});

const App = () => (
  <Chat client={chatClient} theme='messaging light'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList/>
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;
