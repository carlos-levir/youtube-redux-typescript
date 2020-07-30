import React from 'react';
import logo from '../../assets/logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store/createStore';
import { signInRequest } from '../../store/modules/auth/actions';

import './index.css';

const SignIn: React.FC = () => {
  const { loadingSignInRequest, isSignedIn, error } = useSelector((state: StoreState) => state.auth);
  const dispatch = useDispatch();

  console.log('LOADING:', loadingSignInRequest);
  console.log('SIGNED:', isSignedIn);
  console.log('ERROR:', error);

  return (
    <div className="sign-in-page">
      <img src={logo} alt="CL Logo" />
      <input type="text" defaultValue="test@email.com" />
      <input type="password" defaultValue="12345678" />
      <button onClick={() => dispatch(signInRequest({ email: 'test@email.com', password: '12345678' }))}>
        {loadingSignInRequest ? 'Carregando' : 'Entrar'}
      </button>
    </div>
  );
}

export default SignIn;