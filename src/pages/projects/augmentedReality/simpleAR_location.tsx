import React from 'react'
import logo from '../../../../public/Icons/Logo.svg';
type Props = {}

function simpleAR_location({}: Props) {
  return (
    <div>
      <img src={logo} style={{ width: '100%', height: 'auto' }} />
      <button className="btn btn-secondary" onClick={() => window.location.href = '/SimpleAR'}>Back</button>
    </div>
  )
}

export default simpleAR_location