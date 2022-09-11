import axios from 'axios';

export const register = async ( email, full_name, password ) => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify({ email, full_name, password });
    console.log(body)
    try {
        const res = await axios.post(`http://127.0.0.1:8000/api/account/register/`, body, config);
        return res.data
    } catch(err) {
        console.log("Create user error")
    }
}

export const login = async ( setUser, email, password) => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify({ email, password });
    const {data:response} = await axios.post(`http://127.0.0.1:8000/api/account/login/`, body, config)
                            .then((response) => setUser(response.data))
    return response
};

export const isAuthenticated = async () => {
    
}