import axios from 'axios';

const FACTURE_API_BASE_URL = "http://localhost:8090/api/ecoHome/facture/mois";
const CONSO_API_BASE_URL = "http://localhost:8090/api/ecoHom/consommation/mois";

class FactureService {

    async calculFacture(mois, annee, prixKwatts) {
        return axios
            .get(FACTURE_API_BASE_URL + '/' + mois + '/annee/' + annee + '/prixKwatts/' + prixKwatts, {
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            }
                )
                   
            .then(function (response) {
                
                console.log("resp:"+response);
            })
            .catch(function (error) {
                console.log(error);
            });
        
    }

  
}

export default new FactureService()