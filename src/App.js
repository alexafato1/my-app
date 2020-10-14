import React,{useState, useEffect} from 'react';
import Home from './Home'
import Main from './Main'
import { I18nProvider, LOCALES } from './i18n'
import {FormattedMessage} from 'react-intl';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [locale, setLocale] = useState()

  return (
    <I18nProvider locale={locale}>
      <Router>
      <Switch>

      <Route path="/">
      <Home />
      </Route>

      <Route path="/main">
      <Main/>
       </Route>

      </Switch>
      </Router>
     </I18nProvider>
   
  );
}

export default App;
