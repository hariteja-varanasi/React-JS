import React, {Fragment, useEffect, useState} from 'react';
import UserAPI from "../api/UserAPI";
import {toast} from "react-toastify";
import {Link, useLocation, useNavigate} from "react-router-dom";

function Home(props) {

    const [users, setUsers] = useState([]);
    const history = useNavigate();
    const location = useLocation();

    useEffect(
        () => {
            UserAPI.getAll()
                .then(res => {
                    console.log("Users is: ", res.data);
                    setUsers(res.data)
                })
                .catch(err => {
                    toast.error(err.message);
                })
        },
        []
    );

    const delHandler = (id) => {
        if(window.confirm(`Are you sure to delete the user with id ${id}`)){
            UserAPI.delete(id)
                .then(res => {
                    toast.success("User deleted successfully.");
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                })
                .catch(err => {
                    toast.error(err.message);
                })
        }
        else {
            toast.warning("User not deleted.");
        }
    }

    return (
        <Fragment>
            <div className="row text-center">
                <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                    <h1 className="display-1">Home</h1>
                </div>
            </div>
            <div className={"row justify-content-center"}>
                <div className={"col-lg-8"}>
                    <table className={"table table-striped"}>
                        <thead className={"bg-light fs-3"}>
                        <th className={"display-6 text-center"}>Name</th>
                        <th className={"display-6 text-center"}>Email</th>
                        <th className={"display-6 text-center"}>Mobile</th>
                        <th className={"display-6"} colSpan={3}>Address</th>
                        </thead>
                        <tbody className={"fs-3"}>
                        {users && users.map( (user, index) => {
                            return(
                                <tr key={index}>
                                    <td className={"text-center"}>{user.name}</td>
                                    <td className={"text-center"}>{user.email}</td>
                                    <td className={"text-center"}>{user.mobile}</td>
                                    <td>{user.address}
                                    </td>
                                    <td >
                                        <div className={"btn-group"}>
                                            <Link to={`/update/user/${user.id}`} className={"link-success mx-3 fs-3"}>
                                                Edit
                                            </Link>
                                            <Link to={`#!`} className={"link-danger mx-3 fs-3"} onClick={() => delHandler(user.id)}>
                                                Delete
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>

    );
}

export default Home;