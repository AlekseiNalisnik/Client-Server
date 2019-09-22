import Axios from 'axios';

const getList = queryParams => Axios.get('/list', { params: queryParams } );
const getUsers = queryParams => Axios.get('/users', { params: queryParams } );

export { getList, getUsers };
