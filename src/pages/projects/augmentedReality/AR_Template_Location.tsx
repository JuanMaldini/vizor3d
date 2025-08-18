import React from 'react'
import logo from '../../../../public/Icons/Logo.svg';
type Props = {}

function AR_Template_Location({}: Props) {
  return (
    <div>
      <a className="btn btn-secondary" onClick={() => window.location.href = '/AR_Template'}>Back</a>
      <a
        className="btn btn-secondary"
        download href='/ar/targetLocation.pdf'
        title="Download A4 PDF"
        aria-label="Download A4 PDF"
      >Download</a>
      <img src={logo} style={{ width: '100%', height: '80dvh' }} />
    </div>
  )
}
export default AR_Template_Location