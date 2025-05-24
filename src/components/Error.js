import React from 'react'
import {useRouteError} from 'react-router-dom'
const Error = () => {
    const err = useRouteError();
  return (
    <div>
        <h1>Oops! Something went wrong.</h1>
        <p>Please try again later.</p>
        <p>{err.status}: {err.statusText}</p>
    </div>
  )
}

export default Error
