import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const Header = () => {

    const { handleSubmit, handleInput, handleFilms, handleSeries } = useGlobalContext()

    useEffect(() => {
        handleFilms()
    }, []);

    useEffect(() => {
        handleSeries()
    }, []);

    return(
        <div className="container d-flex justify-space-around">
                <h1>BOOLFLIX</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Cosa vuoi guardare?"
                        // value={film}
                        onChange={handleInput} />
                </form>
            </div>
    )
}

export default Header;




