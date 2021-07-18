import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Notedly Logo" height="40" />
      <h1>Notedly</h1>
    </header>
  );
}
