import React, {useState} from 'react'

export default function Textform(props) {

  const [text, setText] = useState('enter text here');

    const handleUpClick = ()=>{
        console.log("uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleloClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText)
  }
  const handleclrClick = ()=>{
    let newText = ('');
    setText(newText)
    setCount(countChar)
    setCount1(countcons)
}
    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value)
    }

    let [count, setCount] = useState(0);
    let [count1, setCount1] = useState(0);
    let countChar = 0, countcons = 0;

    const handleVoClick = ()=>{
      for(count=0; count<=text.length; count++){
        if(text.charAt(count).match(/[aeiouAEIOU]/)){
          countChar++;
          setCount(countChar)
        }
      }

    }
    const handleConsClick = ()=>{
      for(count1=0; count1<=text.length; count1++){
        if(text.charAt(count1).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)){
          countcons++;
          setCount1(countcons)
        }
      }
    }
    const handleCopy= ()=>{
      var text = document.getElementById("my_box");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();  // this will remove the selected text
    }

    
    
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" id="my_box" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'white':'white', color: props.mode==='dark'?'#ad9f9f':'#ad9f9f'}} rows="8"></textarea>
</div>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>convert to uppercase</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleloClick}>convert to lowercase</button>
<button disabled={text.length===0} className='btn btn-secondary mx-1 my-1' onClick={handleVoClick}>vowels</button>
<button disabled={text.length===0} className='btn btn-secondary mx-1 my-1' onClick={handleConsClick}>consonants</button>
<button disabled={text.length===0} className='btn btn-secondary mx-1 my-1' onClick={handleclrClick}>clear</button>
<button disabled={text.length===0} className='btn btn-secondary mx-1 my-1' onClick={handleCopy}>copy</button>
</div>


<div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
  <h1>your text summary</h1>
  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} <strong>Minutes </strong>will take to read</p>
  <p>You have entered <strong>{count} Vowels</strong></p>
  <p>You have entered <strong>{count1} Consonants</strong></p>
</div>
</>

  )
}
