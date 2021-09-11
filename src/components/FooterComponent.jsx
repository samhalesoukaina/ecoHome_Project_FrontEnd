import React, { Component, useState, useEffect } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted"><p class="allRights">All Rights Reserved 2021 @EcoHomElec</p></span>
                </footer>
            </div>
        )
    }

}

export default FooterComponent