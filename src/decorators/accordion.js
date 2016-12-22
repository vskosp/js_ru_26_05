import React, { Component } from 'react';

export default (CustomComponent) => class Accordion extends Component {
  state = {
    openedItem: null
  };

  render() {
    const { openedItem } = this.state;
    return <CustomComponent {...this.props} openedItem={ openedItem } toggleOpen={ this.toggleOpen } />
  }

  toggleOpen = (itemId) => () => {
    const openedItem = this.state.openedItem === itemId ? null : itemId;
    this.setState({ openedItem });
  }
}