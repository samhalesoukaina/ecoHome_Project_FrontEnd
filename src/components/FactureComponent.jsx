import React, { Component, useState, useEffect } from 'react'
import FactureService from '../services/FactureService';
import axios from 'axios';

const FACTURE_API_BASE_URL = "http://localhost:8090/api/ecoHome/facture/mois";

class FactureComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            mois: '',
            annee: '',
            prix: '',
            montant: ''
        }
        
        this.changeMoisHandler = this.changeMoisHandler.bind(this);
        this.changeAnneeHandler = this.changeAnneeHandler.bind(this);
        this.changerPrixKwattsHandler = this.changerPrixKwattsHandler.bind(this);
        this.calculerFacture = this.calculerFacture.bind(this);

        
    }

    
   
    changeMoisHandler = (event) => {
        this.setState({ mois: event.target.value });
    }

    changeAnneeHandler = (event) => {
        this.setState({ annee: event.target.value });
    }

    changerPrixKwattsHandler = (event) => {
        this.setState({ prix: event.target.value });
    }

    viewList() {
        this.props.history.push('/equipements');
    }

    
    calculerFacture(mois, annee, prix) {
        axios
            .get(FACTURE_API_BASE_URL + '/' + mois + '/annee/' + annee + '/prixKwatts/' + prix)
            .then(res => {

                console.log("then promise result :" + res.data);
                this.setState({ montant: res.data });
                console.log("SET STATE IS OK ...");
            })
            .catch(function (error) {
                console.log(error);
            });
       
      
        
}


    render() {
        const { montant } = this.state;
        return (

            <div className="base-container" id="formLogin">
            <h2>Calculer Facture</h2>
            <div className="content" >
              
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="mois">Mois</label>
                            <input type="text" name="mois" placeholder="mois(MM)" value={this.state.mois} onChange={this.changeMoisHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="annee">Annee</label>
                        <input type="text" name="annee" placeholder="annee(YYYY)" value={this.state.annee} onChange={this.changeAnneeHandler} />
                    </div>            
                    <div className="form-group">
                        <label htmlFor="prix">Prix KWatts</label>
                        <input type="text" name="prix" placeholder="prix(DH)" value={this.state.prix} onChange={this.changerPrixKwattsHandler} />
                    </div>
                    <div className="form-group">
                            <div className="form-group">
                                <div id="montant"> Montant : {montant}</div>
                            </div>
                           
                    </div>
                    </div>
                   
                </div>
                <button type="button" className="btn btn-info" id="btnCalcul" onClick={() => this.calculerFacture(this.state.mois, this.state.annee, this.state.prix)}>Calculer</button>
                <br />
                <button type="button" className="btn btn-info" onClick={() => this.viewList()} id="btnRetour" >Retour</button>
            <br/>
            
           
        </div>
        )
    }

}

export default FactureComponent