import { fetch } from "./config";



// ??
export const personalType = payload => fetch({
    url: '/shybt/renewal/authFlag',
    params: { 
        aes: payload.AES 
    }
});
