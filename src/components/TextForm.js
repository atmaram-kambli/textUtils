import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState("");

    function handleOnChange(event) {
        // const value = document.getElementById("myBox").value;
        // setText(value);
        // console.log(event.target.value);
        setText(event.target.value);
    }
    
    function handleUppercase() {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }
    
    const handleLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    }
    
    const removeSpaces = () => {
        let newText = text.replace(/\s+/g, " ")
        setText(newText);
        props.showAlert("Removed the extra spaces!", "success");
    }
    
    const copyText = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to ClipBoard!", "success");
    }
    const clearText = () => {
        setText("");
        props.showAlert("Text cleared!", "success");
    }

    let words = () => {
        return (text === "" || text.charAt(text.length - 1) === " ") ? (text.split(" ").length -1) : (text.split(" ").length);
    }
    return (
        <>  
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control my-3" value={text} onChange={handleOnChange} style={{backgroundColor: (props.mode === "light") ? "white":"grey", color: (props.mode === "light") ? "black":"white"}} id="myBox" rows="8" placeholder='Enter text here'></textarea>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLowercase}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={removeSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUppercase}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
            </div>
        </div>
        <div className="container my-3">
            <h1>Text Summary</h1>
            <p>{words()} words and {text.length} characters.</p>
            <p>{((text.split(" ").filter((element) => {return element.length !== 0})).length * 0.008)} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    );
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
    mode: PropTypes.string,
    showAlert: PropTypes.func
}
