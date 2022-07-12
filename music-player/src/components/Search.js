import React, { useState } from 'react';

function Search(props) {

    const [artistName, setArtistName] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        props.search(artistName);
    }

    const clearHandler = (e) => {
        e.preventDefault();
        setArtistName("");
    }

    return (
        <div className="row my-3 justify-content-center">
            <div className="col-md-3">
                <div className="card">
                    <div className="card-body">
                        <form autoComplete="off" onSubmit={submitHandler}>
                            <label htmlFor="artist_name" className="fs-3">Artist Name</label>
                            <div className="input-group my-3">
                                <input
                                    type="search"
                                    name="artist_name"
                                    id="artist_name"
                                    className="form-control fs-3"
                                    required
                                    value={artistName}
                                    onChange={(e) => setArtistName(e.target.value)}
                                />
                                <button type="submit" className="btn btn-outline-success fs-3">Search</button>
                                <button type="button" className="btn btn-outline-warning fs-3" onClick={clearHandler}>Clear</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;