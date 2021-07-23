import { useState } from 'react';
import { Wrapper, Form } from './styles';
import { Button } from '../Button';

export default function UserForm(props) {
  const [values, setValues] = useState();

  function handleInputChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.action({
      variables: {
        ...values,
      },
    });
  }

  return (
    <Wrapper>
      {props.formType === 'signup' ? <h2>Sign Up</h2> : <h2>Sign In</h2>}
      <Form
        onSubmit={handleSubmit}
      >
        {props.formType === 'signup' && (
          <>
            <label htmlFor="username">Username:</label>
            <input
              required
              type="text"
              id="username"
              name="username"
              placeholder="username"
              onChange={handleInputChange}
            />
          </>
        )}
        <label htmlFor="email">E-mail:</label>
        <input
          required
          type="mail"
          id="email"
          name="email"
          placeholder="email"
          onChange={handleInputChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          required
          type="password"
          id="password"
          name="password"
          placeholder="password"
          onChange={handleInputChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
}
