import React from 'react';

import { View } from 'react-native';
import Logo from '../../assets/logo-header.png';

import {
  Container,
  AreaImage,
  ImageLogo,
  AreaIcon,
  Icon,
  AreaTitle,
  Title,
  AreaHeader,
} from './styles';

interface HeaderProps {
  nameIcon: string;
  functionOnPress?: any;
  functionOnPressIconLeft?: any;
  functionOnPressIconRight?: any;
  isBrand: boolean;
  title?: string;
  iconLeftExit?: boolean;
  iconRightExist?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  nameIcon,
  functionOnPress,
  isBrand,
  title,
  iconLeftExit,
  iconRightExist,
  functionOnPressIconLeft,
  functionOnPressIconRight,
}) => {
  return (
    <Container>
      {isBrand ? (
        <>
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
        </>
      ) : (
        <AreaHeader>
          {iconLeftExit && (
            <AreaIcon>
              <Icon
                name={nameIcon}
                onPress={functionOnPressIconLeft}
                size={20}
                color="#FFB84D"
              />
            </AreaIcon>
          )}

          <AreaTitle>
            <Title>{title}</Title>
          </AreaTitle>

          {iconRightExist ? (
            <AreaIcon>
              <Icon
                name={nameIcon}
                onPress={functionOnPressIconRight}
                size={20}
                color="#FFB84D"
              />
            </AreaIcon>
          ) : (
            <View style={{ width: 30, height: 30 }} />
          )}
        </AreaHeader>
      )}
    </Container>
  );
};

export default Header;
