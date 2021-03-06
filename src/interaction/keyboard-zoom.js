import React from 'react';
import PropTypes from 'prop-types';
import {KeyboardZoom as olKeyboardZoom} from 'ol/interaction';
import OLInteraction from './ol-interaction';

export default class KeyboardZoom extends OLInteraction {
    static propTypes = Object.assign({}, OLInteraction.propTypes, {
	condition: PropTypes.func,
	delta: PropTypes.number,
	duration: PropTypes.number
    })

    createInteraction (props) {
	return new olKeyboardZoom({
	    condition: props.condition,
	    delta: props.delta,
	    duration: props.duration
	})
    }
}

