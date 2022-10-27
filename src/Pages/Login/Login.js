import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const auth = getAuth(app);

const Login = () => {
  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const [passError, setPassError] = useState('');
  const [userSuccess, setuserSuccess] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setuserSuccess(false);
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&?])/.test(password)) {
      setPassError('Password should contain at least one lowercase, one uppercase letter, one digit and one special character!');
      return;
    }

    if (password.length < 6) {
      setPassError('Password should be at least 6 character long!');
      return;
    }
    setPassError('');
  }

  const handleGoogleSignIn = (event) => {
    event.preventDefault();

    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setuserSuccess(true);
        // form.reset();
        // verifyEmail();
        // updateUserName(name);
      })
      .catch((error) => {
        console.error('error', error);
        setPassError(error.message);
        setuserSuccess(false);
      })

  }

  return (
    <div className='login mx-auto shadow-lg p-4 rounded-4 mt-5'>
      <h4 className='mb-4 text-center form-header fw-bold'>Login Here</h4>
      <Form onSubmit={handleLogin}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Email</Form.Label>
          <Form.Control className='border border-1' type="email" name="email" placeholder="Enter Email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className='border border-1' type="password" name="password" placeholder="Enter Password" required />
        </Form.Group>

        <p className='text-danger fw-semibold'>{passError}</p>

        {
          userSuccess &&
          <p className='text-success fw-semibold'> User Created Successfully
          </p>
        }

        <div>
          <div>
            <Button variant="primary" type="submit" className='w-100 login-btn'>
              Login
            </Button>
          </div>

          <div className='d-flex justify-content-between align-items-center mt-1'>

            {/* <div>
              <b className='form-header fs-7'>Login with</b>
            </div> */}

            <div>
              <Button variant="outline-secondary" type="submit" className='w-100 rounded-pill' onClick={handleGoogleSignIn}>
                <FaGoogle className='fs-5'></FaGoogle>
                <span className='ms-2'>Google</span>
              </Button>
            </div>

            <div>
              <Button variant="outline-secondary" type="submit" className='w-100 rounded-pill'>
                <FaGithub className='fs-5'></FaGithub>
                <span className='ms-2'>GitHub</span>
              </Button>
            </div>
          </div>

          <p className='m-0 text-center mt-3'> <small>Don't have an account? Please <Link to="/register"><b>Register</b></Link></small></p>
        </div>
      </Form>
    </div>
  );
}

export default Login;