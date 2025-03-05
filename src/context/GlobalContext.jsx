import { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const apiUrl = import.meta.env.VITE_ENDPOINT_URL;
    // const apiKey = import.meta.env.VITE_API_KEY;
    const apiToken = import.meta.env.VITE_TOKEN;

    const [film, setFilm] = useState([]);

    const [serie, setSerie] = useState([]);

    const [search, setSearch] = useState('')

    function handleInput(e) {
        return (
            setSearch(e.target.value)
        )
    }

    function handleSubmit(e) {
        e.preventDefault()
        handleFilms()
        handleSeries()
    }

    function handleFilms() {
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

    function handleSeries() {
        const options = {
            method: "GET",
            url: apiUrl,
            headers: {
                accept: "application/json",
                Authorization: 'Bearer ' + apiToken
            },
        };

        fetch(apiUrl + `tv?query=${search}`, options)
            .then(res => res.json())
            .then(data => {
                setSerie(data.results)
                console.log(data.results)
            })
            .catch(err => console.error(err));
    }

    const value = {
        handleFilms,
        handleSeries,
        handleSubmit,
        handleInput,
        film,
        setFilm,
        serie,
        setSerie,
        search,
        setSearch,
        apiUrl,
        apiToken
    };

    return (
        // Fornisce il valore del contesto ai componenti figli
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };



