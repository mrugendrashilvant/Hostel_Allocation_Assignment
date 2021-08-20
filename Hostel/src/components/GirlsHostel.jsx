import React from 'react';
import ShowRooms from './ShowRooms';
import { Link, Switch, useRouteMatch, Route } from 'react-router-dom';

const hostels = ["1", "2", "3", "4", "5", "6"];
export default function GirlsHostel() {
    const [visible, setVisible] = React.useState(true);
    let match = useRouteMatch();
    console.log(match)
    return (
        <>
            <div className="container">
                <div className="container">
                    <p className="display-4">Choose a Building</p>
                    <div className="d-flex justify-content-around m-4">
                        {hostels.map((hostel) => {
                            return (
                                <Link to={`/showrooms`}><button type="submit" value={`G${hostel}`} onClick={() => { setVisible(true) }} key={hostel} className="btn btn-outline-primary">{`G${hostel}`}</button></Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
