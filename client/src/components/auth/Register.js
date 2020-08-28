import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/'); // redirect in React
    }

    if (error) {
      setAlert(error, 'danger');
      clearErrors();
    }

    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value }); // spread operator to take all the actual properties of user

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || password === '') {
      setAlert('Compilare tutti i campi, per favore', 'danger');
    } else if (password !== password2) {
      setAlert('Le password non combaciano', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  return (
    <div className='section'>
      <main>
        <center>
          <h1 className='blue-text'>CookBook</h1>

          <div className='section'></div>

          <div className='container'>
            <div
              className='z-depth-1 grey lighten-4 row'
              style={{
                display: 'inline-block',
                padding: '32px 48px 0px 48px',
                border: '1px solid #EEE',
              }}
            >
              <form onSubmit={onSubmit}>
                <div className='row'>
                  <div className='col s12'></div>
                </div>

                <div className='row'>
                  <div className='input-field col s12'>
                    <label htmlFor='name'>Nome completo</label>
                    <input
                      type='text'
                      name='name'
                      value={name}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='input-field col s12'>
                    <label htmlFor='email'>Email</label>
                    <input
                      type='email'
                      name='email'
                      value={email}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='input-field col s12'>
                    <label htmlFor='password'>Password</label>
                    <input
                      type='password'
                      name='password'
                      value={password}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='input-field col s12'>
                    <label htmlFor='password2'>Ripeti la password</label>
                    <input
                      type='password'
                      name='password2'
                      value={password2}
                      onChange={onChange}
                      required
                      minLength='8'
                    />
                  </div>
                </div>

                <br />
                <center>
                  <div className='row'>
                    <button
                      type='submit'
                      name='btn_register'
                      className='col s12 btn btn-large waves-effect blue'
                    >
                      Registrati
                    </button>
                  </div>
                </center>
              </form>
            </div>
          </div>
          <Link to='/login'>Pagina di accesso</Link>
        </center>

        <div className='section'></div>
        <div className='section'></div>
      </main>
    </div>
  );
};

export default Register;
