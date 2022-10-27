import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacters } from '../redux/characterSlice';
import Masonry from 'react-masonry-css'
import './home.css'
import Loading from '../components/Loading';
import { Link } from 'react-router-dom'

function Home() {
    const characters = useSelector((state) => state.characters.items)
    const status = useSelector((state) => state.characters.status)
    const nextPage = useSelector((state) => state.characters.page)
    const error = useSelector((state) => state.characters.error)
    const hasNextPage = useSelector((state) => state.characters.hasNextPage)
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'idle') {

            dispatch(fetchCharacters())
        }
    }, [dispatch, status])



    if (status === 'failed') {
        return <div>Error : {error.message}</div>
    }

    return (
        <div id='container'>
            <h1>Characters</h1>

            <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {
                    characters.map(character => (

                        <div key={character.char_id}>
                            <Link to={`/char/${character.char_id}`} >

                                <div >
                                    <img alt={character.name} src={character.img} className='character' />

                                </div>
                                <div>
                                    <h2 className='ch-name'>{character.name}</h2>
                                </div>
                            </Link>
                        </div>


                    ))
                }
            </Masonry>
            <div className='btn-div' onClick={() => dispatch(fetchCharacters(nextPage))}>
                {status === 'loading' && <Loading />}
                {hasNextPage && status !== 'loading' && (
                    <div id='load-div' >
                        
                            Load More..
                        
                    </div>
                )}
                {
                    !hasNextPage && <div>There is nothing to be shown..</div>
                }
            </div>
        </div>
    )
}

export default Home