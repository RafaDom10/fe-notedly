import { useState } from 'react';

import { Wrapper, Form, TextArea } from './styles';

import { Button } from '../Button';

export default function NoteForm(props) {
  const [values, setValues] = useState();

  function handleTextAreaOnChange(event) {
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
      <Form
        onSubmit={handleSubmit}
      >
        <TextArea
          required
          type="text"
          name="content"
          placeholder="Note content"
          onChange={handleTextAreaOnChange}
        />
        <Button type="submit">Save</Button>
      </Form>
    </Wrapper>
  );
}
