import React from "react";
import {ViewProps} from "../types/map";
import {MapComponents} from "../../component/map";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export class MapView extends React.Component <ViewProps> {
    render() {
        return (
            <div className={"map"}>
                <div className={"add-container"}>
                    <TextField id="outlined-basic" label="City" variant="outlined" />
                    <h2>Positions : </h2>
                    <Button variant="contained">Add</Button>
                </div>
               <MapComponents dataCoordinate={[{lat: 48.8566, long: 2.3522, city: 'Paris'}, {lat: 51.5074, long: 0.1278, city: 'London'}, {lat: 40.7128, long: -74.0060, city: 'New York'}]}/>
            </div>
        );
    }
}