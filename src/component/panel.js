import React from 'react';
import { PropTypes } from 'prop-types';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { panel } = this.props;
    return (
      <div>{panel}</div>
    );
  }
}
Panel.propTypes = {
  panel: PropTypes.string.isRequired,
};

export default Panel;
