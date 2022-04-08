
export default function About(props) {
    let myStyle = {
        backgroundColor: props.mode === 'light'?'white': '#ddd',
        border: '2px solid',
        borderColor: props.mode === 'light'?'white': '#bbb',        
    }
    
    
    
  return (
      <div className='container'>
      <h2>About</h2>
        <div className="accordion" id="accordionExample" >
            <div   className="accordion-item" >
                <h2 className="accordion-header" id="headingOne">
                <button  style={myStyle}  className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                <strong>Text Operations</strong>    
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div  className="accordion-body" style={myStyle}>
                Perform several text operations, convert your text to upper case, lower case, remove extra spaces, copy the text to clipboard.
                </div>
                </div>
            </div>
            <div className="accordion-item" >
                <h2 className="accordion-header" id="headingTwo">
                <button style={myStyle}  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to Use</strong> 
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div  className="accordion-body" style={myStyle}>
                This tool is completely free to use, there are no cost related to this.
                </div>
                </div>
            </div>
            <div className="accordion-item" >
                <h2 className="accordion-header" id="headingThree">
                <button style={myStyle}  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong> 
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div  className="accordion-body" style={myStyle}>
                This app is supported on all popular browsers, mobile, pc, mac, tablet etc.
                </div>
                </div>
            </div>
            </div>
      </div>
    
  )
}
