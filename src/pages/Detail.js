import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import Loading from '../components/Loading';
import './detail.css'

function Detail() {
    const [char, setChar] = useState(null)
    const [loading, setLoading] = useState(true)
    const { char_id } = useParams();
    console.log(char_id);

    useEffect(() => {
        axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
            .then((res) => res.data,)
            .then(data => setChar(data[0]))
            .finally(() => setLoading(false))
    }, [char_id])


    return (
        <div>
            {
                loading && <Loading />
            }
            {
                char &&
                <div className='card-detail'>
                    <h1>{char.name}</h1>
                    <img src={char.img}></img>
               
                    <h5>Birthday</h5>
                    <h3>{char.birthday}</h3>
             


                    <h5>Occupation</h5>
                    <h3>{char.occupation}</h3>

             
                    <h5>Nickname</h5>
                    <h3>{char.nickname}</h3>

            

                    <h5>Portrayed</h5>
                    <h3>{char.portrayed}</h3>

                </div>

            }
        </div>
    )
}

export default Detail