import React from 'react'
import PropTypes from 'prop-types'
import { transform } from 'ol/proj'
import { toStringXY } from 'ol/coordinate'
// Bootstrap (reactstrap in this case)
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap'
import {Map, View, Feature, control, geom, interaction, layer} from '../src';

import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';

import { wgs84, wm } from '../src/utils'

const astoria_wm = transform([-123.834,46.187], wgs84,wm)

let transformfn = (coordinates) => {
    for (let i = 0; i < coordinates.length; i+=2) {
        coordinates[i]   += astoria_wm[0];
        coordinates[i+1] += astoria_wm[1];
    }
    return coordinates
}

let attributions = [
    'GEBCO',
    'and ESRI too.'
];

export default class Example extends React.Component {
    state = {
        enableModify: true // can't change this in the app yet
    };
    static propTypes = {
        title: PropTypes.string
    };

    render(props) {
        return (
            <>
                <h2>{this.props.title}</h2>
                    Image Sources
                    <ul>
                        <li>Image ArcGIS REST: United States map</li>
                        <li>Image WMS: <a href="https://www.gebco.net/data_and_products/gebco_web_services/">GEBCO</a> bathymetry</li>
                    </ul>
                    Controls
                    <ul>
                        <li>Attribution</li>
                        <li>Rotate</li>
                        <li>MousePosition</li>
                        <li>ZoomSlider</li>
                    </ul>

                <Map view=<View rotation={Math.Pi*.25} zoom={4} center={astoria_wm}/> useDefaultControls={false}>

                    <layer.Image source="WMS"
                        url="https://www.gebco.net/data_and_products/gebco_web_services/web_map_service/mapserv?"
                        params={{LAYERS:"GEBCO_LATEST"}}
                        projection={wm}
                    />

                    <layer.Image source="ArcGISRest"
                        url="https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer"
                        opacity={.50}
                    />

                    <control.Attribution label={"<<"} collapsible={true} collapsed={true} />
                    <control.Rotate autoHide={false}/>
                    <control.MousePosition
                        projection={wgs84}
                        coordinateFormat={ (coord) => {
                                return toStringXY(coord, 3)
                        } }
                    />
                    <control.ZoomSlider />

                    {/*
                    <control.FullScreen />
                    <control.OverviewMap/>
                    <control.ScaleLine units={control.ScaleLineUnits.US} />
                    <control.Zoom />
                    <control.ZoomToExtent />

                    <interaction.DoubleClickZoom />
                    <interaction.DragPan />
                    <interaction.DragRotate />
                    <interaction.DragRotateAndZoom />
                    <interaction.DragZoom />
                    <interaction.KeyboardZoom />
                    <interaction.MouseWheelZoom />
                    <interaction.PinchRotate />
                    <interaction.PinchZoom />
                    */}

                </Map>
            </>
        );
    }
}
