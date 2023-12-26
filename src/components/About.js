// import React, {useState} from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: "white",
    //     backgroundColor: "grey"
    // });
    let myStyle = {
            color: (props.mode === "dark") ? "white" : "black",
            backgroundColor: (props.mode === "dark") ? "rbg(4 37 65)" : "white"
        }

    return (
        <>
            <h1 className='my-3'>About TextUtils Web App</h1>
            <div className="container my-3 p-3 " style={myStyle}>
                <div className="accordion my-2" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                TextUtils Web App
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                                A TextUtils is the React-based Web Application, used to maninpulate the text. It can be used for modifying and manipulating as per the need. It provides several functionalites as:
                                <ol><li>Text generation</li>
                                <li>Words and Character count</li>
                                <li>Covert Text to Uppercase</li>
                                <li>Covert Text to Lowercase</li>
                                <li>Copy the Text</li>
                                <li>Clear the Text</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Creater and Programmer
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                The TextUtils is part of React course by #CodeWithHarry, programmed by Atmram Kamlbi. 
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Features and functionalites
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                The TestUtils is React-functional component based Web Application which is used for text generation and manipulation.
                                Some of the key features implemented in the Application are:
                                <ol>
                                    <li>Dark/Light mode</li>
                                    <li>Alert notification</li>
                                    <li>Text manipulation features</li>
                                    <li>React Router</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}