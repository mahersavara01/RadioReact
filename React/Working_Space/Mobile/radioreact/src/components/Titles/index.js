import React from 'react'
import { Helmet } from 'react-helmet'
import * as Titles from './Constants';
const index = () => {
    return (
        <>
        <Helmet>
          <title>{ Titles.Login }</title>
        </Helmet>
        ...
      </>
    )
}

export default index
