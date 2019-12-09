import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



interface Props {
    handleClose: () => void;
}
//Revise modal (when you click on Revise button in profile Modal)
const AddUser: React.FC<Props> = (props) => {
    const [adminName, setAdminName] = React.useState('');
    const [mobileNO, setMobileNO] = React.useState(0);
    const [email, setEmail] = React.useState('');


    const addUser = () => {
        // update state database
        axios.post('admins/addAdmin', {
            adminName: adminName,
            mobileNO: mobileNO,
            email: email
        })
            .then((response) => {
                console.log(response);
                // refersh users?????????????
                props.handleClose();
            }, (error) => {
                console.log(error);
            });

    }
    const onAdminNameChange = (e: any) => {
        setAdminName(e.target.value)
    }
    const onMobileNOChange = (e: any) => {
        setMobileNO(e.target.value)
    }
    const onEmailChange = (e: any) => {
        setEmail(e.target.value)
    }
    return (

        <form autoComplete="off">
            <TextField id="adminName" label="User Name:" onChange={onAdminNameChange} value={adminName} />
            <br />
            <TextField id="mobileNO" label="Mobile No.:" onChange={onMobileNOChange} value={mobileNO} />
            <br />

            <TextField id="email" label="Email" onChange={onEmailChange} value={email} />
            <br />
            <br />
            <Button variant="contained" id="btn" onClick={addUser}>Add User</Button>
        </form>


    );
}

export default AddUser;