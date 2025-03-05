// import axios from "axios";
import { useState, useEffect } from "react";

const Main = () => {
    const apiUrl = import.meta.env.VITE_ENDPOINT_URL;
    // const apiKey = import.meta.env.VITE_API_KEY;
    const apiToken = import.meta.env.VITE_TOKEN;

    const [film, setFilm] = useState([]);

    const [search, setSearch] = useState('')

    useEffect(() => {
        
    }, []);

    function handleInput(e) {
        return (
            setSearch(e.target.value)
        )
    }
    console.log(search)

    function handleSubmit(e){
        e.preventDefault()
        const options = {
            method: "GET",
            url: apiUrl,
            headers: {
                accept: "application/json",
                Authorization: 'Bearer ' + apiToken
            },
        };

        fetch(apiUrl + `movie?query=${search}`, options)
            .then(res => res.json())
            .then(data => {
                setFilm(data.results)
                console.log(data.results)
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="">
            <div className="container d-flex justify-space-between">
                <h1>BOOLFLIX</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Cosa vuoi guardare?"
                        // value={film}
                        onChange={handleInput} />
                </form>
            </div>
            <div>
                <ul className="list-group">
                    {film.map((e) => {
                        return (
                            <li className="list-group-item" key={e.id}>
                                <>
                                    <h1>{e.title}</h1>
                                    <h2>{e.original_title}</h2>
                                    <h2>{e.original_language}</h2>
                                </>
                            </li>
                        )
                    }
                    )}
                </ul>
            </div>
        </div>
    );
};


export default Main;

