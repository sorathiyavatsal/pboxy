"use client"
import { Header } from '@/components'
import { useState, useEffect } from 'react';
import videodata from "./data/video";

export default function Home() {

    const [video, setVideo] = useState({})

    useEffect(() => {
        setVideo(
            videodata
        )
        // fetchData()
    }, [])

    // const fetchData = async () => {
    //     const options = {
    //         method: 'GET',
    //         url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
    //         params: { q: 'justin+bieber' },
    //         headers: {
    //             'X-RapidAPI-Key': 'H6vywfLbPYmshkubXMaH4P6MaeElp1BcTpdjsn8hHv3bngdDXc',
    //             'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
    //         }
    //     };

    //     try {
    //         const response = await axios.request(options);
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    return (
        <main>
            <Header />
        </main>
    )
}
