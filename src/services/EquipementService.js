import axios from 'axios';

const EQUIPEMENT_API_BASE_URL = "http://localhost:8090/api/ecoHome/equipements";

class EquipementService {

    getEquipements() {
        return axios.get(EQUIPEMENT_API_BASE_URL);
    }

    createEquipement(equipement) {
        return axios.post(EQUIPEMENT_API_BASE_URL, equipement);
    }

    getEquipementById(equipementId) {
        return axios.get(EQUIPEMENT_API_BASE_URL + '/' + equipementId);
    }

    updateEquipement(equipement, equipementId) {
        return axios.put(EQUIPEMENT_API_BASE_URL + '/' + equipementId, equipement);
    }

    deleteEquipement(equipementId) {
        return axios.delete(EQUIPEMENT_API_BASE_URL + '/' + equipementId);
    }

    authenticateEquipement(emailId) {
        return axios.get(`http://localhost:8090/api/ecoHome/client` + `/email/${emailId}`);
    }

}

export default new EquipementService()