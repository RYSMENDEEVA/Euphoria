import React, { useContext, useEffect } from 'react';
import registerImg from '../../assets/register.png';
import { useForm } from 'react-hook-form';
import { CustomContext } from '../../utils/Context';
import { useNavigate } from 'react-router-dom';
import { Api } from '../../api/api';

const Register = () => {
  const { user, setUserAuth } = useContext(CustomContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  const registerUser = data => {
    reset();
    Api.register({ ...data, orders: [] })
      .then(data => {
        setUserAuth(data);
      })
      .catch(err => {
        setError('email', { message: err.message });
      });
  };

  console.log(errors);

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
          <img className="register__img" src={registerImg} alt="" />
        </div>
        <div className="register__signin">
          <h2 className="register__right-title">Sign up Page</h2>
          <form
            className="register__form"
            onSubmit={handleSubmit(registerUser)}
          >
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
              {errors?.email && (
                <p>{errors?.email?.message || '*Required field'}</p>
              )}
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
              Sign Up
            </button>
          </form>

          <p className="register__btn-text">
            Already have an account?
            <button
              className="register__btn-signUp"
              onClick={() => navigate('/login')}
            >
              Log in
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
