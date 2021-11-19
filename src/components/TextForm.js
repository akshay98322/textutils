import React,{ useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
        
    }
    
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="myBox" class="form-label">Example</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                
            </div>   
            <button className="btn btn-primary" onClick={handleUpClick}>Convert Upper Case</button>   
            {/* <button className="btn btn-primary" onClick={handleLoClick}>Convert Lower Case</button>        */}
        </div>
    )
}
