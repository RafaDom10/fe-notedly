import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid #F5F4F0;
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;
`;

export const Form = styled.form`
  label,
  input {
    display: block;
    line-height: 2em;
  }

  input {
    width: 100%;
    margin-bottom: 1em;
    padding-left: 8px;
  }

  button {
    width: 100%;
    height: 40px;
    margin-top: 1em;
    cursor: pointer;
    transition: 0.2s ease-in;
    background: #F5F4F0;
    border: none;

    :hover {
      background: #0077CC;
      color: #FFF;
    }
  }
`;
