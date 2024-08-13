import React, {useState} from 'react'

  // ...
export default function TextForm(heading) {
  
  const upper=()=>{
      console.log("button is clicked" + text);
      let newText=text.toUpperCase();
      setText(newText)
  }
  const lower=()=>{
    console.log("button is clicked" + text);
    let newText=text.toLowerCase();
    setText(newText)
}
  const pressed=(event)=>{
    console.log("button is pressed");
    setText(event.target.value)
}
const [text, setText] = useState(" ");

  return (
   <>
    <div className='container' >
      <h1>{heading.head}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={pressed} id="text" rows="6"></textarea>
        </div>
      <button className="btn btn-primary mx-2" onClick={upper}>Upper Case</button>
      <button className="btn btn-primary mx-2" onClick={lower}>Lower case</button>
      </div>
      <div className='container my-3'>
      <h1>Info About your text</h1>
     <p>{text.trim().length > 0 ? `${text.split(" ").filter(Boolean).length} words ${text.length} characters` : "0 words  0 characters"}
    </p>
    </div>
    </>  
  )
}
