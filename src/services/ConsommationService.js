import axios from 'axios';

const EQUIPEMENT_API_BASE_URL = "http://localhost:8090/api/ecoHom/consommation/equipementId";

class ConsommationService {

    getConsommationsByIdEquipement(equipementId) {
        return axios.get(EQUIPEMENT_API_BASE_URL + '/' + equipementId);
    }
   
}

export default new ConsommationService()