import React from "react";
import {ViewProps} from "../types/rank";
import {ListItemButton, ListItemText} from "@mui/material";

export class RankView extends React.Component <ViewProps> {

    render() {
        return <div className={"container-rank"}>
            <h1> Global ranking</h1>
            <ListItemButton component="a" href="#simple-list" className={"container-rank"}>
                <ListItemText className={"rank-items"} primary="Victor - 2000 points"/>
            </ListItemButton>
        </div>;
    }

}