import React from 'react';

import Logo from '../../assets/logo-header.png';

import { Container, AreaImage, ImageLogo, AreaIcon, Icon } from './styles';

interface HeaderProps {
  nameIcon: string;
  functionOnPress(): void;
}

const Header: React.FC<HeaderProps> = ({ nameIcon, functionOnPress }) => {
  return (
    <Container>
      <AreaImage>
        <ImageLogo source={Logo} />
      </AreaImage>

      <AreaIcon>
        <Icon
          name={nameIcon}
          onPress={functionOnPress}
          size={20}
          color="#FFB84D"
        />
      </AreaIcon>
    </Container>
  );
};

export default Header;
