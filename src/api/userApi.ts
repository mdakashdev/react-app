import api from "./axios";

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

export const getUsers = async (): Promise<User[]> => {
    const response = await api.get<User[]>("/users");
    console.log('response', response.data);
    return response.data;
};


export const getUser = () => {
    return api.get('/users');
}