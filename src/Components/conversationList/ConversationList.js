import React from 'react';
import ConversationSearch from './../conversationSearch/ConversationSearch';
import ConversationListItem from './../conversationListItem/ConversationListItem';
import Toolbar from './../toolBar/ToolBar';
import conversations from './../data/data';
import './ConversationList.css';

class ConversationList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { conversations : conversations};
	}
	
	render(){
    return (
      <div className="conversation-list">
        <Toolbar title="Preguntas"/>
         <ConversationSearch />
        {
          this.state.conversations.map(conversation =>
            <ConversationListItem
              key={conversation.id}
              data={conversation}
            />
          )
        }
      </div>
    );
	}
}
export default ConversationList;