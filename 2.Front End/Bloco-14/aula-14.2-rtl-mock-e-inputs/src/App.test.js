// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('Testa se aparece uma piada na tela', () => {
//   render(<App />);
//   const jokeElement = screen.getByText('What do you call two barracuda fish? A Pairacuda!');
//   expect(jokeElement).toBeInTheDocument();
// });

// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  global.fetch = jest.fn(async () => ({
    json: async () => joke
  }));

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});