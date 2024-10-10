import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from '../../redux/actions/characterActions';
import { Link } from "react-router-dom";
import Loader from '../../components/Loader/Loader';

const Characters = () => {

  const { allCharacters } = useSelector(state => state.characters)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCharacters())
  }, [dispatch])

  return (
    <div>
      <h1>Characters</h1>
      {
        allCharacters.length > 0 ?
        allCharacters?.map((c, i) => {
          return (
            <Link to={`character/${c.id}`} key={i}>
              <h3> {c.name} </h3>
              <img src={c.image} style={{height: '200px', width: '200px'}} />
            </Link>
          )
        }) : <Loader />
      }
    </div>
  )
}

export default Characters