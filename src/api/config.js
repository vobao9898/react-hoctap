import axios from "axios";
import { apiUrl } from './../contants/index';

async function callApi(method, path, body, baseApi) {

    let apiPath = `api/${path}`;

    return _callApi(method, apiPath, body, baseApi).then((rsp) => response(rsp)).catch(error => {
        console.log('err api')
        throw error;
    }).catch((error) => response(error.response));
}

async function _callApi(method, path, body, baseApi) {
    const config = {
        baseURL: baseApi ? baseApi : apiUrl,
        headers: {
            "Accept": 'application/json',
            "Content-type": "application/json; charset=utf-8",
            // "Authorization": 'Bearer ' + token
        }
    }
    const http = axios.create(config);
    switch (method) {
        case "GET":
            return await http.get(path);
        case "POST":
            return await http.post(path, body);
        case "PUT":
            return await http.put(path, body);
        case "DELETE":
            return await http.delete(path);
        default:
    }
}

function response(rsp) {
    return rsp;
}

export const GET = async(path, baseApi) => {
    return await callApi("GET", path, null, baseApi)
};

export const POST = async(path, body, baseApi) => {
    return await callApi("POST", path, body, baseApi)
};

export const PUT = async(path, body, baseApi) => {
    return await callApi("PUT", path, body, baseApi)
};

export const DELETE = async(path, baseApi) => {
    return await callApi("DELETE", path, null, baseApi)
};