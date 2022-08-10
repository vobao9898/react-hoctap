import { GET, POST, PUT, DELETE } from "./config";

export const apiMission = {
    get: async() => {
        return await GET(`misstion`);
    },
    getByid: async(id) => {
        return await GET(`misstion/${id}`);
    },
    add: async(body) => {
        return await POST(`misstion`, body);
    },
    update: async(body) => {
        return await PUT(`misstion/${body.id}`, body);
    },
    delete: async(id) => {
        return await DELETE(`misstion/${id}`);
    },

};

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