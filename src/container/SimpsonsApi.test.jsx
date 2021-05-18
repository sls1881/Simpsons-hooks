import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import SimpsonsApi from './SimpsonsApi';

const server = setupServer(
  rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (res, req, ctx) => {
    return res(
      ctx.json([
        {
          quote: 'Thank you. Come again.',
          character: 'Apu Nahasapeemapetilon',
          image:
            'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629',
          characterDirection: 'Left',
        },
      ])
    );
  })
);
describe('Simpsons quotes', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.listen());

  it('render a Simpsons character and quote', () => {
    render(<SimpsonsApi />);
    screen.getByAltText('spinner');
    const button = screen.getByRole('button', { name: 'fetch-button' });
    userEvent.click(button);
  });
});
