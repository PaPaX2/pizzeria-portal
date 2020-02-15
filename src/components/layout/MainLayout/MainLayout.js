import React from 'react';
import PropTypes from 'prop-types';

class MainLayout extends React.Component {

  static propTypes = {
    children: PropTypes.array,
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;
