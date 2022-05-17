// =========== Home
// import all module
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { IReduxStates } from '../interfaces';
import { setToken } from '../redux/actions/auth';

// import all components
import { Button } from '../components';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const accessToken: string = useSelector((states: IReduxStates) => states.auth.accessToken);

  const handleSetToken = (e: any) => {
    e.preventDefault();
    dispatch(setToken(String(Date.now()), String(Date.now())));
  };

  const handleResetToken = (e: any) => {
    e.preventDefault();
    dispatch(setToken('', ''));
  };

  return (
    <div>
      <h1>Vehicle Rental Web</h1>
      <Button onClick={handleSetToken}>Set Token</Button>
      <Button onClick={handleResetToken}>Reset Token</Button>
      {accessToken !== '' && <Title>Home</Title>}
    </div>
  );
};

export default Home;

const Title = styled.h1`
	color: red;
`;
