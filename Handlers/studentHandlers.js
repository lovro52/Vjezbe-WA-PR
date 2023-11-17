import { studenti } from "../Models/studentModel.js";

function getStudenti(id) {
    if (!id) {
        return studenti;
    }
    return studenti.find(x => x.id == id);
}

export const methods = {
    getStudenti,
}