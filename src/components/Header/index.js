import { HeaderBar, LogoText } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <HeaderBar>
      <img src={logo} alt="Notedly Logo" height="40" />
      <LogoText>Notedly</LogoText>
    </HeaderBar>
  );
}
