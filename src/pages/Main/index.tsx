import React from 'react';

import TextContainer from '../../components/TextContainer';

import { Container, Content, AnimationContainer } from './styles';

import logoNasa from '../../assets/logo-nasa.jpg';

const Main: React.FC = () => {
  const text = [
    'A NASA, Administração Nacional de Aeronáutica e Espaço (National Aeronautics and Space Administration), foi fundada em 1958, nos Estados Unidos, pelo então presidente norte-americano Dwight David Eisenhower. O órgão surgiu depois que o governo soviético lançou o primeiro satélite artifical do mundo, durante a Guerra Fria.',
    'A missão da NASA é "fomentar o futuro na pesquisa, descoberta e exploração espacial". Para isso, a entidade vem desenvolvendo, desde a sua fundação, programas e missões para monitorar e explorar o universo a partir de tecnologias que incluem robôs, telescópios, satélites, aeronaves e foguetes. Fazem parte da história da NASA o Programa Mercury, Programa Apollo, Programa Voyager e Missão Kepler.',
    'Atualmente, a NASA é liderada por Jim Bridenstine. Antes de ingressar na agência, Bridenstine serviu no Congresso dos EUA, bem como no Comitê de Serviços Armados e no Comitê de Ciência, Espaço e Tecnologia norte-americano.',
  ];

  return (
    <Container className="ContentPage">
      <Content>
        <AnimationContainer>
          <TextContainer text={text} />

          <div>
            <img src={logoNasa} alt="Logo da Nasa" />
          </div>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Main;
