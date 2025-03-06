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
        <div className="bg-dark">
            <div className="container">
                <h2 className="text-white">Film</h2>
                <div className="row row-cols-4 mx-auto">
                    {film.map((e) => {
                        return (
                            <div className="card text-center text-white gap-3 bg-dark locandine" key={e.id}>
                                <img className="card-img-top sfondo" src={img + "w342/" + e.poster_path} />
                                <>
                                    <div className="info">
                                        <p>{e.title}</p>
                                        <p>{e.original_title}</p>
                                        <p className={`fi fi-${e.original_language = "en" ? "gb" : null}`}></p>
                                        <p>{Stars(e.vote_average)}</p>
                                        <p>{e.overview}</p>
                                    </div>
                                </>
                            </div>
                        )
                    }
                    )}
                </div>



                <h2 className="text-white pt-5">Serie TV</h2>
                <div className="row row-cols-4 mx-auto">
                    {serie.map((e) => {
                        return (
                            <div className="card text-center text-white gap-3 bg-dark locandine" key={e.id}>
                                <img className="card-img-top sfondo" src={img + "w342/" + e.poster_path} />
                                <>
                                    <div className="info">
                                        <p>{e.name}</p>
                                        <p>{e.name}</p>
                                        <p className={`fi fi-${e.original_language = "en" ? "gb" : null}`}></p>
                                        <p>{Stars(e.vote_average)}</p>
                                        <p>{e.overview}</p>
                                    </div>
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


