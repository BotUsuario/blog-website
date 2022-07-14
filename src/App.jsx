import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog'

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
      </Switch>
    </div>
  );
}

export default App;
