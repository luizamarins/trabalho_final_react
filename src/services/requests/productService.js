import { api } from "../api/api";

const getProducts = () => {
    return api.get(`produto`)
}

const postProducts = (product) => {
    return api.post(`produto`, product)
}

const deleteProducts = (id) => {
    return api.delete(`produto/${id}`)
}

const putProducts = (id) => {
    return api.put(`produto/${id}`)
}

export default {
    getProducts,
    postProducts,
    deleteProducts,
    putProducts
}
