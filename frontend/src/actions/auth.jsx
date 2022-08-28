import axios from 'axios';

export const register = async (setUser, username, password, re_password) => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify({ username, password });
    console.log(username)
    console.log(password)
    console.log(body)
    try {
        const res = await axios.post(`http://127.0.0.1:8000/api/account/register/`, body, config);

        if (res.data.success) {
            setUser(res)
            console.log("Set user success!")
        } else {
            console.log("Set user error 1")
        }
    } catch(err) {
        console.log("Set user error 2")
    }
}

export const login = async (setUser, username, password, re_password) => {
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