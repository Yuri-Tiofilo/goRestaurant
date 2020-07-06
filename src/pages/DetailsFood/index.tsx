import React, { useEffect, useState } from 'react';

import { useRoute, useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

import api from '../../services/api';
import Header from '../../components/Header';
import Button from '../../components/ButtonConfirmation';

import {
  Container,
  ContainerCardInfo,
  AreaImage,
  ImageFood,
  AreaInfo,
  Title,
  Description,
  Price,
  ContainerListAdditional,
  ListAdditionals,
  CardAdditionals,
  TitleCard,
  Quantity,
  ButtonAddRemove,
  TitleList,
  AreaQuantity,
  ContainerFinalizeOrder,
  PriceOrder,
  AreaPrice,
  AreaQuantityOrder,
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
  extras: Array<ExtrasData>;
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
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1, alignItems: 'center' }}
      >
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

        {foods.extras !== undefined ? (
          <ContainerListAdditional>
            <TitleList>Adicionais</TitleList>
            <ListAdditionals>
              {foods.extras.map((element) => (
                <CardAdditionals key={element.id}>
                  <TitleCard>{element.name}</TitleCard>
                  <AreaQuantity>
                    <ButtonAddRemove name="minus" />
                    <Quantity>0</Quantity>
                    <ButtonAddRemove name="plus" />
                  </AreaQuantity>
                </CardAdditionals>
              ))}
            </ListAdditionals>
          </ContainerListAdditional>
        ) : null}

        <ContainerFinalizeOrder>
          <TitleList>Total do pedido</TitleList>
          <AreaPrice>
            <PriceOrder>45</PriceOrder>

            <AreaQuantityOrder>
              <AreaQuantity>
                <ButtonAddRemove name="minus" />
                <Quantity>0</Quantity>
                <ButtonAddRemove name="plus" />
              </AreaQuantity>
            </AreaQuantityOrder>
          </AreaPrice>
          <Button isHome={false} icon="check-square">
            Confirmar pedido
          </Button>
        </ContainerFinalizeOrder>
      </ScrollView>
    </Container>
  );
};

export default DetailsFood;
