import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

function SignUpPage() {

    // create state to store the email and password input from the client //

    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    // create functions to hanlde the changing inputs from the client //

    const handleEmailChange = (e) => {
        setEmailInput(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value)
    }

    // create function to hanlde the submission of the form //

    const handleSubmit = () => {

    }

    return (
    
        <Container>
            <Row>
                <Col md={6} className="login-form-container">
                    <form action="" onSubmit={handleSubmit}>
                        <h1>
                        Sign up
                        </h1>
                        <label>Email Address</label>
                        <input type="email" placeholder="Enter Email" value={emailInput} required onChange={handleEmailChange}></input>
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password" value={passwordInput} required onChange={handlePasswordChange}></input>
                        <button type="submit">Login</button>
                    </form>
                </Col>
                <Col md={6}></Col>
        </Row>
</Container>
)

}

export default SignUpPage;