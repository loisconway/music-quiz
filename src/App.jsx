import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"
import Quiz from "./quiz/quiz";
import { BorderItem, BorderLayout, H1, Button, FlexLayout, FlexItem, Text } from "@salt-ds/core";
import {LayerLayout} from "@salt-ds/lab"
import { CloseIcon } from "@salt-ds/icons";





export function App() {
    const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])
    const [name, setName] = useState([])
    const [seeQuiz, setSeeQuiz] = useState(true)

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })
    
        setArtists(data.artists.items)
    }
    const renderArtists = () => {
        return artists.map(artist => (
            <div key={artist.id}>
                {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
                {artist.name}
            </div>
        ))
    }

    const getName = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/me/", {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        console.log(data)
        setName(data.followers.total)
    }

    const renderName = () => {
        return (
            <div>
                {name}
            </div>
        )
    }
    const [topTracks, setTopTracks] = useState([])
    const getTopTracks = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/me/top", {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN}`
            },
            query: {
                type: "artists"
            }
         
            
        })
        console.log(data.items)
        setTopTracks(data.body.items)
    }

    const renderTopTracks = () => {
        return (
            <div>
                {topTracks}
            </div>
        )
    }

    const postToQueue = async (e) => {
        e.preventDefault()
        const {data} = await axios.post("https://api.spotify.com/v1/player/queue", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                uri: 'spotify:track:4iV5W9uYEdYUVa79Axb7Rh'
            }
            
        })
        console.log(data.items)
       
    }

    const pauseMusic = async (e) => {
        e.preventDefault()
        const {data} = await axios.post("https://api.spotify.com/v1/player/pause", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            // params: {
            //     device_id: 'spotify:track:4iV5W9uYEdYUVa79Axb7Rh'
            // }
            
        })
        console.log(data.items)
        
    }



    const [isPlaying, setIsPlaying] = useState([]);
      const getCurrentlyPlaying = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/me/player", {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        console.log(data)
        setIsPlaying(data.is_playing)
    }

    const renderPlaying = () => {
        return (
            <div>
                {isPlaying}
            </div>
        )
    }


  

    return (
        <div>
         <LayerLayout isOpen={seeQuiz}>
            <FlexItem align='start'>
            <Button onClick={() => setSeeQuiz(!seeQuiz)} ><CloseIcon/></Button>
            </FlexItem>
{/* <Button onClick={getName}> Find your name</Button>
            <Button onClick={getCurrentlyPlaying}>Is spotify playing?</Button>
            <Button onClick={getTopTracks}> What are your fave tracks?</Button>
            <Button onClick={postToQueue}>Post to queue</Button>
            <Button onClick={pauseMusic}>PAUSE</Button> */}
         

             <Quiz/>
             </LayerLayout>
             <FlexItem>
                <Button onClick={() => setSeeQuiz(!seeQuiz)}> Retake Quiz </Button>
             </FlexItem>

                
                <H1>Explore Spotify</H1>
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user-read-currently-playing&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <Button onClick={logout}>Logout</Button>}
      
            <form onSubmit={searchArtists}>
                <Text> Search for your favourite artists </Text>
             <input type="text" onChange={e => setSearchKey(e.target.value)}/>
            <Button type={"submit"}>Search</Button>
            </form>

            {renderArtists()}
            {renderName()}
            {renderPlaying()}
            {renderTopTracks()}
   
           
    
            </div>
    );
}

export default App;