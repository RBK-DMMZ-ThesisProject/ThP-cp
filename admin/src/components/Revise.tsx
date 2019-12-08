import React from 'react';
import './../css/revise.css';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import axios from 'axios';

interface Props {
  pid: string,
  handleClose: () => void;
}
//Revise modal (when you click on Revise button in profile Modal)
const Revise: React.FC<Props> = (props) => {
  const [profileNotes, setProfileNotes] = React.useState('');
  const handleRevision = () => {
    // update state database
    axios.post('updateProfileNotes', {
      id: props.pid,
      ProfileNotes: profileNotes
    })
      .then((response) => {
        console.log(response);
        props.handleClose();
      }, (error) => {
        console.log(error);
      });

  }
  const onChange = (e: any) => {
    setProfileNotes(e.target.value)
  }
  return (
    <div id='reviseMain'>
      <h1 id='reviseName'>Reason For Revision</h1>
      <hr></hr>
      <div id="textareaDiv">
        <TextareaAutosize aria-label="minimum height" onChange={onChange} rows={30} cols={100} placeholder="Write a reason for this to be sent to revision..." />
        <br></br>
        <Button variant="contained" id="btn" onClick={handleRevision}>Send Revision</Button>
      </div>
    </div>
  );
}

export default Revise;