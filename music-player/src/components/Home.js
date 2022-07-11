import React, {useEffect, useState} from 'react';
import { auth } from "../token";

const URL = "https://api.spotify.com";

//api headers
const apiHeaders = new Headers();
apiHeaders.append("Authorization", `${auth.token}`);

//ajax header options
const reqOptions = {
    method: "GET",
    headers: apiHeaders,
    redirect: "follow"
};

function Home(props) {

    const [artist, setArtist] = useState([]);

    useEffect(() => {
        searchHandler("Marilyn Manson")
    }, []);

    const searchHandler = (name) => {
        fetch(`${URL}/v1/search?q=${name}&type=artist`, reqOptions)
            .then(res => res.json())
            .then(output => {
                console.log("output is : ", output);
                setArtist(output.artists.items)
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="offset-3 col-md-6">
                    <h1 className="display-1 text-center bg-warning py-3 my-3">Home</h1>
                </div>
            </div>

            <div className="row">
                {
                    artist.map((item, index) => {
                        const { name, images, popularity, genres, followers, type } = item
                        return (
                            <div className="col-md-4 my-3" key={index}>
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="display-5">{name}</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="lead p-1 m-1">
                                            <label htmlFor="popularity" className="fs-3 fw-semibold">Popularity</label>
                                            <span id="popularity" className="fs-3 float-end">{popularity}</span>
                                        </div>
                                        <div className="lead p-1 m-1">
                                            <label htmlFor="genres" className="fs-3 fw-semibold">Genres</label>
                                            <span id="genres" className="fs-3 float-end">{genres.length}</span>
                                        </div>
                                        <div className="lead p-1 m-1">
                                            <label htmlFor="followers" className="fs-3 fw-semibold">Followers</label>
                                            <span id="followers" className="fs-3 float-end">{followers.total}</span>
                                        </div>
                                        <div className="lead p-1 m-1">
                                            <label htmlFor="type" className="fs-3 fw-semibold">Type</label>
                                            <span id="type" className="fs-3 float-end">{type}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Home;