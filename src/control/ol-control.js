import React from 'react';
import PropTypes from 'prop-types';
import OLComponent from '../ol-component';
import ol from 'openlayers';

export default class OLControl extends OLComponent {
  constructor (props) {
    super(props);
    this.control = this.createControl(props)
  }

  componentDidMount () {
    this.context.map.addControl(this.control)
  }

  componentWillUnmount () {
    this.context.map.removeControl(this.control)
  }

  createControl (props) {
    throw new TypeError('You must override createControl() in classes derived ' +
                        'from OLControl')
  }
}

OLControl.propTypes = {
}

OLControl.defaultProps = {
}

OLControl.contextTypes = {
  map: PropTypes.instanceOf(ol.Map)
}
