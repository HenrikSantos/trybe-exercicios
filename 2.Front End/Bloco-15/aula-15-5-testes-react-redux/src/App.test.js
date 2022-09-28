// src/App.test.js
import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }), initialState),
  } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should have a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');
    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
    userEvent.click(buttonAdicionar);
    expect(screen.getByTestId('counter')).toBeInTheDocument();
    expect(screen.getByTestId('counter').innerHTML).toBe('1');
  });
});

test('a click in a button should increment the value of clicks', () => {
  renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });

  expect(screen.getByText('5')).toBeInTheDocument();
});