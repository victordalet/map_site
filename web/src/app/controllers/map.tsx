import React, {Component} from "react";
import {ControllerProps, ControllerState} from "../types/map";
import {observer} from "mobx-react";
import {MapView} from "../view/map";
import {MapModel} from "../model/map";

@observer
export default class MapController extends Component<
    ControllerProps,
    ControllerState
> {


    model: MapModel = new MapModel();

    state: ControllerState = {
        data: []
    };


    constructor(props: ControllerProps) {
        super(props);
        if (window.localStorage.getItem('token') === null) {
            window.location.href = '/login';
        }
        this.model.getPosition().then((data) => {
            this.setState({data: data});
        });
    }


    render() {
        return <MapView
            addPosition={this.model.addPosition}
            data={this.state.data}/>;
    }
}