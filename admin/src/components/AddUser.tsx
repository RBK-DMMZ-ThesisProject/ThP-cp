import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

interface Props {
    handleClose: () => void;
}
//Revise modal (when you click on Revise button in profile Modal)
const AddUser: React.FC<Props> = (props) => {
    const [profileNotes, setProfileNotes] = React.useState('');
    const handleRevision = () => {
        // update state database
        axios.post('addUser', {
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
                <br></br>
                <Button variant="contained" id="btn" onClick={handleRevision}>Send Revision</Button>
            </div>
        </div>
    );
}

export default AddUser;