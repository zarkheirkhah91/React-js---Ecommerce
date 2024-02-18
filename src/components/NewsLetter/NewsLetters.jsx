import React from 'react'
import './NewsLetters.css'

const NewsLetters = () => {
  return (
    <div className='Newsletter'>
      <h1>Get Exclusive Offers on Your Email</h1>
      <p>Subscribe to Out Newletter and Stay UPdated</p>
      <div>
        <input type='email' placeholder='Your Email id'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetters
