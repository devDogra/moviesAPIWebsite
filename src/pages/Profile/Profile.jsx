import React, { useEffect } from 'react'
import { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import MovieCard from '../../components/Movie/Movie';

function Profile() {
    const [name, setName] = useState("Anonymous");
    const [pic, setPic] = useState("");
    const [fave, setFave] = useState({});
    useEffect(() => {
        const randomUserUrl = "https://randomuser.me/api";
        fetch(randomUserUrl).then(response => response.json()).then(data => {
            // const user = data.results[0]; 
            console.log(data.results[0]); 
            const user = data.results[0]; 
            setName(user.name.first + " " + user.name.last);
            setPic(user.picture.large); 
        })
    }, [])

    useEffect(() => {
        const faveStr = localStorage.getItem("favourite");
        const fave = JSON.parse(faveStr);
        console.log(fave); 
        setFave(fave); 
    }, [])


    return (
        <>
            <NavBar></NavBar>
            <div className="profile-info inline-block w-[20%] m-8">
                <h2 className='text-3xl'>{name}</h2>
                <img src={pic} alt="profile pic" className='w-full h-auto my-4'/>
            </div>
            <div className="favourite-movie-info w-[30%] m-8">
                <h2 className='text-3xl my-4'>FAVOURITE MOVIE</h2>
                { fave.Title && <MovieCard movie={fave}></MovieCard> }
            </div>
        </>

    )
  
}

export default Profile