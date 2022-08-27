import axios from 'axios';

export const login = (setUser, username, password) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };

    const body = JSON.stringify({ username, password });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/account/login`, body, config);

        if (res.data.success) {
            setUser(res)
        } else {
            
        }
    } catch(err) {
        
    }
};