import { render} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import App from '../App';
import { Router } from 'react-router-dom';

test('renders login', () => {
  const history = createMemoryHistory()
  const route = '/login'
  history.push(route)
  render(
    <Router history={history}>
      <App />
    </Router>
  )
});