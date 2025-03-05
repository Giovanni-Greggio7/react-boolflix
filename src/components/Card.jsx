import { useGlobalContext } from "../context/GlobalContext";

const Card = () => {

    const { film, serie } = useGlobalContext()

    return (
        <div>
            <ul className="list-group">
                {film.map((e) => {
                    return (
                        <li className="list-group-item" key={e.id}>
                            <>
                                <h1>{e.title}</h1>
                                <h2>{e.original_title}</h2>
                                <h2>{e.original_language}</h2>
                                <h2>{e.vote_average}</h2>
                            </>
                        </li>
                    )
                }
                )}
            </ul>

            <ul className="list-group">
                {serie.map((e) => {
                    return (
                        <li className="list-group-item" key={e.id}>
                            <>
                                <h1>{e.name}</h1>
                                <h2>{e.original_name}</h2>
                                <h2>{e.original_language}</h2>
                                <h2>{e.vote_average}</h2>
                            </>
                        </li>
                    )
                }
                )}
            </ul>
        </div>
    )
}

export default Card;


