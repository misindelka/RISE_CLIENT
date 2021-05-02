import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' });

export const signIn = userData => API.post('/user/signin', userData);
export const signUp = userData => API.post('/user/signup', userData);
export const postUser = user => API.post('/users', user);
