import axios from 'axios';

export const register = async ( email, password ) => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify({ email, password });
    try {
        console.log('Sending post Request')
        const res = await axios.post(`http://127.0.0.1:8000/api/account/register/`, body, config);
        return res.data
    } catch(err) {
        console.log("Create user error")
    }
}

export const login = async (setUser, username, password) => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };

    const body = JSON.stringify({ username, password });

    console.log('Test')
    try {
        const res = await axios.post(`http://127.0.0.1:8000/account/login/`, body, config);

        if (res.data.success) {
            setUser(res)
            console.log("Set user success!")
        } else {
            console.log("Set user error")
        }
    } catch(err) {
        console.log("Set user error")
    }
};