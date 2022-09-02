import axios from 'axios';

export const register = async ( email, full_name, password ) => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify({ email, full_name, password });
    try {
        console.log('Sending post Request')
        const res = await axios.post(`http://127.0.0.1:8000/api/account/register/`, body, config);
        return res.data
    } catch(err) {
        console.log("Create user error")
    }
}

export const login = async ( email, password) => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify({ email, password });
    const res = await axios.post(`http://127.0.0.1:8000/api/account/login/`, body, config).then(response => response.json())
    return res.data
};