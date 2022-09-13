import axios from 'axios';

export const addResidence = async (user, streetAddress, zipCode, city, country) => {
    const config = {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'token ' + user.token
        }
    }
    const body = JSON.stringify({ streetAddress, zipCode, city, country });
    console.log(body)
    const {data:response} = await axios.post(`http://127.0.0.1:8000/api/residence/add/`,
                                body, config)
                                .then((response) => response.data)
    return response
};

export const updateResidenceList = async (setResidences, user) => {
    const config = {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'token ' + user.token
        }
    }
    const {data:response} = await axios.get(`http://127.0.0.1:8000/api/residence/listUserResidences/`, 
                                config)
                                .then((response) => setResidences(response.data))
    return response
};

