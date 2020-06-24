import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
  isHome: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
  background: #39b100;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isHome &&
    css`
      background: #ffb84d;
    `}
`;

export const ButtonText = styled.Text<ContainerProps>`
  font-family: 'Poppins-Bold';
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  color: #fff;
  flex: 1;
  text-align: center;

  ${(props) =>
    props.isHome &&
    css`
      color: #7a1818;
    `}
`;

export const IconContainer = styled.View<ContainerProps>`
  background-color: #41c900;
  padding: 16px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  ${(props) =>
    props.isHome &&
    css`
      background: #ffc46b;
    `}
`;
