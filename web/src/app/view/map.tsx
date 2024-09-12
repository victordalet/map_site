import React from "react";
import {ViewProps} from "../types/map";
import {MapComponents} from "../../component/map";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class MapView extends React.Component <ViewProps> {
    render() {

        const {data, addPosition} = this.props;


        return (
            <div className={"map"}>
                <div className={"add-container"}>
                    <h2>Add city : </h2>
                    <TextField id="outlined-basic" className={"city-input"} label="City" variant="outlined"/>
                    <Button onClick={() => {
                        addPosition();
                    }} variant="contained">Add</Button>
                </div>
                <MapComponents dataCoordinate={data.map((item) => {
                    return {
                        lat: parseInt(item[2]),
                        long: parseInt(item[3]),
                        city: item[4]
                    }
                })}
                />
            </div>
        );
    }
}