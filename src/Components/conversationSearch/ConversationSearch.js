import React from 'react';
import './ConversationSearch.css';

class ConversationSearch extends React.Component {
	render(){
    return (
      <div className="conversation-search">
        <input
          type="search"
          className="conversation-search-input"
          placeholder="Search Messages"
        />
      </div>
    );
	}
}
export default ConversationSearch;