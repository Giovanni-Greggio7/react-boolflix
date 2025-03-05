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

    return (
        <div className="container-fluid bg-dark">
        <div className="row align-items-center ">
          <div className="col-md-3">
            <h1 className="text-danger fs-1">BOOLFLIX</h1>
          </div>
          <div className="col-md-9">
            <form
              className="d-flex justify-content-end"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                onChange={handleInput}
                placeholder="Cerca un film..."
                className="m-2 form-control w-50 custom-input"
              />
              <button className="btn btn-outline-danger m-2" tipe="submit">
                Cerca
              </button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Header;




