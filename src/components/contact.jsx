import React from 'react'
import './contact.css'

export default function contact() {
    return (
        <div>
            <div className="page-header">
                <span>contact</span>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active">Contact Us</li>
                </ol>
            </div>

            <div className="background">
                <div className="container">
                    <div className="screen">
                    <div className="screen-header">
                        <div className="screen-header-left">
                        </div>
                        <div className="screen-header-right">
                        <div className="screen-header-ellipsis"></div>
                        <div className="screen-header-ellipsis"></div>
                        <div className="screen-header-ellipsis"></div>
                        </div>
                    </div>
                    <div className="screen-body">
                        <div className="screen-body-item left">
                        <div className="app-title">
                            <span>CONTACT US</span>
                        </div>
                        <div className="app-contact">CONTACT INFO : +91 123 456 7890</div>
                        </div>
                        <div className="screen-body-item">
                        <div className="app-form">
                            <div className="app-form-group">
                            <input className="app-form-control" placeholder="NAME" />
                            </div>
                            <div className="app-form-group">
                            <input className="app-form-control" placeholder="EMAIL" />
                            </div>
                            <div className="app-form-group">
                            <input className="app-form-control" placeholder="CONTACT NO" />
                            </div>
                            <div className="app-form-group message">
                            <input className="app-form-control" placeholder="MESSAGE" />
                            </div>
                            <div className="app-form-group buttons">
                            <button className="app-form-button">CANCEL</button>
                            <button className="app-form-button">SEND</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
                </div>

        </div>
    )
}
