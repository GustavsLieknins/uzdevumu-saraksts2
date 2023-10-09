import React, {useState} from 'react';
function ToDo(props) {
    //   const stundasJSX = props.stundas.map((stunda, i) => {
    //     return <Stunda key={i} nosaukums={stunda} />
    //   });
    const [selected, setSelected] = useState('yes');

      return (
      <>
      <div>
        <h2>{props.userId}</h2>
        <label>{props.title}<input type="radio" name="mainradio" checked={props.checkedornoter} /></label>
        </div>
      </>
      )
    };
    
    export default ToDo;