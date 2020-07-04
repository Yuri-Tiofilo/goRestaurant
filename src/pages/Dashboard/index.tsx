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
  AreaTitleFoods,
  TitleFoods,
  AreaFoods,
  CardFoods,
  ContainerScrollFoods,
  AreaImage,
  AreaInfo,
  Descripition,
  ImageFoods,
  Price,
  Title,
} from './styles';

interface DataCarrousel {
  id: number;
  title: string;
  image_url: string;
}

interface DataFoods {
  id: number;
  name: string;
  description: string;
  thumbnail_url: string;
  price: number;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigation();
  const [isFocus, setIsFocus] = useState(false);
  const [categories, setCategories] = useState<DataCarrousel[]>([]);
  const [foods, setFoods] = useState<DataFoods[]>([]);

  async function requestCategories(): Promise<void> {
    const response = await api.get('/categories');

    setCategories(response.data);
  }

  async function requestFoods(): Promise<void> {
    const { data } = await api.get('/foods');

    setFoods(data);
  }

  console.log(foods);

  useEffect(() => {
    requestCategories();
  }, []);

  useEffect(() => {
    requestFoods();
  }, []);

  function handleMoreDetailsFoods(dataParams: DataFoods): void {
    navigate.navigate('DetailsFood', {
      idFood: dataParams.id,
    });
  }

  return (
    <Container>
      <Header
        nameIcon="log-out"
        isBrand
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
            {categories.map((category: DataCarrousel) => (
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
      <AreaTitleFoods>
        <TitleFoods>Pratos</TitleFoods>
      </AreaTitleFoods>
      <AreaFoods>
        <ContainerScrollFoods showsVerticalScrollIndicator={false}>
          {foods.map((food) => (
            <CardFoods
              onPress={() => {
                handleMoreDetailsFoods(food);
              }}
            >
              <AreaImage>
                <ImageFoods source={{ uri: food.thumbnail_url }} />
              </AreaImage>
              <AreaInfo>
                <Title>{food.name}</Title>
                <Descripition>{food.description}</Descripition>
                <Price>{food.price}</Price>
              </AreaInfo>
            </CardFoods>
          ))}
        </ContainerScrollFoods>
      </AreaFoods>
    </Container>
  );
};

export default Dashboard;
