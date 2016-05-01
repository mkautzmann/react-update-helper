import DumbComponent from './DumbComponent';
import React from 'react';

class SmartComponent extends React.Component {
  componentDidMount() {
    window.console.log('Smart component mounted!');
  }

  render() {
    return <DumbComponent {...this.props} />;
  }
}

SmartComponent.propTypes = {
  prop1: React.PropTypes.string,
  prop2: React.PropTypes.string,
};

export default SmartComponent;