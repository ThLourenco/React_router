import React from 'react'
import { useParams } from 'react-router-dom'

export const Info = () => {

    const {id} = useParams()

  return (
    <div>
        <p>Mais informaçoes sobre o produto: {id} </p>
    </div>
  )
}
