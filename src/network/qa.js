import {qaRequest} from "./index";

export function findQa() {
    return qaRequest({
        url: "/problem",
        method: "get"
    })
}

export function findQaById(id) {
    return qaRequest({
        url: "/problem/" + id,
        method: "get"
    })
}