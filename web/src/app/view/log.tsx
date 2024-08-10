import React from "react";
import {ViewProps} from "../types/log";
import Login, {Logo} from '@react-login-page/base';


export class LogView extends React.Component <ViewProps> {
    render() {
        return(
            <Login style={{ height: '100vh' }} ><Logo> </Logo></Login>
        );
    }
}