import qr from '../../../../public/Icons/qr-code.svg';
type Props = {}

function AR_Template_Location({}: Props) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div style={{display: 'flex', flexDirection:'column', alignItems:'center', gap: '1rem', padding: '1rem'}}>
        <a style={{display:'flex', justifyContent:'center'}} className="btn btn-secondary" onClick={() => window.location.href = '/ar-template'}>Back</a>
        <h2 className="">Point your camera here with the app </h2>
      </div>

      <section className="projects2-hero">
      </section>

      <div style={{marginBottom: '1rem'}}>
        <img src={qr} style={{ height:'70vh'}} />
      </div>
    </div>
  )
}
export default AR_Template_Location