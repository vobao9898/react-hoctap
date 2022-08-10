import { GET, POST, PUT, DELETE } from "./config";


export const apiWork = {
    get: async() => {
        return await GET(`work`);
    },
    getByid: async(id) => {
        return await GET(`work/${id}`);
    },
    add: async(body) => {
        return await POST(`work`, body);
    },
    update: async(body) => {
        return await PUT(`work/${body.id}`, body);
    },
    delete: async(id) => {
        return await DELETE(`work/${id}`);
    },

};