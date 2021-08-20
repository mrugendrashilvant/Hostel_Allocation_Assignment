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
                {visible ? (<div className="container">
                    <p className="display-4">Choose a Building</p>
                    <div className="d-flex justify-content-around m-4">
                        {hostels.map((hostel) => {
                            return (
                                <button type="submit" value={`B${hostel}`} onClick={() => { setVisible(false) }} key={hostel} className="btn btn-outline-primary col-2 flex-wrap btn-lg m-2"><Link to={`${match.path}/+showrooms`}>{`B${hostel}`}</Link></button>
                            )
                        })}
                    </div>
                </div>) : null}

                {visible ? null : <ShowRooms />}
                

            </div>
        </>
    )
}
