import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/InputSearch';
import Header from '../../components/Header';

import api from '../../services/api';

import {
  Container,
  AreaFilter,
  ContainerScroll,
  ContainerCategory,
  Carrousel,
  CardCarrousel,
  TitleCard,
  ImageCard,
} from './styles';

interface DataCarrousel {
  id: number;
  title: string;
  image_url: string;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigation();
  const [isFocus, setIsFocus] = useState(false);
  const [categories, setCategories] = useState<DataCarrousel[] | []>([]);

  async function requestCategories(): Promise<void> {
    const response = await api.get('/categories');

    console.log(response.data);

    setCategories(response.data);

    // setCategories();
  }

  useEffect(() => {
    requestCategories();
  }, []);

  const [data, setData] = useState([
    {
      id: 1,
      title: 'Teste Yuir',
      image_url:
        'https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-gorestaurant-mobile/massas.png',
    },
  ]);

  return (
    <Container>
      <Header
        nameIcon="log-out"
        functionOnPress={() => {
          navigate.navigate('Home');
        }}
      />
      <AreaFilter>
        <Input placeholder="What food are you looking for?" />
      </AreaFilter>

      <ContainerScroll>
        <ContainerCategory>
          <Carrousel
            contentContainerStyle={{
              paddingHorizontal: 20,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((category) => (
              <CardCarrousel
                onPress={() => {
                  setIsFocus(!isFocus);
                }}
                // isFocus={category.id === isFocus}
                key={category.id}
              >
                <ImageCard source={{ uri: category.image_url }} />
                <TitleCard>{category.title}</TitleCard>
              </CardCarrousel>
            ))}
          </Carrousel>
        </ContainerCategory>
      </ContainerScroll>
    </Container>
  );
};

export default Dashboard;
