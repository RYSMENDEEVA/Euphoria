import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CustomContext } from '../../utils/Context';
import { useNavigate } from 'react-router-dom';
import loginImg from '../../assets/login.png';
import { Api } from '../../api/api';

const Login = () => {
  const { user, setUserAuth } = useContext(CustomContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const loginUser = formValues => {
    Api.login(formValues)
      .then(userData => {
        setUserAuth(userData);
        navigate('/profile');
      })
      .catch(err => {
        setError('email', { message: err.message });
      });
  };

  useEffect(() => {
    if (user) {
      navigate('/profile');
      return;
    }
  }, [user]);

  return (
    <section className="register">
      <div className="register__row">
        <div className="register__left">
          <img className="register__img" src={loginImg} alt="" />
        </div>
        <div className="register__signin">
          <h2 className="register__right-title">Sign In Page</h2>
          <form className="register__form" onSubmit={handleSubmit(loginUser)}>
            <label htmlFor="country">
              <i className="fa fa-envelope"></i> Email Address
            </label>
            <input
              {...register('email', { required: true })}
              type="email"
              className="register__form-field"
              name="email"
              placeholder="Email"
            />
            <div
              className="register__error"
              style={{ color: 'red', paddingLeft: '12px' }}
            >
              {errors?.email && <p>*Required field</p>}
            </div>
            <label htmlFor="adr">
              <i className="fa fa-address-card-o"></i>Password{' '}
            </label>
            <input
              {...register('password', { required: true })}
              type="password"
              className="register__form-field"
              name="password"
              placeholder="Password"
            />
            <div
              className="register__error"
              style={{ color: 'red', paddingLeft: '12px' }}
            >
              {errors?.password && <p>*Required field</p>}
            </div>
            <button type="submit" className="register__btn">
              Sign In
            </button>
          </form>

          <p className="register__btn-text">
            Don’t have an account?
            <button
              className="register__btn-signUp"
              onClick={() => navigate('/user')}
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
