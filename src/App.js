import './components/style.css'
import {Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/home/Home';
import PhotosPage from './pages/photos/Photos';
import PostsPage from './pages/posts/PostsPage';
import ContactsPage from './pages/contacts/Contacts';

function App() {
  return (
    <div className="App">
      <header className = "header flex">
        <Nav/>
      </header>
      <main className = "main">
        <Switch>
          <Route path = '/adv-hw-21-OlehMykolaichuk/' exact component = {HomePage}/>
          <Route path = '/adv-hw-21-OlehMykolaichuk/posts' component = {PostsPage}/>
          <Route path = '/adv-hw-21-OlehMykolaichuk/photos' component = {PhotosPage}/>
          <Route path = '/adv-hw-21-OlehMykolaichuk/contacts' component = {ContactsPage}/>
          <Route path = '*'>
            <p className = "error flex">404: page not found</p>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
