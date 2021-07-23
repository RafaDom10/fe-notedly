import { useEffect } from 'react';
import { useMutation, useApolloClient, gql } from '@apollo/client';

import UserForm from '../../components/UserForm';

const SIGNUP_USER = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`;

export default function SignUp(props) {
  useEffect(() => {
    document.title = 'Sing Up | Notedly';
  }, []);

  const client = useApolloClient();

  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.signUp);
      client.writeQuery({ data: { isLoggedIn: true } });
      props.history.push('/');
    },
  });

  return (
    <>
      <UserForm action={signUp} formType="signup" />
    </>
  );
}
