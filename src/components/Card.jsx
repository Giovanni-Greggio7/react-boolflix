import { useGlobalContext } from "../context/GlobalContext";

const Card = () => {

    const { film, serie } = useGlobalContext()
    const img = "https://image.tmdb.org/t/p/"

    function Stars(vote) {
        const roundedVote = Math.round(vote / 2)
        const fullStar = "★";
        const emptyStar = "☆";

        return fullStar.repeat(roundedVote) + emptyStar.repeat(5 - roundedVote);
    }

    return (
        <div>
            <h2>Film</h2>
            <div className="row row-cols-4 mx-auto">
                {film.map((e) => {
                    return (

                        <div className="card" key={e.id}>
                            <img className="card-img-top" src={img + "w342/" + e.poster_path} />
                            <>
                                <h1>{e.title}</h1>
                                <h2>{e.original_title}</h2>
                                <h2 className={`fi fi-${e.original_language = "en" ? "gb" : null}`}></h2>
                                <h2>{Stars(e.vote_average)}</h2>
                            </>
                        </div>
                    )
                }
                )}
            </div>


            <div>
                <h2>Serie TV</h2>
                <div className="row row-cols-4 mx-auto">
                    {serie.map((e) => {
                        return (

                            <div className="card" key={e.id}>
                                <img className="card-img-top" src={img + "w342/" + e.poster_path} />
                                <>
                                    <h1>{e.name}</h1>
                                    <h2>{e.name}</h2>
                                    <h2 className={`fi fi-${e.original_language = "en" ? "gb" : null}`}></h2>
                                    <h2>{Stars(e.vote_average)}</h2>
                                </>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card;


