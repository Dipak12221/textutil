import React from 'react';

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //         color :'black',
    //         backgroundColor:'white'
    //     })
    // const [btnText, setBtnText] = useState("Dark Mode");

    // const toggleStyle = ()=>{
    //     if(myStyle.color==='black'){
    //         setMyStyle({
    //             color :'white',
    //         backgroundColor:'black'
    //         })
    //         setBtnText("Light Mode")
    //     }
    //     else
    //     {
    //         setMyStyle({
    //             color :'black',
    //         backgroundColor:'white'
    //         })
    //         setBtnText("Dark Mode");
    //     }
    // }
    let myStyle = {
        color : props.mode === 'dark'?'white':'Black',
        backgroundColor : props.mode === 'dark'?'rgb(0 0 0)':'white'
        

    }
   
  return (
    <div className='container' style={myStyle}>
                <h1 className='my-3' >About Us</h1>
                <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" >
            <h2 className="accordion-header">
            <button className="accordion-button"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your Text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body"style={myStyle} >
                Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, Character or modify their text as per need.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body"style={myStyle}>
                TextUtils is a free character counter tool that provides instant character count & word count statistics for a given test. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body"style={myStyle}>
                This word counter software works in any web browses such as chrome, firefox, Internet Explorer, Safari, Opera. It suits to count character in facebook, blog, books, excel document, pdf document,essays, etc.
            </div>
            </div>
        </div>
        </div>
        
    </div>
  );
}
