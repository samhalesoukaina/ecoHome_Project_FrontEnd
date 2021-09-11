import React, {Component} from 'react';
import EquipementService from '../services/EquipementService';
import "./styleFile.scss";

class ListEquipementComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            equipements: []
        }
        this.addEquipement = this.addEquipement.bind(this);
        this.editEquipement = this.editEquipement.bind(this);
        this.deleteEquipement = this.deleteEquipement.bind(this);
        this.logout = this.logout.bind(this);

    }

    componentDidMount() {
        EquipementService.getEquipements().then((res) => {
            this.setState({ equipements: res.data });
        });
    }

    addEquipement() {
        this.props.history.push('/add-equipement/_add');
    }

    editEquipement(id) {
        this.props.history.push(`/add-equipement/${id}`);
    }

    viewEquipement(id) {
        this.props.history.push(`/details/${id}`);
    }

    logout() {
        this.props.history.push(`/login`);

    }

    deleteEquipement(id) {
        EquipementService.deleteEquipement(id).then(res => {
            this.setState({ equipements: this.state.equipements.filter(equipement => equipement.id !== id) });
        });
    }


    render() {
        return (
            <div>
                <div id="menu">
                <ul>
                    <li><a href="/equipements" class="active">Liste des equipements</a></li>
                    <li><a href="/add-equipement/_add">Ajouter un Equipement</a></li>
                    <li><a href="/facture">Facture</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="/login">Logout</a></li>

                    </ul>
                </div>
                {/*<button id="btnLogout" className="btn btn-primary" onClick={this.logout} style={{ width: "180px" }}> Logout</button>*/}

                <h2 className="text-center"> Liste des Equipements</h2>
                <br/>
                <div className="row">
                    {/*<button id="btnAdd" className="btn btn-primary" onClick={this.addEquipement} style={{ width: "180px" }}> Ajouter Equipement</button>*/}
                </div>
                <div className="row" id="tableEq">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>                           
                                <th> Nom</th>
                                <th> Type </th>
                                <th> Quantite Watts</th>
                                <th> Date Service</th>
                               
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.equipements.map(
                                    equipement =>
                                        <tr key={equipement.id}>
                                            <td> {equipement.name} </td>
                                            <td> {equipement.type}</td>
                                            <td> {equipement.qteWatts}</td>
                                            <td> {equipement.dateService}</td>
                                            
                                            <td id="btns">
                                                <button onClick={() => this.editEquipement(equipement.id)} className="btn btn-info" id="btnModifier">Modifier</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewEquipement(equipement.id)} className="btn btn-info" id="btnDetails"> Details</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteEquipement(equipement.id)} className="btn btn-danger" id="btnDelete">Supprimer</button>
                                                
                                            </td>
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

export default ListEquipementComponent;