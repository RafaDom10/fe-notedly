import { useEffect } from 'react';
import { useMutation, useApolloClient, gql } from '@apollo/client';

import UserForm from '../../components/UserForm';

const SIGNIN_USER = gql`
  mutation signIn($email: String!, $password: String!) {
    signUp(email: $email, password: $password)
  }
`;

export default function Signin(props) {
  useEffect(() => {
    document.title = 'Sign in | Notedly';
  }, []);

  const client = useApolloClient();

  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.signIn);
      client.writeQuery({ data: { isLoggedIn: true } });
      props.history.push('/');
    },
  });

  return (
    <>
      <UserForm action={signIn} formType="signin" />
    </>
  );
}
