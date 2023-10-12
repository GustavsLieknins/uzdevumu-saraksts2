import React, {useState} from 'react';
function ToDo(props) {
    //   const stundasJSX = props.stundas.map((stunda, i) => {
    //     return <Stunda key={i} nosaukums={stunda} />
    //   });
    const [checked, setChecked] = useState(props.checkedornoter);
    function ChangedTrueFalse(e){
      setChecked(!checked)
      console.log("Inputs " + props.userId + "tika parversts par " + checked );

    }

      return (
      <>
      <div>
        <h2>{props.userId}</h2>
        <label>{props.title}<input type="checkbox"  defaultChecked={checked} onChange={event => ChangedTrueFalse(event.target.value)}/></label>
        </div>
      </>
      )
    };
    
    export default ToDo;