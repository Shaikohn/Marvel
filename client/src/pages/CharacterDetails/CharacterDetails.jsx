import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { getDetails } from '../../redux/actions/characterActions';
import { clearCharacterDetails } from '../../redux/slices/characterSlice';

const CharacterDetails = () => {

  const { id } = useParams()
  const dispatch = useDispatch()

  const {characterDetails} = useSelector((state) => state.characters) 

  useEffect(() => {
    dispatch(clearCharacterDetails())
    dispatch(getDetails(id))
  }, [dispatch, id])

  return (
    <div>
      <h1>{characterDetails.name}</h1>
      <img src={characterDetails.image} />
      <p> {characterDetails.description} </p>
      {
        characterDetails?.appearances?.map((a, i) => {
          return (
            <div key={i}>
              <h2>{a.title}</h2>
              <img src={a.thumbnail} />
            </div>
          )
        })
      }
    </div>
  )
}

export default CharacterDetails