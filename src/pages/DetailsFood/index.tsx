import React, { useEffect, useState } from 'react';

import { useRoute, useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import Header from '../../components/Header';

import {
  Container,
  ContainerCardInfo,
  AreaImage,
  ImageFood,
  AreaInfo,
  Title,
  Description,
  Price,
} from './styles';

interface ExtrasData {
  id: number;
  name: string;
  value: number;
}

interface DataFoods {
  id: number;
  name: string;
  description: string;
  thumbnail_url: string;
  image_url: string;
  price: number;
  extras: ExtrasData;
}

interface PropsData {
  idFood: number;
}

interface Props {
  params: PropsData;
}

const DetailsFood: React.FC = () => {
  const {
    params: { idFood },
  } = useRoute<Props>();

  const navigation = useNavigation();

  const [foods, setFoods] = useState<DataFoods>({} as DataFoods);

  async function requestFoods(): Promise<void> {
    const { data } = await api.get(`/foods/${JSON.stringify(idFood)}`);

    setFoods(data);
  }

  console.log(foods);

  useEffect(() => {
    requestFoods();
  }, []);

  return (
    <Container>
      <Header
        nameIcon="arrow-left"
        iconLeftExit
        iconRightExist={false}
        isBrand={false}
        title="Prato - Massas"
        functionOnPressIconLeft={() => {
          navigation.goBack();
        }}
      />
      <ContainerCardInfo>
        <AreaImage>
          <ImageFood source={{ uri: foods.image_url }} />
        </AreaImage>
        <AreaInfo>
          <Title>{foods.name}</Title>
          <Description>{foods.description}</Description>
          <Price>{foods.price}</Price>
        </AreaInfo>
      </ContainerCardInfo>
    </Container>
  );
};

export default DetailsFood;
