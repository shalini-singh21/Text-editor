import React, { useState } from "react"


export default function Textform(_props) {
   //to hand;e the uppercasebtn
   const handleupclick = () => {
      console.log("uppercase was clicked");
      let newText = text.toUpperCase();
      setText(newText)

   }
   //to handle the lowercase btn
   const handleloclick = () => {
      console.log("lowercase was clicked");
      let newText = text.toLowerCase();
      setText(newText)
   }


   //how to handle events by accessing text  area//                                         
   const handleonchange = (event) => {
      console.log("on change");
      setText(event.target.value);
   }
   const handleclclick = () => {
      console.log("clicked on clearbtn");
      let newText = " ";
      setText(newText)
   }


   // how to set state //                                                         
   const [text, setText] = useState('');

   return (
      <>
         <div className="container">
            <h1>{_props.heading}</h1>
            <div className="mb-3">
               <textarea class="form-control" value={text} onChange={handleonchange} id="formTextarea" rows="10" column="7" ></textarea> <br></br>
            </div>
            <button className="btn-text  mx-1" onClick={handleupclick}>  Uppercase</button>
            <button className="btn-text mx-1" onClick={handleloclick}> Lowercase</button>
            <button className="btn-text mx-1" onClick={handleclclick}> clear text</button>

         </div>
         <div className="container">

            <h1>your text summary</h1>
            <p > {text.split(" ").length} words and {text.length} character </p>
            <p > {0.008 * text.split(" ").length}  minute to reads</p>

         </div>



      </>

   )
}