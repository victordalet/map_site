import {registerResponse} from "../types/log";

export class LogModel {


    apiPath = 'https://apibmap.c2smr.fr/';


    public login = async () => {
        const userNameItem = document.querySelector<HTMLInputElement>('.username-login input');
        const passwordItem = document.querySelector<HTMLInputElement>('.password-login input');
        if (userNameItem === null || passwordItem === null) {
            return;
        }
        const response = await fetch(this.apiPath + 'login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: userNameItem.value,
                password: passwordItem.value
            })
        });
        const data: registerResponse = await response.json();
        window.localStorage.setItem('token', data.token);
        window.location.href = '/map';
        return data;
    }


    public register = async () => {
        const userNameItem = document.querySelector<HTMLInputElement>('.username-register input');
        const passwordItem = document.querySelector<HTMLInputElement>('.password-register input');
        const cityItem = document.querySelector<HTMLInputElement>('.city-register input');
        if (userNameItem === null || passwordItem === null || cityItem === null) {
            return;
        }
        const response = await fetch(this.apiPath + 'register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: userNameItem.value,
                password: passwordItem.value,
                city: cityItem.value
            })
        });
        const data: registerResponse = await response.json();
        window.localStorage.setItem('token', data.token);
        window.location.href = '/map';
        return data;
    }


}