import React from 'react'
import './about.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

export default function About() {
    return (
        <div>
            <div className="page-header">
            <span>about</span>
            <ol className="breadcrumb">
                <li className="breadcrumb-item active">About Campaign</li>
            </ol>
            </div>


            <div className="about">
            <h3>What is Lorem Ipsum?</h3>
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
    )
}
