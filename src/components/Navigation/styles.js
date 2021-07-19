import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 1em;
  background: #F5F4F0;

  @media (max-width: 700px) {
    padding-top: 64px;
  }

  @media (min-width: 700px) {
    position: fixed;
    width: 220px;
    height: calc(100% - 64px);
    overflow-y: scroll;
  }
`;

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    color: #333;
  }

  a:visited {
    color: #333;
  }

  a:hover,
  a:focus {
    color: #0077CC;
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  li div {
    margin-left: 8px;
  }
`;
