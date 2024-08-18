import React, {Component} from "react";
import {ControllerProps, ControllerState} from "../types/log";
import {observer} from "mobx-react";
import {LogView} from "../view/log";
import {LogModel} from "../model/log";

@observer
export default class LogController extends Component<
    ControllerProps,
    ControllerState
> {


    model: LogModel = new LogModel();


    render() {
        return <LogView
            register={this.model.register}
            login={this.model.login}/>;
    }
}