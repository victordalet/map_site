import {ModelPosition} from "../types/map";

export class MapModel {


    public getPosition = async (): Promise<ModelPosition[]> => {
        const token = window.localStorage.getItem('token');
        const response = await fetch('http://localhost:3000/user_map', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            }
        });
        return await response.json();
    }

    public addPosition = async () => {
        const city = document.querySelector<HTMLInputElement>('.city-input input')?.value;
        const token = window.localStorage.getItem('token');
        await fetch('http://localhost:3000/insert_pos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
            body: JSON.stringify({
                city: city
            })
        });
        document.location.reload();
    }
}