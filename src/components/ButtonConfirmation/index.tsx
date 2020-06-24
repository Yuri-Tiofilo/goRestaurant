import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { Container, ButtonText, IconContainer } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  isHome: boolean;
  icon: string;
}
// rest pega todas as propriedade de RectButtonProperties
const Button: React.FC<ButtonProps> = ({ children, isHome, icon, ...rest }) => (
  <Container {...rest} isHome={isHome}>
    <ButtonText isHome={isHome}>{children}</ButtonText>

    <IconContainer isHome={isHome}>
      <Icon name={icon} size={24} color={isHome ? '#7A1818' : '#fff'} />
    </IconContainer>
  </Container>
);
export default Button;
