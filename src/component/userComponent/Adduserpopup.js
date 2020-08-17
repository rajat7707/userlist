import React, {useState} from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody } from 'mdbreact';
import { useHistory } from "react-router-dom";

const Addtodopopup = (props) => {

	const history = useHistory();
	const [modal13, setModal13] = useState(true);

	const showPopUP = (nr) => {
		setModal13(!modal13); 
		props.pop();
	}

    const submitUser = async (e) => {
    	e.preventDefault();
    	history.push(`/userlist`);
    }


	return (
		<MDBModal isOpen={modal13} toggle={() => showPopUP(13)} size="lg">
	        <MDBModalBody>
	            <MDBContainer size="lg">
	                <form onSubmit = {submitUser}>
	                    <div className="card card-header">
	                        <h3 style = {{color : "green"}}>User created successfully</h3>
	                        <MDBBtn color="primary" type="submit">Ok</MDBBtn>
	                    </div>
	                </form>
	            </MDBContainer>
	        </MDBModalBody>
    	</MDBModal>
	)
}

export default Addtodopopup ;