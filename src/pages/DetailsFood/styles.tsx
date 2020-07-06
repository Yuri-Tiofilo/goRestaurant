import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

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
export const ContainerListAdditional = styled.View`
  width: 100%;
  top: 340px;

  height: 150px;
`;

export const ListAdditionals = styled.ScrollView`
  padding: 20px;
`;

export const CardAdditionals = styled.View`
  width: 100%;

  height: 45px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  /* Card */

  background: #f0f0f5;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const AreaQuantity = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`;

export const TitleCard = styled.Text`
  margin-left: 10px;
`;

export const Quantity = styled.Text`
  padding: 10px;
`;

export const ButtonAddRemove = styled(Icon)`
  font-size: 20px;
`;

export const TitleList = styled.Text`
  font-family: 'Poppins-Bold';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;

  padding-left: 20px;

  color: #3d3d4d;
`;

export const ContainerFinalizeOrder = styled.View`
  height: 600px;
  width: 100%;

  top: 350px;
  padding: 10px;
`;

export const AreaPrice = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const AreaQuantityOrder = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 40px;
  background: #f0f0f5;
  border-radius: 5px;
`;

export const PriceOrder = styled.Text`
  margin-left: 20px;

  font-family: 'Poppins-Bold';
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  /* Positivo */

  color: #39b100;
`;
