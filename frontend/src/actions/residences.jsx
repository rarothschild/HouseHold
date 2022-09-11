import axios from 'axios';
import { defaultPostConfig } from './defaults';

export const addResidence = async (user, streetAddress, zipCode, city, country) => {
    const body = JSON.stringify({ streetAddress, zipCode, city, country });
    console.log(body)
    const {data:response} = await axios.post(`http://127.0.0.1:8000/api/residence/add/`,
                                body, defaultPostConfig)
                                .then((response) => response.data)
    return response
};

export const updateResidenceList = async (setResidences, user) => {
    const {data:response} = await axios.get(`http://127.0.0.1:8000/api/residence/listUserResidences/`, 
                                defaultPostConfig)
                                .then((response) => setResidences(response.data))
    return response
};