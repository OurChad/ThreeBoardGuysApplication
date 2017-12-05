import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AuthenticatedRoute from './components/auth/AuthenticatedRoute';
import SignInContainer from './components/auth/SignInContainer';
import SignOutPage from './components/auth/SignOutPage';
import './App.css';
import NavBar from './components/navigation/NavBar';

import data from './sample-data.json';
import BoardGamePage from './components/boardgame/BoardGamePage';
import BoardGameList from './components/boardgame/BoardGameList';

class App extends Component {

  setSession = (sessionState) => {
      this.setState({authenticatedSession: sessionState});
  };

  SignInContainer = (props) => {
      return <SignInContainer {...props} setSession={this.setSession} />
  };

  SignOutPage = (props) => {
      return <SignOutPage {...props} setSession={this.setSession} />
  };

  BoardGamePage = ({match}) => {
      return <BoardGamePage boardGameID={match.params.id} />;
  };

  BoardGameList = () => <BoardGameList boardGames={data.boardGames} />;
  ProfilePage = () => <h2>Profile Page</h2>;
  CalendarPage = () => <h2>Calendar Page</h2>;

  state = {
      authenticatedSession: false
  };

  render() {
    
    return (
      <Router>
        <div className="App">
          <NavBar authenticatedSession={this.state.authenticatedSession}/>
          <Route path="/signin" component={this.SignInContainer} />

          <AuthenticatedRoute path="/profile" component={this.ProfilePage} />
          <AuthenticatedRoute path="/boardgame/:id" component={this.BoardGamePage} />
          <AuthenticatedRoute path="/collection" component={this.BoardGameList} />
          <AuthenticatedRoute path="/calendar" component={this.CalendarPage} />
          <AuthenticatedRoute path="/signout" component={this.SignOutPage} />
        </div>
      </Router>
      
    );
  }
}

export default App;
