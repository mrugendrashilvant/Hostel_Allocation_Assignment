import React from 'react'

export default function Display(props) {
    return (
        <div className="d-flex justify-content-around">
            <div className="container">
                <div className="row">
                    <h1 className="display-4" style={{color:"green"}}>Success!</h1>
                </div>
                <hr />
                <div className="container">
                    <p className="fs-3">Your room has been booked successfully!</p>
                </div>
                <hr />
                <div className="container">
                    <p className="fs-4 fw-light">Your Registration Details:</p>
                    <div className="row">
                        <h3>Room number: {props.room}, on floor number: {props.floor}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
