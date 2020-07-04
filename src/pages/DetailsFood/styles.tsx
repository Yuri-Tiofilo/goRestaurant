import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
`;
export const ContainerCardInfo = styled.View`
  position: absolute;
  width: 327px;
  height: 366px;
  top: 120px;

  /* Card */

  background: #f0f0f5;
  border-radius: 8px;
`;
export const AreaImage = styled.View`
  width: 100%;
  height: 183.94px;
`;

export const ImageFood = styled.Image`
  height: 183.94px;
`;

export const AreaInfo = styled.View`
  padding: 20px;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-family: 'Poppins-Bold';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;

  color: #3d3d4d;
`;
export const Description = styled.Text`
  width: 279px;
  height: 50px;

  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 25px;
  margin-top: 10px;
`;
export const Price = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  color: #6c6c80;

  margin-top: 15px;
`;
