import React, { Component } from 'react';
import ConsommationService from '../services/ConsommationService';
import "./styleFile.scss";

class DetailsConsommationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,           
            consommations: []
        }
        
    }

    viewList() {
        this.props.history.push('/equipements');
    }

    componentDidMount() {
        ConsommationService.getConsommationsByIdEquipement(this.state.id).then((res) => {
            this.setState({ consommations: res.data });
        });
    }

    render() {
        return (
            <div>
                <button className="btn btn-info" id="btnR" onClick={() => this.viewList()}>Retour</button>
                <h2 className="text-center"> Details de consommation de l'equipement</h2>
                
                <div className="row" id="tableConsommation">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr id="enteteConsommation">
                                <th> Mois</th>
                                <th> Annee</th>
                                <th> Quantite KWatts</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.consommations.map(
                                    consommation =>
                                        <tr key={consommation.id}>
                                            <td> {consommation.mois} </td>
                                            <td> {consommation.annee}</td>
                                            <td> {consommation.qteWattsMois}</td>
                                           
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default DetailsConsommationComponent;