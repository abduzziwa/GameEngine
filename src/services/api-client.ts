import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '3253bfed8b944b12905fe2c738e52491'
    }
})