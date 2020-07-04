import styled from 'styled-components/native';

export const Container = styled.View``;

export const ContainerList = styled.View`
  /* flex: 1; */
  width: 100%;
  position: absolute;
  padding: 8px;
  flex-direction: row;
  align-items: center;

  top: 110px;

  padding: 20px;
`;

export const ListFavorites = styled.View`
  width: 100%;
`;

export const CardFavorites = styled.View`
  height: 110px;
  width: 100%;
  border-radius: 10px;
  elevation: 5;
  flex-direction: row;
  background: #f0f0f5;
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

export const ImageOrder = styled.Image`
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
