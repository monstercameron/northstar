import React from 'react';
import Style from './index.module.css'
import { StreamChat } from 'stream-chat';
import { 
    Attachment,
    Avatar,
    Chat, 
    Channel, 
    ChatAutoComplete,
    ChannelHeader,
    EmojiPicker,
    MessageInput, 
    MessageList,
    SendButton, 
    Thread,
    useMessageContext,
    UploadsPreview,
    Window, 
    useChannelStateContext
} from 'stream-chat-react';
import  {
    FileUploadButton, ImageDropzone
} from 'react-file-utils'

import { useDropzone } from 'react-dropzone';

import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance('dz5f4d5kzrue');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYWdlZC1maXJlLTgiLCJleHAiOjE2MzYyNjI2MDN9.kYLGNXfoH-omfnC8BPIsIG2_y8ootaNFl7YistkZItE';

chatClient.connectUser(
  {
    id: 'aged-fire-8',
    name: 'aged',
    image: 'https://getstream.io/random_png/?id=aged-fire-8&name=aged',
    isSender: true
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'custom_channel_id', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'Flying Bird',
  members: ['aged-fire-8'],
});

// Displays message
const CustomMessage = () => {
    const { message } = useMessageContext();

    var sender = message.user.isSender;

    const customMessage = message.user.isSender == true ? (
        <div className={`row`}>
            <div>
                <div className={`${Style.senderbubble}`}>
                    {message.text}
                    {message.attachments && <Attachment attachments={message.attachments} />}
                </div>
            </div>
        </div>
    ) :
    (
        <div className={`row`}>
            <div>
                <div className={`${Style.receiverbubble}`}>
                    {message.text}
                    {message.attachments && <Attachment attachments={message.attachments} />}
                </div>
            </div>
        </div>
    );
  
    return (
        customMessage
    );
  };

const App = () => (
  <Chat client={chatClient} theme='messaging light'>
    <Channel 
        channel={channel} 
        TypingIndicator={() => null}>
      <Window>
        <ChannelHeader />
        <MessageList Message={CustomMessage}/>
        <MessageInput/>
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;
