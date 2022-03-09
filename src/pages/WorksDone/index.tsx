import React from 'react';
import TextContainer from '../../components/TextContainer';

import { Container, Content, AnimationContainer } from './styles';

const WorksDone: React.FC = () => {
  const firstMissions = [
    `Mas não foi tão simples levar o homem à Lua. Antes disso, a NASA iniciou suas missões com o Programa Mercury. Com início em 1959, durante o programa, que durou até 1963, foram feitos seis lançamentos. Os primeiros testes, não tripulados, permitiram que logo a NASA fizesse voos com macacos. Com o sucesso das missões, a Mercury fez o primeiro lançamento com astronautas, o que aconteceu no dia 20 de fevereiro de 1962.`,

    `Na época, a NASA também criou o Programa Gemini, que tinha 10 equipes e se manteve ativo entre 1961 e 1966. As 12 missões do programa tiveram como foco preparar a tecnologia necessária para levar o homem à Lua. Foi na época do Gemini que os Estados Unidos alcançaram a liderança contra a União Soviética na exploração espacial.`,
  ];

  const oneSmallStepForMan = [
    'Depois de muitos testes e estudos, a NASA deu início ao Programa Apollo, o mais famoso de sua história. O projeto foi inaugurado em 1961, quando o presidente John F. Kennedy anunciou que os Estados Unidos levariam o primeiro homem a pisar na Lua até o final da década. Durante oito anos, as missões foram mais tímidas para garantir que a façanha fosse finalizada com sucesso, até que em 1969 Neil Armstrong alcançou a proeza.',

    'O Programa Apollo continuou em operação. Após o sucesso de 1969, mais cinco missões foram destinadas à Lua. A última missão, Apollo 17, levou os últimos seres humanos para o satélite natural da Terra: Eugene Cernan, Ronald Evans e Harrison Schmitt, no ano de 1972. Apenas um ano depois, os Estados Unidos colocou em órbita sua primeira estação espacial.',
  ];

  return (
    <Container className="ContentPage">
      <Content>
        <AnimationContainer>
          {/* <h2>Primeiras missões</h2>
          <br />
          <TextContainer text={firstMissions} />
          <img src={mercuryAstronauts} alt="Primeira missão" />
          <h2>
            {'"Um pequeno passo para um homem, um salto gigantesco para a' +
              'humanidade"'}
          </h2>
          <br />
          <TextContainer text={oneSmallStepForMan} />
          <img src={astronautsApollo11} alt="Astronautas da missão Apollo 11" /> */}
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default WorksDone;
