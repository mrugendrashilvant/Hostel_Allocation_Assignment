import React from 'react';
import ShowRooms from './ShowRooms';
import { Link, Switch, useRouteMatch, Route } from 'react-router-dom';

const hostels = ["1", "2", "3", "4", "5", "6"];
export default function BoysHostel() {
    const [visible, setVisible] = React.useState(true);

    let match = useRouteMatch();
    return (
        <>
            <div className="container m-3">
                <div className="container">
                    <p className="display-4">Choose a Building</p>
                    <div className="d-flex justify-content-around m-4">
                        {hostels.map((hostel) => {
                            return (
                                <Link to="/showrooms"><button type="submit" value={`B${hostel}`} onClick={() => { setVisible(true) }} key={hostel} className="btn btn-outline-primary">{`B${hostel}`}</button></Link>
                            )
                        })}
                    </div>
                </div>

            </div>
        </>
    )
}
