import React from 'react';
import PropTypes from 'prop-types';
import OLPropTypes from '../ol-proptypes'
import {ZoomToExtent} from 'ol/control';
import OLControl from './ol-control';

export default class OLZoomToExtent extends OLControl {
    static propTypes = {
	className: PropTypes.string,
	extent: PropTypes.arrayOf(PropTypes.number),
	label: PropTypes.node,
	tipLabel: PropTypes.string
    }

    createControl(props) {
        return new ZoomToExtent({
            className: props.className,
            extent: props.extent,
            label: props.label,
            tipLabel: props.tipLabel
        })
    }
}

