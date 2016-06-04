import React, {Component} from 'react';

export function toggleOpenListItem(ListComponent) {
  
  return class ToggleOpenListItem extends Component {
    
    state = {
      openedItem: null
    }
    
    render() {
      return <ListComponent {...this.props} openedItem={this.state.openedItem} toggleOpenItem={this.toggleOpenItem}/>
    }

    toggleOpenItem = itemId => ev => {
      this.state.openedItem !== itemId ? this.openItem(itemId) : this.closeItem(itemId);
    }
    
    openItem(itemId) {
      this.setState({
        openedItem: itemId
      });
    }
    
    closeItem() {
      this.setState({
        openedItem: null
      });
    }
  };
  
}