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
