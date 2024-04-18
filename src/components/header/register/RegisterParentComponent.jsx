import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {register as registerAction} from '../../redux/slices/authSlice.js';
import {useNavigate} from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';
import './registerComponent.css';

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
        setFeedbackMessage('Registration is completed');
    };



    return (
        <>
            <Button variant="primary" onClick={handleShow}>Register</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleFormSubmit}>
                        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                        {feedbackMessage && (
                            <div className="feedback-message">{feedbackMessage}</div>
                        )}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" id="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" id="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="repeatPassword" className="form-label">Repeat Password</label>
                            <input type="password" id="repeatPassword" className="form-control" placeholder="Repeat Password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" disabled={isLoading} onClick={handleFormSubmit}>Register</Button>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default RegisterComponent;


