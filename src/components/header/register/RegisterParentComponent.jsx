import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {register as registerAction} from '../../redux/slices/authSlice.js';
import {useNavigate} from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';

const RegisterComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const {user, isLoading, error} = useSelector(state => state.auth);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Form submission attempted");
        if (!email || !password || !repeatPassword) {
            setErrorMessage('Please fill in all fields');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setErrorMessage('Please enter a valid email address');
            return;
        }
        if (password !== repeatPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }
        console.log('Dispatching register action:', { email, password });
        dispatch(registerAction({email, password}));
        setErrorMessage('');
        setFeedbackMessage('Registration in progress...');
    };



    return (
        <>
            <Button onClick={handleShow}>Open Register Modal</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleFormSubmit}>
                        {errorMessage && <div style={{color: 'red'}}>{errorMessage}</div>}
                        {feedbackMessage && (
                            <div className="feedback-message">{feedbackMessage}</div>
                        )}
                        <p>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Email" value={email}
                                   onChange={(e) => setEmail(e.target.value)}/>
                        </p>
                        <p>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Password" value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                        </p>
                        <p>
                            <label htmlFor="repeatPassword">Repeat password</label>
                            <input type="password" id="repeatPassword" placeholder="Repeat password"
                                   value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)}/>
                        </p>
                        <button type="submit" className="btn btn-primary">Register</button>
                        <button onClick={handleFormSubmit} className="btn btn-primary">Register Test</button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>

                </Modal.Footer>
            </Modal>
        </>
    );
};

export default RegisterComponent;
