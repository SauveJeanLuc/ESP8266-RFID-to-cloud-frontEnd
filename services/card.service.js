import http from "./http-common"

class CardService {

    getAll() {
        return http.get("/card");
    }

    get(id) {
        return http.get(`/card/${id}`);
    }

    create(data) {
        return http.post("/card", data)
    }

    update(id, data) {
        return http.put(`/card/${id}`, data)
    }

    delete(id) {
        return http.delete(`/card/${id}`)
    }
}

export default new CardService()