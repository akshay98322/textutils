import React,{ useState } from 'react'

export default function TextForm(props) {
        // React Hooks - useState
    const [text, setText] = useState('');
    // conver the text to uppercase
    const handleUpClick = () =>{
        if (text !== ""){
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Text converted to Uppercase.", 'success')
        } else {
            props.showAlert("Please enter text first.", 'danger')
        }
        
    }
    // conver the text to lowercase
    const handleLoClick = () =>{
        if (text !== ""){
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Text converted to Lowercase.", 'success')
        } else {
            props.showAlert("Please enter text first.", 'danger')
        }
        
    }
    // Clear Text
    const handleClClick = () =>{
        if (text !== ""){
            let newText = "";
            setText(newText);
            props.showAlert("Text cleared.", 'success')
        } else {
            props.showAlert("No text to clear.", 'danger')
        }
        
    }
    // Capatilize Text
    const handleCapClick = () =>{
        if (text !== ""){
            let newText = text[0].toUpperCase() + text.substring(1).toLowerCase();
            setText(newText);
            props.showAlert("Text capitalized.", 'success')
        } else {
            props.showAlert("Please enter text first.", 'danger')
        }
    }
    // Copy Text
    const handleCopy= () =>{
        if (text !== ""){
            navigator.clipboard.writeText(text);
            props.showAlert("Text copied to clipboard.", 'success')
        } else {
            props.showAlert("No text to copy.", 'danger')
        }
        
    }
    // Remove extra spaces
    const handleRemoveSpace = ()=>{
        if (text !== ""){
            let newText = text.split(/[ ]+/).join(" ");
            setText(newText);
            props.showAlert("Extra spaces removed.", 'success')
        } else {
            props.showAlert("Please enter text first.", 'danger')
        }
        
    }

    // to handle change in TextArea
    const handleOnChange = (event) =>{
        setText(event.target.value);
        
    }
    const placeholder = 'Enter your text here.'
    
    // Rendering part
    return (
        <>
        <div className='container' >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* rgb(21,32,43)!importan */}
                <textarea className="form-control" placeholder={placeholder} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>                
            </div>   
            <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Upper</button>
            <button className="btn btn-secondary mx-1 my-2" onClick={handleCapClick}>Capitalize</button>  
            <button className="btn btn-success mx-1 my-2" onClick={handleLoClick}>Lower</button>
            <button className="btn btn-danger mx-1 my-2" onClick={handleClClick}>Clear</button>            
            <button className="btn btn-warning mx-1 my-2" onClick={handleCopy}>Copy</button>
            <button className="btn btn-info mx-1 my-2" onClick={handleRemoveSpace}>Remove Space</button>       
        </div>
        <div className="container my-3">
            <h2>Your Text summary</h2>
            <p>Your text has {text.split(" ").filter((word) => {return word.length!==0}).length} words and {text.length} characters.</p>
            <p>It will take {text.split(" ").filter((word) => {return word.length!==0}).length *0.008 } minutes to read</p>
            <h4>Text Preview</h4>
            <p>{text.length>0?text:"Enter something in the the textbox to view here"}</p>
            

        </div>
        </>
    )
}
