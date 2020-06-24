import styled, { css } from 'styled-components/native';

interface CardProps {
  isFocus?: boolean;
}

export const Container = styled.View`
  flex: 1;

  background: #fff;
`;
export const AreaFilter = styled.View`
  position: absolute;
  width: 100%;
  height: 60px;
  padding: 8px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;

  top: 140px;
`;
export const ContainerScroll = styled.ScrollView``;

export const ContainerCategory = styled.View`
  margin-top: 40px;
`;

export const Carrousel = styled.ScrollView`
  margin-top: 16px;
`;

export const CardCarrousel = styled.TouchableOpacity<CardProps>`
  background-color: #f0f0f5;
  border: 2px;
  border-color: #f0f0f5;
  height: 120px;
  width: 120px;
  border-radius: 8px;
  padding-top: 20px;
  padding-bottom: 16px;
  margin-right: 8px;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  ${(props) =>
    props.isFocus &&
    css`
      border-color: #c72828;
      background-color: #ffebeb;
    `}
`;

export const TitleCard = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;

  text-align: center;

  color: #6c6c80;
`;

export const ImageCard = styled.Image`
  width: 56px;
  height: 56px;
`;
