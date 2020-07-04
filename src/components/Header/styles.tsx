import styled from 'styled-components/native';
import FeatherIcons from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  /* position: absolute; */
  width: 100%;
  height: 170px;
  top: 0px;

  flex-direction: row;
  justify-content: space-between;

  align-items: center;

  padding: 20px;

  background: #c72828;
`;

export const AreaImage = styled.View`
  /* width: 100%; */
  height: 50px;
`;

export const ImageLogo = styled.Image``;

export const AreaIcon = styled.View``;

export const Icon = styled(FeatherIcons)`
  padding-right: 10px;
`;

export const AreaHeader = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const AreaTitle = styled.View`
  /* width: 100%; */
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;

  /* Branco */

  color: #ffffff;
`;
