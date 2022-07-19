import React, {Fragment, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import UserAPI from "../api/UserAPI";
import {toast} from "react-toastify";

function Update(props) {

    const { id } = useParams();
    console.log("id is: ", id);

    const [user, setUser] = useState(
        {
            name: "",
            email: "",
            mobile: "",
            address: ""
        }
    );

    const history = useNavigate();

    useEffect( () => {
            UserAPI.getSingleUser(id)
                .then(res => {
                    console.log("User is: ", res.data)
                    setUser(res.data)
                })
                .catch(err => {
                    toast.error(err.message)
                });
        },
        [
        ]
    );

    const readValue = (e) => {
        let { name, value } = e.target;
        setUser({...user, [name]: value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        try {
            console.log("updated user data: ", user);
            UserAPI.update(user, id)
                .then(res => {
                    toast.success("User updated successfully");
                    history(`/`);
                })
                .catch(err => {
                    toast.error(err.message);
                })
        }
        catch(error) {
            console.log("error is: ", error);
        }
    }

    return (
        <Fragment>
            <div className="row text-center">
                <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                    <h1 className="display-1">Update</h1>
                </div>
            </div>

            <div className="row justify-content-center mt-3">
                <div className="col-md-3">
                    <form autoComplete="off" onSubmit={submitHandler}>
                        <div className="form-group mt-2">
                            <label htmlFor="name" className="float-start fs-3 my-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={user.name}
                                className="form-control fs-3"
                                onChange={(e) => readValue(e)}
                                required />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="email" className="float-start fs-3 my-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={user.email}
                                className="form-control fs-3"
                                onChange={(e) => readValue(e)}
                                required />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="mobile" className="float-start fs-3 my-2">Mobile</label>
                            <input
                                type="tel"
                                name="mobile"
                                id="mobile"
                                value={user.mobile}
                                className="form-control fs-3"
                                onChange={(e) => readValue(e)}
                                required />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="address" className="float-start fs-3 my-2">Address</label>
                            <textarea
                                name="address"
                                id="address"
                                value={user.address}
                                className="form-control fs-3"
                                onChange={(e) => readValue(e)}
                                required>
                            </textarea>
                        </div>
                        <div className="btn-group my-5">
                            <button className="btn btn-outline-primary fs-3" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default Update;