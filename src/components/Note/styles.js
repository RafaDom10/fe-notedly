import styled from 'styled-components';

export const StyledNote = styled.article`
  max-width: 800px;
  margin: 0 auto;
`;

export const MetaData = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: top;
  }
`;

export const MetaInfo = styled.div`
  padding-right: 1em;
`;

export const UserActions = styled.div`
  margin-left: auto;
`;
