import React from 'react';
import { withPureRender } from '../../src/index';

class HighOrderComponent extends React.Component {
  constructor() {
    super();
    this.updateCount = 0;
  }

  shouldComponentUpdate() {
    this.updateCount++;
    return true;
  }

  render() {
    return <div>{this.updateCount}</div>;
  }
}

HighOrderComponent.propTypes = {
  test: React.PropTypes.string,
};

export default withPureRender(HighOrderComponent);
