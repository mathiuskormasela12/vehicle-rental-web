// =========== Sign Up
// import all module
import React from 'react';
import styled from 'styled-components';

// import all components
import { Header } from '../components';

const SignUp: React.FC = () => (
  <div>
    <Header title="Sign Up | Vehicle Rental" />
    <h1>Vehicle Rental Web</h1>
    <Title>Register</Title>
  </div>
);

export default SignUp;

const Title = styled.h1`
	color: red;
`;
