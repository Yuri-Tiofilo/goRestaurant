import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #f0f0f5;
  border-radius: 10px;
  border-width: 2px;
  border-color: #f0f0f5;
  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #c72828;
      color: #c72828;
    `}
`;

export const InputText = styled.TextInput`
  flex: 1;
  color: #6c6c80;
  font-size: 16px;
  font-family: 'Poppins-Regular';
`;

export const AreaIcon = styled.View`
  margin-right: 16px;
`;
