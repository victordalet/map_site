import React from "react";
import {ViewProps} from "../types/rank";
import {ListItemButton, ListItemText} from "@mui/material";

export class RankView extends React.Component <ViewProps> {

    render() {

        const {rank} = this.props;

        return <div className={"container-rank"}>
            <h1> Global ranking</h1>
            <div className={"container-items"}>
                {
                    rank.map((rank) => {
                        return <ListItemText className={"rank-items"} primary={`${rank[0]} - ${rank[1]} points`}/>
                    })
                }

            </div>
        </div>;
    }

}