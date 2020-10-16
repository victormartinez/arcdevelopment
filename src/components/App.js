import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import theme from './ui/Theme';
import Header from './ui/Header';
import Footer from './ui/Footer';
import LandingPage from './LandingPage';
import Services from './Services';
import CustomSoftware from './CustomSoftware';
import MobileApps from './MobileApps';
import Websites from './Websites';


function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <LandingPage {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />} 
          />
          <Route
            path="/services"
            render={props => <Services {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />} 
          />
           <Route
            path="/customsoftware"
            render={props => <CustomSoftware {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />} 
          />
          <Route
            path="/mobileapps"
            render={props => <MobileApps {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />} 
          />
          <Route 
            path="/websites" 
            render={props => <Websites {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />} 
          />
          <Route path="/revolution" component={() => <div>revolution</div>} />
          <Route path="/about" component={() => <div>about</div>} />
          <Route path="/contact" component={() => <div>contact</div>} />
        </Switch>
        <Footer value={value} setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
