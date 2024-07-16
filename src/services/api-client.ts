import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2305b0dd88da416d82617a4c2d32bd51'
    }
})