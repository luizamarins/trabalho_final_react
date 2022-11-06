import { api } from "../api/api";

const getProducts = () => {
    return api.get(`produto`)
}

export default {
    getProducts
}

// const postProducts = (product) => {
//     return api.post(`produto/product`, product)
// }

// const deleteProducts = (id) => {
//     return api.delete(`produto/${id}`)
// }

// const putProducts = (id) => {
//     return api.put(`produto/${id}`)
// }
