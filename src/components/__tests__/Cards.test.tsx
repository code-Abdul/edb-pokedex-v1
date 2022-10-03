import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { Cards } from '@/components/Cards';
import { SerializedPokemon } from '@/types';

describe('Cards', () => {
  it('should render list of pokemons', async () => {
    const data: SerializedPokemon[] = [
      {
        id: 1,
        name: 'Bulbasaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        stats: {
          HP: '45',
          Attack: '49',
          Defense: '49',
          'Sp. Attack': '65',
          'Sp. Defense': '65',
          Speed: '45',
        },
        type: ['Grass', 'Poison'],
      },
      {
        id: 2,
        name: 'Ivysaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
        stats: {
          HP: '60',
          Attack: '62',
          Defense: '63',
          'Sp. Attack': '80',
          'Sp. Defense': '80',
          Speed: '60',
        },
        type: ['Grass', 'Poison'],
      },
    ];

    const { container } = render(<Cards data={data} />);

    expect(container).toMatchSnapshot();

    expect(screen.getByTestId('pokemon-1-name')).toHaveTextContent('Bulbasaur');
  });
});
