import React from 'react'
import qr from '../../../../public/Icons/qr-code.svg';
type Props = {}

function AR_Template_Location({}: Props) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div style={{display: 'flex', flexDirection:'row', justifyContent:'center', flexWrap: 'wrap', gap: '1rem', padding: '1rem'}}>
        <a style={{display:'flex', justifyContent:'center'}} 
        className="btn btn-secondary" onClick={() => window.location.href = '/AR_Template'}>Back</a>
      </div>

      <section className="projects2-hero">
        <h1 className="projects2-title">Point your camera here with the app </h1>
      </section>

      <div style={{marginBottom: '1rem'}}>
        <img src={qr} style={{ height:'80vh', width:'100%' }} />
      </div>
    </div>
  )
}
export default AR_Template_Location