import { useEffect, useState } from 'react';

import { Wrapper, Form } from './styles';

export default function SignUp(props) {
  const [values, setValues] = useState();

  function handleInputChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(values);
  }

  useEffect(() => {
    document.title = 'Sing Up | Notedly';
  }, []);

  return (
    <Wrapper>
      <h2>Sign Up</h2>
      <Form
        onSubmit={handleSubmit}
      >
        <label htmlFor="username">Username:</label>
        <input
          required
          type="text"
          id="username"
          name="username"
          placeholder="username"
          onChange={handleInputChange}
        />

        <label htmlFor="email">E-mail:</label>
        <input
          required
          type="text"
          id="email"
          name="email"
          placeholder="email"
          onChange={handleInputChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          required
          type="text"
          id="password"
          name="password"
          placeholder="password"
          onChange={handleInputChange}
        />
        <button type="submit">Log in</button>
      </Form>
    </Wrapper>
  );
}
