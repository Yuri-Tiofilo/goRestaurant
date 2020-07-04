import React, { useState, useEffect } from 'react';
// import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

import api from '../../services/api';

import {
  Container,
  AreaImage,
  AreaInfo,
  CardFavorites,
  ContainerList,
  Descripition,
  ImageOrder,
  ListFavorites,
  Price,
  Title,
} from './styles';

interface DataFavorites {
  id: number;
  name: string;
  description: string;
  price: string;
  thumbnail_url: string;
}

const Favorites: React.FC = () => {
  const { navigate } = useNavigation();
  const [state, setState] = useState<DataFavorites[]>([]);

  async function requestFavorites(): Promise<void> {
    const response = await api.get('/favorites');

    setState(response.data);
  }

  useEffect(() => {
    requestFavorites();
  }, []);

  return (
    <Container>
      <Header
        nameIcon="arrow-left"
        iconLeftExit
        iconRightExist={false}
        isBrand={false}
        title="Meus favoritos"
        functionOnPressIconLeft={() => {
          navigate('Orders');
        }}
      />
      <ContainerList>
        <ListFavorites>
          {state.map((element) => (
            <CardFavorites key={element.id}>
              <AreaImage>
                <ImageOrder source={{ uri: element.thumbnail_url }} />
              </AreaImage>
              <AreaInfo>
                <Title>{element.name}</Title>
                <Descripition>{element.description}</Descripition>
                <Price>{element.price}</Price>
              </AreaInfo>
            </CardFavorites>
          ))}
        </ListFavorites>
      </ContainerList>
    </Container>
  );
};

export default Favorites;
