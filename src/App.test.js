import { render,screen} from '@testing-library/react';
import App from './App';
import Home from './Components/Home/Home';

test(<h1>Explore</h1>, () =>{
  render(<Home />)
})

