import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
import { ResumeProvider } from 'context/resume';

import Cart from 'pages/Cart';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
      location: {
        pathname: '/cart'
      }
    }),
  }
});

describe('Cart Page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('should be able to go to payment page', async () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <Route component={Cart} />
      </Router>, {
        wrapper: ResumeProvider
      }
    );

    await waitFor(() => {
      const buttonElement = getByText('SEGUIR PARA O PAGAMENTO');

      fireEvent.click(buttonElement);

      expect(mockedHistoryPush).toHaveBeenCalledWith('/payment');
    });
  });
});
