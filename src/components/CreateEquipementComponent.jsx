import React, { Component } from 'react'
import EquipementService from '../services/EquipementService';

class CreateEquipementComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            type: '',
            qteWatts: '',
            dateService: ''
          
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
        this.changeQteWattsHandler = this.changeQteWattsHandler.bind(this);
        this.changeDateServiceHandler = this.changeDateServiceHandler.bind(this);
   
        this.saveOrUpdateEquipement = this.saveOrUpdateEquipement.bind(this);
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    changeTypeHandler = (event) => {
        this.setState({ type: event.target.value });
    }

    changeQteWattsHandler = (event) => {
        this.setState({ qteWatts: event.target.value });
    }

    changeDateServiceHandler = (event) => {
        this.setState({ dateService: event.target.value });
    }

    

    componentDidMount() {
        if (this.state.id === '_add') {
            return
        } else {
            EquipementService.getEquipementById(this.state.id).then((res) => {
                let equipement = res.data;
                this.setState({
                    name: equipement.name,
                    type: equipement.type,
                    qteWatts: equipement.qteWatts,
                    dateService: equipement.dateService
                   
                });
            });
        }
    }

    saveOrUpdateEquipement = (e) => {
        e.preventDefault();
        let equipement = { name: this.state.name, type: this.state.type, qteWatts: this.state.qteWatts, dateService: this.state.dateService,etatOnOff:this.state.etatOnOff };
        console.log('equipement => ' + JSON.stringify(equipement));

        if (this.state.id === '_add') {
            EquipementService.createEquipement(equipement, this.state.id).then(res => {
                this.props.history.push('/equipements');
            });

        } else {
            EquipementService.updateEquipement(equipement, this.state.id).then(res => {
                this.props.history.push('/equipements');
            });
        }
    }

    cancel() {
        this.props.history.push('/equipements');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Ajouter Equipement</h3>
        } else {
            return <h3 className="text-center">Modifier Equipement</h3>
        }
    }

    render() {
        return (
            <div>
                <div className="container" >
                    <div className="row" >
                        <div className="card col-md-6 offset-md-3 offset-md-3" id="createForm">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Name : </label>
                                        <input placeholder=" Name" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Type : </label>
                                        <input placeholder="Type" name="type" className="form-control"
                                            value={this.state.type} onChange={this.changeTypeHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Quantite Watts : </label>
                                        <input placeholder="qteWatts" name="qteWatts" className="form-control" type="qteWatts"
                                            value={this.state.qteWatts} onChange={this.changeQteWattsHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Date Service : </label>
                                        <input placeholder="dateService" name="dateService" className="form-control" type="qteWatts"
                                            value={this.state.dateService} onChange={this.changeDateServiceHandler} />
                                    </div>
                                    
                                    <br />
                                    <button className="btn btn-success" onClick={this.saveOrUpdateEquipement} id="btnSave">Save</button>
                                    <br />
                                    <br />
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} id="btnCancel">Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateEquipementComponent