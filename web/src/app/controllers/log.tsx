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


    constructor(props: ControllerProps) {
        super(props);
        if (window.localStorage.getItem('token') !== null) {
            document.location.href = '/map';
        }
        setTimeout(() => {
            document.querySelectorAll('button').forEach((button) => {
                button.style.backgroundColor = '#ffecd1';
                button.style.color = '#000';
            });
        }, 1);
    }


    render() {
        return <LogView
            register={this.model.register}
            login={this.model.login}/>;
    }
}