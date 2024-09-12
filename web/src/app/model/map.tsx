
export class MapModel {


    public getPosition = async (): Promise<string[]> => {
        const token = window.localStorage.getItem('token');
        try {
            const response = await fetch('https://apibmap.c2smr.fr/user_map', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                }
            });

            const data = await response.json();
            if (!Array.isArray(data)) {
                document.location.href = '/login';
            }
            return data;
        } catch (e) {
            document.location.href = '/login';
            return [];
        }
    }

    public addPosition = async () => {
        const city = document.querySelector<HTMLInputElement>('.city-input input')?.value;
        const token = window.localStorage.getItem('token');
        try {
            await fetch('https://apibmap.c2smr.fr/insert_pos', {
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
        } catch (e) {
            document.location.href = '/login';
        }
    }
}