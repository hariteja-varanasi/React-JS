import React, {Fragment, useRef, useState} from 'react';
import UserAPI from "../api/UserAPI";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

function Create(props) {

    const name = useRef();
    const email = useRef();
    const mobile = useRef();
    const address = useRef();

    const history = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = {
            name: name.current.value,
            email: email.current.value,
            mobile: mobile.current.value,
            address: address.current.value
        };
        UserAPI.create(formData).then(
            res => {
                toast.success("User created successfully.");
                // setTimeout(() => {
                //     history("/");
                // }, 5000)
                history(`/`);
            }
        ).catch(
            error => toast.error(error.message)
        );
    }

    return (
        <Fragment>
            <div className="row text-center">
                <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                    <h1 className="display-1">Create User</h1>
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
                                ref={name}
                                className="form-control fs-3"
                                required />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="email" className="float-start fs-3 my-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                ref={email}
                                className="form-control fs-3"
                                required />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="mobile" className="float-start fs-3 my-2">Mobile</label>
                            <input
                                type="tel"
                                name="mobile"
                                id="mobile"
                                ref={mobile}
                                className="form-control fs-3"
                                required />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="address" className="float-start fs-3 my-2">Address</label>
                            <textarea
                                name="address"
                                id="address"
                                ref={address}
                                className="form-control fs-3"
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

export default Create;