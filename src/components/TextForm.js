import React,{ useState } from 'react'

export default function TextForm(props) {
        // React Hooks - useState
    const [text, setText] = useState('');
    // conver the text to uppercase
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Uppercase", 'success')
    }
    // conver the text to lowercase
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to Lowercase", 'success')
    }
    // Clear Text
    const handleClClick = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared", 'success')
    }
    // Capatilize Text
    const handleCapClick = () =>{
        if (text !== ""){
            let newText = text[0].toUpperCase() + text.substring(1).toLowerCase();
            setText(newText);
            props.showAlert("Text capitalized", 'success')
        } else {
            props.showAlert("Please enter text first", 'danger')
        }
    }
    // Copy Text
    const handleCopy= () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("text copied to clipboard.", 'success')
    }
    // Remove extra spaces
    const handleRemoveSpace = ()=>{
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText);
        props.showAlert("Extra spaces removed.", 'success')
    }

    // to handle change in TextArea
    const handleOnChange = (event) =>{
        setText(event.target.value);
        
    }
    const placeholder = 'Enter your text here'
    
    // Rendering part
    return (
        <>
        <div className='container' >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* rgb(21,32,43)!importan */}
                <textarea className="form-control" placeholder={placeholder} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>                
            </div>   
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Upper</button>
            <button className="btn btn-secondary mx-1" onClick={handleCapClick}>Capitalize</button>  
            <button className="btn btn-success mx-1" onClick={handleLoClick}>Lower</button>
            <button className="btn btn-danger mx-1" onClick={handleClClick}>Clear</button>            
            <button className="btn btn-warning mx-1" onClick={handleCopy}>Copy</button>
            <button className="btn btn-info mx-1" onClick={handleRemoveSpace}>Remove Space</button>       
        </div>
        <div className="container my-3">
            <h2>Your Text summary</h2>
            <p>Your text has {text.split(" ").length} words and {text.length} characters.</p>
            <p>It will take {text.split(" ").length *0.008 } minutes to read</p>
            <h4>Text Preview</h4>
            <p>{text.length>0?text:"Enter something in the the textbox to view here"}</p>
            

        </div>
        </>
    )
}
