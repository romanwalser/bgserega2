import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Fast Green Loop</title>
        <meta property="og:title" content="Fast Green Loop" />
      </Helmet>
      <a
        href="https://ratenewsfeed.com/short/86420?stream_uuid=24ad924e-0178-44e4-b997-f97968757021&trek=1"
        target="_self"
        rel="noreferrer noopener"
        className="home-link"
      >
        <img alt="image" src="/bgbutt.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
