import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import { auth } from "../token";


const URL = "https://api.spotify.com";

//api headers
const apiHeaders = new Headers();
apiHeaders.append("Authorization", `${auth.token}`);
//apiHeaders.append("Authorization", window.localStorage.getItem("token"));

//ajax header options
const reqOptions = {
    method: "GET",
    headers: apiHeaders,
    redirect: "follow"
};

function Track(props) {

    let {id} = useParams();

    console.log("props is : ", props);

    const [tracks, setTracks] = useState([]);

    const [audio, setAudio] = useState(null);// create a custom audio player
    const[playing, setPlaying] = useState(false);// play and pause states
    const [preUrl, setPreUrl] = useState(null);// track URL

    useEffect(() => {
        getTracks()
    }, [])

    const getTracks = () => {
        fetch(`${URL}/v1/artists/${id}/top-tracks?market=IN`, reqOptions)
            .then(res => res.json())
            .then(data => {
                console.log("data = ", data);
                setTracks(data.tracks);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    const playTrack = (url) => {
        //Create instance for an Audio constructor
        const myAudio = new Audio(url);
        console.log("play track function");
        if(!playing) {
            myAudio.play();
            setAudio(myAudio);
            setPlaying(true);
            setPreUrl(url);
        }
        else {
            audio.pause();
            if(preUrl === url) {
                setPlaying(false);
            } else {
                myAudio.play();
                setAudio(myAudio);
                setPreUrl(url);
            }
        }
    }

    const trackIcon = (url) => {
        if(!url)
            return (<span className="text-danger">No Track Found</span>);
        if(playing && preUrl === url)
            return (<button className="btn btn-sm btn-outline-warning fs-3">Pause</button>)
        return (<button className="btn btn-sm btn-outline-success fs-3" onClick={playTrack}>Play</button>)
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="offset-3 col-md-6">
                    <h1 className="display-1 text-center bg-light py-3 my-3">Tracks</h1>
                </div>
            </div>

            <div className="row">
                {
                    tracks.map((track, index) => {
                        const {id, name, album, preview_url} = track
                        return (
                            <div className="col-md-4 mb-2 mt-2" key={index}>
                                <div className="card" onClick={() => playTrack(preview_url)} style={{cursor: 'pointer'}}>
                                    <div className="card-header">
                                        <img src={album.images[0].url} alt="" className="card-img-top" />
                                    </div>
                                    <div className="card-body">
                                        <h6 className="display-6 text-secondary">{name}</h6>
                                    </div>
                                    <div className="card-footer">
                                        { trackIcon(preview_url) }
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

export default Track;