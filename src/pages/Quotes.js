import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllQuotes, quotesSelector, statusSelector, errorSelector } from '../redux/quotesSlice'
import Loading from '../components/Loading'
import './quotes.css'

function Quotes() {
    const dispatch = useDispatch()
    const data = useSelector(quotesSelector)
    const status = useSelector(statusSelector)
    const error = useSelector(errorSelector)
    console.log(data);


    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAllQuotes())

        }
    }, [dispatch])


    if (error) {
        return <div>Error : {errorSelector}</div>
    }

    return (
        <div>
            <h1>Quotes</h1>
            {
                status === 'loading' && <Loading />
            }
            {
                status === 'succeeded' && data.map((item) => (
                    <div className='quote-container'>
                        <div className='quote'>
                            <h3><q>{item.quote}</q></h3>
                            <div>{item.author} / {item.series}</div>

                        </div>

                    </div>

                ))
            }

        </div>
    )
}

export default Quotes