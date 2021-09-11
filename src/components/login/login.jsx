import React from "react";
import "./style.scss";



import {
    useHistory,
    useLocation
} from "react-router-dom";
import EquipementService from '../../services/EquipementService';
import { useState } from "react";


const Login = ({ fakeAuth }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    const login = () => {
        EquipementService.authenticateEquipement(email).then((res) => {
            fakeAuth.authenticate()
            if (res && res.data && typeof res.data === 'number') {
                localStorage.setItem('role', 'equipement')
                localStorage.setItem('equipementId', res.data)
                history.replace({ pathname: `/equipements` })
            } else history.replace({ pathname: "/List_Consommations" })
        });

    }

    const changeUsernameHandler = (e) => {
        setEmail(e.target.value);
    }

    const changePasswordHandler = (e) => {
        setPassword(e.target.value);
    }

    return (

        

        <div className="base-container" id="formLogin">
            <div id="profil"></div>
            <h2>Login</h2>
            <div className="content" >
              
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input type="text" name="Email" placeholder="Email" onChange={changeUsernameHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" onChange={changePasswordHandler} />
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-info" id="btnLogin" onClick={() => login()}>Login</button>
            <br/>
            <button type="button" className="btn btn-info" id="btnCompte"> Creer compte </button>
            <br/>
           
        </div>
       
    );
}

export default Login;
