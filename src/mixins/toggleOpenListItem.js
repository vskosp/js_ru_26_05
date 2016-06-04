import React, {Component} from 'react';

export const toggleOpenListItem = {
  getInitialState() {
    return {
      openedItem: null
    };
  },

  toggleOpenItem(itemId) {
    return (ev) => this.state.openedItem !== itemId ? this.__openItem(itemId) : this.__closeItem(itemId);
  },

  __openItem(itemId) {
    this.setState({
      openedItem: itemId
    });
  },

  __closeItem() {
    this.setState({
      openedItem: null
    });
  }
  
};
