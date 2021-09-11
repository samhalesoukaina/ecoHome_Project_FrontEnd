import React, { Component, useState, useEffect } from 'react'
import "./styleFile.scss";

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div id="entete">
                <header>
                    <div id="appName">
                        <br />
                        <br />
                        <br />
                        <br />
                        <h1>EcoHomeElec</h1>
                        <h2>Smart Home</h2>
                    </div>
                        
                 
                </header>
            </div>
        )
    }

}

export default HeaderComponent