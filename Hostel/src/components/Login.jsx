import React from 'react'

export default function Login({ logged }) {
    return (
        <div style={myStyle}>
            <div className="container">
                <p className="display-3">Login</p>
            </div>
            <div className="container">
                <div className="container">
                    <div className="d-flex justify-content-center col-6 m-4">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input type="email" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="d-flex justify-content-center col-6 m-4">
                        <span className="input-group-text" id="basic-addon1">*</span>
                        <input type="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="d-flex justify-content-center col-6 m-4">
                        <input className="form-check-input m-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                        <p className="fw-light m-2">Accept Terms and Conditons</p>
                    </div>
                    <div className="d-flex justify-content-center col-6 m-4">
                        <button type="button" onClick={()=>{logged(true)}} className="btn btn-primary btn-lg">Sign in</button>
                    </div>
                </div>
            </div>

        </div>

    )
}

const myStyle = {
    background: "url('https://images.unsplash.com/photo-1491308056676-205b7c9a7dc1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29sbGVnZXx8fHx8fDE2Mjk0NjA1MDg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600')",
    backgroundFit: "cover",
    backgroundRepeat: "none",
    height: "100vh",
}


//https://images.unsplash.com/photo-1491308056676-205b7c9a7dc1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29sbGVnZXx8fHx8fDE2Mjk0NjA1MDg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600