import React from 'react';
import Display from './Display';
import { Link, Switch, useRouteMatch, Route } from 'react-router-dom';

const rooms = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const floors = ["1st Floor", "2nd Floor", "3rd Floor", "4th Floor", "5th Floor"];
export default function ShowRooms() {
    //console.log(props)

    const [room, setRoom] = React.useState(null);
    const [floor, setFloor] = React.useState(floors[0]);
    const [visible, setVisible] = React.useState(true);
    const [book, setBook] = React.useState(true);
    const [alert, setAlert] = React.useState(false);
    let match = useRouteMatch();

    const setDetails = (e) => {
        e.preventDefault();
        setRoom(e.target.value);
        setBook(false);
        setAlert(true);
        console.log(e.target.value)
    }
    return (
        <div className="container">

            {visible ? (
                <>
                    {alert ? (
                        <div className="alert alert-success alert-dismissible fade show m-4" role="alert">
                            <strong>Room Selected</strong> Room number - {room}
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    ) : null}

                    <h1>Rooms here</h1>
                    <select className="form-control" onChange={(e) => { setFloor(e.target.value) }}>
                        {floors.map((floor, index) => {
                            return (
                                <option key={floor} value={index + 1}>{floor}</option>
                            )
                        })}
                    </select>
                    <div className="container m-4">
                        {rooms.map((room) => {
                            return (
                                <button value={room} onClick={(key) => { setDetails(key) }} key={room} className="btn btn-outline-warning m-2">{room}</button>
                            )
                        })}
                    </div>
                    <button disabled={book} onClick={() => { setVisible(false) }} className="btn btn-outline-success btn-lg"><Link to={`${match.url}/final`}>Book now</Link></button>
                </>) : null}

            <Switch>
                <Route path={`${match.path}/final`}>
                    <Display room={room} floor={floor} />
                </Route>
            </Switch>
        </div>
    )
}
