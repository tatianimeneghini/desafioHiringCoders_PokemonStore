import React, { useEffect, useState } from 'react';
import { store } from 'react-notifications-component';
import api from '../../api/api';
import capitalizeLetter from './../../util/capitalize'
import './style.css';
import {
  Card, Container, Row, Col, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const unknownSprite = 'https://images.vexels.com/media/users/3/155301/isolated/preview/6a91c0d6c8ba37a9fd115e1776300319-pergunta-do-doodle-do-ponto-de-interroga----o-3d-by-vexels.png';

export default function PokeCard({ pokemon, addToCart }) {
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [pokemonSprite, setPokemonSprite] = useState('');

  useEffect(() => {
    async function loadPokemon() {
      const response = await api.get(pokemon.url);
      setCurrentPokemon(response.data);

      if (response.data.sprites.front_default != null)
        setPokemonSprite(response.data.sprites.front_default);
      else
        setPokemonSprite(unknownSprite);
    }
    loadPokemon();
  }, [pokemon])

  return (
    <>
    <Container className='container' fluid={true}>
      <Row>
        <Col >   
        <Card className="mx-auto my-3">
          <img className='poke_card_image' width="50%" src={pokemonSprite} alt={currentPokemon.name} rounded  />
          <CardBody>
            <CardTitle><p>Nome: {capitalizeLetter(currentPokemon.name)}</p></CardTitle>

            <CardSubtitle>
              <p>
                Valor: R$ {parseFloat((currentPokemon.weight + currentPokemon.height + currentPokemon.base_experience) / 3).toFixed(2)}
              </p>
            </CardSubtitle>

            <CardSubtitle>
              <p>Peso: {currentPokemon.weight}</p>
            </CardSubtitle>

            <CardSubtitle>
              <p>Altura: {currentPokemon.height}</p>
            </CardSubtitle>
              
            <Button onClick={() => {
              store.addNotification({
                title: 'Adicionado ao carrinho',
                insert: 'bottom',
                type: 'info',
                message: currentPokemon.name,
                container: 'bottom-right',
                dismiss: {
                  duration: 1500,
                  onScreen: true
                }
              });
              return addToCart(currentPokemon)
              }
            }
              >Comprar {capitalizeLetter(currentPokemon.name)}</Button>
          </CardBody>
        </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}