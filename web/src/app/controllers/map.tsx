import React, {Component} from "react";
import {ControllerProps, ControllerState} from "../types/map";
import {observer} from "mobx-react";
import {MapView} from "../view/map";

@observer
export default class MapController extends Component<
    ControllerProps,
    ControllerState
> {


    render() {
        // eslint-disable-next-line react/jsx-no-undef
        return <MapView/>;
    }
}