import { baseApi } from '@/services';

const api = ``;

const login = (body) => baseApi.post(`${api}/login`, body);

export { login };
