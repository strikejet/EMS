import React, { Component } from 'react'
import './HeaderComponent.css'
class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://google.co.in" className="navbar-brand">
                        Employee Management System
                        
                    </a></div>
                    
                    </nav>
                </header>
            </div>
            



            
        )
    }
}

export default HeaderComponent
