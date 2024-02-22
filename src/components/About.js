import React /*,  {useState} */ from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'white',
    //     backgroundColor: 'black'
    // })
    // const [btntext, setBtnText] = useState("enable light mode")
    
    // const toggleStyle= () => {
    //     if(myStyle.color==='white'){
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText('enable dark mode')
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText('enable light mode')
    //     }
    // }

  return (
    <div className='container'  /*style={myStyle}*/ style={{color: props.mode==='dark'?'white':'black'}} >
     <h1 className='my-4'>About Us</h1>
        <div className="accordion my-2" id="accordionExample" >
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button"  /*style={myStyle}*/ style={{backgroundColor: props.mode==='dark'?'rgb(48 48 53)':'grey', color: props.mode==='dark'?'white':'black'}}  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          PRODUCTION
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body"  /*style={myStyle}*/ style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} >
          <strong>This includes the building material of a app</strong>This app is a working combination of <strong>html, css, javascript</strong> using react js.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button"  /*style={myStyle}*/ style={{backgroundColor: props.mode==='dark'?'rgb(48 48 53)':'grey', color: props.mode==='dark'?'white':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         PURPOSE
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body"  /*style={myStyle}*/ style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} >
          <strong>This includes the working of this app</strong> It is a textutil site which is used to transform or edit text by using different provided text edit tool/button which modifies the content in the textarea.
        </div>
      </div>
    </div>
   
    {/* <div className='container my-2 '>
    <button onClick={toggleStyle} className='bg-success text-white mx-1'>{btntext}</button></div> */}
  </div>
  </div>
  )
}
