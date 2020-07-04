import styled, { css } from 'styled-components/native';

interface CardProps {
  isFocus?: boolean;
}

export const Container = styled.View`
  flex: 1;

  background: #fff;
  flex-direction: column;
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

export const AreaTitleFoods = styled.View`
  width: 100%;
  padding: 10px;
`;

export const TitleFoods = styled.Text`
  font-family: 'Poppins-Bold';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;

  color: #3d3d4d;
`;

export const AreaFoods = styled.View`
  height: 45%;
  padding: 10px;
  width: 100%;
`;

export const ContainerScrollFoods = styled.ScrollView``;

export const CardFoods = styled.TouchableOpacity`
  height: 110px;
  width: 100%;
  border-radius: 10px;
  flex-direction: row;
  background: #f0f0f5;
  margin-bottom: 10px;
`;
export const AreaImage = styled.View`
  height: 110px;
  width: 110px;
  background: #ffb84d;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  justify-content: center;
  align-items: center;
`;

export const AreaInfo = styled.View`
  padding: 10px;
  justify-content: space-around;
`;

export const ImageFoods = styled.Image`
  width: 85px;
  height: 85px;
`;

export const Title = styled.Text`
  width: 150px;

  font-family: 'Poppins-Bold';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;

  color: #3d3d4d;
`;

export const Descripition = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  width: 245px;
`;

export const Price = styled.Text`
  font-family: 'Poppins-Bold';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #39b100;
`;
