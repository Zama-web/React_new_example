import axios from 'axios';

const host = axios.create(
    {
        baseURL: 'https://jsonplaceholder.typicode.com/',
        responseType: 'json'
    }
)

const getUsers = (callback, errorHandler = (() => { })) => host.get('/users')
    .then(callback, errorHandler);

const getTodos = (callback, errorHandler = (() => { })) => host.get('/todos')
    .then(callback, errorHandler);

export default { getUsers, getTodos }