
export class RankModel {

    public getRank = async (): Promise<string[]> => {
        const token = window.localStorage.getItem('token');
        const response = await fetch('http://localhost:3000/rank', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        return await response.json();
    }

}