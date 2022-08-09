import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";


function LoginPage() {

    const handleSubmit = () => {

    }

    return (
    <Container>
            <Row>
                <Col md={6} className="login-form-container">
                    <form action="" onSubmit={handleSubmit}>
                        <h1>
                        Login to your account
                        </h1>
                        <label>Email Address</label>
                        <input type="email" placeholder="Enter Email" value="" required ></input>
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password" value="" required ></input>
                        <button type="submit">Login</button>
                        <p>Don't have an account? <Link to="/signup">Create Account</Link></p>
                    </form>
                </Col>
                <Col md={6}></Col>
        </Row>
</Container>
    )
}

export default LoginPage;

