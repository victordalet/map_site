
import React, {Component} from "react";
import {ControllerProps, ControllerState} from "../types/log";
import {observer} from "mobx-react";
import {LogView} from "../view/log";

@observer
export default class LogController extends Component<
    ControllerProps,
    ControllerState
> {


    render() {
        // eslint-disable-next-line react/jsx-no-undef
        return <LogView/>;
    }
}