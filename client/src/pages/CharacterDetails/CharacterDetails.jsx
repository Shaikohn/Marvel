import React from 'react'
import './CharacterDetails.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { getDetails } from '../../redux/actions/characterActions';
import { clearCharacterDetails } from '../../redux/slices/characterSlice';

const CharacterDetails = () => {

  const { id } = useParams()
  const dispatch = useDispatch()

  const {characterDetails} = useSelector((state) => state.characters) 
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(4)
  const max = Math.ceil(characterDetails?.appearances?.length / perPage)

  useEffect(() => {
    dispatch(clearCharacterDetails())
    dispatch(getDetails(id))
  }, [dispatch, id])

  const nextPage = () => {
    if(page < max) {
        /* setInput(input + 1) */
        setPage(page + 1)
    }
  }

  const prevPage = () => {
    if(page > 1) {
        /* setInput(input - 1) */
        setPage(page - 1)
    }
  }

/*   const filterAppearances = () => {
    if(characterDetails?.appearances.length === 0) {
        setPage(1)
    } 
    return characterDetails?.appearances
} */

  return (
    <div className='detailsContainer'>
      <img className='detailsImage' src={characterDetails.image} />
      <div className='infoContainer'>
        <h1>{characterDetails.name}</h1>
        <p> {characterDetails.description} </p>
        <div style={{display: 'flex'}}>
        <button onClick={prevPage}>atras</button>
        {
        characterDetails?.appearances?.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
        .map((a, i) => {
          return (
            <div key={i}>
              <h3>{a.title}</h3>
              <img className='thumbnailImage' src={a.thumbnail} />
            </div>
          )
        })
        }
        <button onClick={nextPage}>adelante</button>
        </div>
        </div>
    </div>
  )
}

export default CharacterDetails