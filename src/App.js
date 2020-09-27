import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import SharePage from './pages/Share';
import CodePage from './pages/Code';

function App() {
  return (
    <Router>
      <div className="text-gray-700 body-font">
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/share">
            <SharePage />
          </Route>
          <Route path="/:hash">
            <CodePage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
