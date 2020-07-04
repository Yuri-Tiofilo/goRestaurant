import React, { useState, useEffect } from 'react';
// import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

import api from '../../services/api';

import {
  Container,
  ContainerList,
  ListOrders,
  CardOrders,
  ImageOrder,
  AreaImage,
  TitleOrder,
  Descripition,
  Price,
  AreaInfo,
} from './styles';

interface Orders {
  id: number;
  name: string;
  description: string;
  price: number;
  thumbnail_url: string;
}

const Orders: React.FC = () => {
  const navigate = useNavigation();
  const [state, setState] = useState<Orders[]>([
    {
      id: 1,
      name: 'Yuri',
      description: 'hdjshghddfhvdsfhvdsv',
      price: 12.0,
      thumbnail_url:
        'https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-gorestaurant-mobile/ao_molho.png',
    },
  ]);

  async function requestOrders(): Promise<void> {
    const response = await api.get('/orders');

    setState(response.data);
  }

  useEffect(() => {
    requestOrders();
  }, []);

  return (
    <Container>
      <Header
        nameIcon="arrow-left"
        iconLeftExit
        iconRightExist={false}
        isBrand={false}
        title="Meus pedidos"
        functionOnPressIconLeft={() => {
          navigate.navigate('Dashboard');
        }}
      />

      <ContainerList>
        <ListOrders>
          {state.map((element) => (
            <CardOrders key={element.id}>
              <AreaImage>
                <ImageOrder source={{ uri: element.thumbnail_url }} />
              </AreaImage>
              <AreaInfo>
                <TitleOrder>{element.name}</TitleOrder>
                <Descripition>{element.description}</Descripition>
                <Price>{element.price}</Price>
              </AreaInfo>
            </CardOrders>
          ))}
        </ListOrders>
      </ContainerList>
    </Container>
  );
};

export default Orders;
