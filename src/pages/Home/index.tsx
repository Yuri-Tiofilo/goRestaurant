import React from 'react';

import { useNavigation } from '@react-navigation/native';
import Background from '../../assets/home-background.png';
import Logo from '../../assets/logo2.png';

import Button from '../../components/ButtonConfirmation';

import {
  Container,
  BackgroundImage,
  LogoRestaurant,
  TitleHome,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <BackgroundImage
      source={Background}
      imageStyle={{
        width: 320,
        height: 430,
      }}
    >
      <Container>
        <LogoRestaurant source={Logo} />
        <TitleHome>The real Italian experience.</TitleHome>
      </Container>
      <Button
        icon="log-in"
        isHome
        onPress={() => {
          navigation.navigate('Menu');
        }}
      >
        Enter the Restaurant
      </Button>
    </BackgroundImage>
  );
};

export default Home;
