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
                {visible ? (<div className="container">
                    <p className="display-4">Choose a Building</p>
                    <div className="d-flex justify-content-around m-4">
                        {hostels.map((hostel) => {
                            return (
                                <button type="submit" value={`G${hostel}`} onClick={() => { setVisible(false) }} key={hostel} className="btn btn-outline-primary col-2 flex-wrap btn-lg m-2"><Link to={`${match.url}/showrooms`}>{`G${hostel}`}</Link></button>
                            )
                        })}
                    </div>
                </div>) : null}

                {visible ? null : <ShowRooms />}
                

            </div>
        </>
    )
}
