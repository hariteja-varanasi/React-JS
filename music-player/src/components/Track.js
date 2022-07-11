import React from 'react';
import {useParams} from "react-router-dom";

function Track(props) {

    let {id} = useParams();

    console.log("props is : ", props);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="offset-3 col-md-6">
                    <h1 className="display-1 text-center bg-light py-3 my-3">Track Component for ID: {id}</h1>
                </div>
            </div>
        </div>
    );
}

export default Track;