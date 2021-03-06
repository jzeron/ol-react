import React from 'react';
import PropTypes from 'prop-types';
import {Rotate} from 'ol/control';
import OLControl from './ol-control';

export default class OLRotate extends OLControl {
    static propTypes = Object.assign({}, OLControl.propTypes, {
	autoHide: PropTypes.bool,
	className: PropTypes.string,
	duration: PropTypes.number,
	label: PropTypes.node,
	resetNorth: PropTypes.func,
	tipLabel: PropTypes.string
    })

    createControl(props) {
	return new Rotate({
	    autoHide: props.autoHide,
	    className: props.className,
	    duration: props.duration,
	    label: props.label,
	    resetNorth: props.resetNorth,
	    tipLabel: props.tipLabel
	})
    }
}

