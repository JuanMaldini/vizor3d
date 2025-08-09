import React from 'react'
import logo from '../../../../public/Icons/Logo.svg';
type Props = {}

function simpleAR_location({}: Props) {
  return (
    <div>
      <button className="btn btn-secondary" onClick={() => window.location.href = '/SimpleAR'}>Back</button>
      <img src={logo} style={{ width: '100%', height: '80dvh' }} />
    </div>
  )
}

export default simpleAR_location