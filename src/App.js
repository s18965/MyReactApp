import React from 'react';
import Header from './components/fragments/Header';
import Navigation from './components/fragments/Navigation';
import MainContent from './components/other/MainContent';
import Footer from './components/fragments/Footer'
import PlayerList from './components/player/PlayersList'
import CoachesList from './components/coach/CoachesList'
import MatchesList from './components/match/MatchesList'
import PlayerDetails from './components/player/PlayerDetails'
import CoachDetails from './components/coach/CoachDetails'
import MatchDetails from './components/match/MatchDetails'
import PlayerForm from './components/player/PlayerForm'
import CoachForm from './components/coach/CoachForm'
import MatchForm from './components/match/MatchForm'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

function App() {
  return (
      <Router>
          <div>
              <Header />
              <Navigation />
              <Switch>
                  <Route exact path="/" component={MainContent} />
                  <Route exact path="/players" component={PlayerList} />
                  <Route exact path="/coaches" component={CoachesList} />
                  <Route exact path="/matches" component={MatchesList} />
                  <Route exact path="/players/details/:playerId" component={PlayerDetails} />
                  <Route exact path="/coaches/details/:coachId" component={CoachDetails} />
                  <Route exact path="/matches/details/:matchId" component={MatchDetails} />
                  <Route exact path="/players/add" component={PlayerForm} />
                  <Route exact path="/coaches/add" component={CoachForm} />
                  <Route exact path="/matches/add" component={MatchForm} />
                  <Route exact path="/players/edit/:playerId" component={PlayerForm} />
                  <Route exact path="/coaches/edit/:coachId" component={CoachForm} />
                  <Route exact path="/matches/edit/:matchId" component={MatchForm} />
              </Switch>
              <Footer />
          </div>
      </Router>
  );
}

export default App;