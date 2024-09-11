import React from "react";
import {ViewProps} from "../types/log";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


export class LogView extends React.Component <ViewProps> {
    render() {

        const {register, login} = this.props;


        return (
            <div className={"container-page"}>
                <Button
                    onClick={() => {
                        document.location = '/rank';
                    }}
                    variant="contained"
                    className={"button-rank"}>Discover the ranking</Button>
                <div className={"wrapper-log-in"}>
                    <h2>Log in</h2>
                    <TextField id="outlined-basic" className={"username-login"} label="Pseudo" variant="outlined"/>
                    <TextField id="outlined-basic" className={"password-login"} label="Password" variant="outlined"/>
                    <Button
                        onClick={() => login()}
                        variant="contained"
                        color="secondary"
                        className={"button-login"}>Log in</Button>
                </div>
                <div className={"wrapper-register"}>
                    <h2>Register</h2>
                    <TextField id="outlined-basic" className={"username-register"} label="Pseudo" variant="outlined"/>
                    <TextField id="outlined-basic" className={"password-register"} label="Password" variant="outlined"/>
                    <TextField id="outlined-basic" className={"city-register"} label="Adresse" variant="outlined"/>
                    <Button
                        onClick={() => register()}
                        variant="contained"
                        color="secondary"
                        className={"button-register"}>Register</Button>
                </div>
            </div>
        );
    }
}