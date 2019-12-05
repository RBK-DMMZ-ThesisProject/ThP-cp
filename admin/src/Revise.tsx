import React from 'react';
import './Revise.css';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';


<<<<<<< HEAD
=======
//Revise modal (when you click on Revise button in profile Modal)
>>>>>>> afac32b26b6eca8a38078f099c1e36b970e6514d
const Revise: React.FC = () => {
  return (
    <div id='reviseMain'>
      <h1 id='reviseName'>Reason For Revision</h1>
      <hr></hr>
      <div id="textareaDiv">
        <TextareaAutosize aria-label="minimum height" rows={30} cols={100} placeholder="Write a reason for this to be sent to revision..."/>
        <br></br>
        <Button variant="contained" id="btn">OK</Button>
      </div>
    </div>
  );
}

export default Revise;