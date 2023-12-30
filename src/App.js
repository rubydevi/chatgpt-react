import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavigationProvider } from './components/NavigationContext';
import Navigation from './components/Navigation';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import RequireAuth from './components/RequireAuth';
import Conversation from './components/Conversation';

const App = () => (
  <NavigationProvider>
    <div className="container-fluid main-height ">
      <div className="row">
        <Navigation />
        <main className="col p-0">
          <Routes>
            <Route
              path="/login"
              element={(
                <Login />
              )}
            />
            <Route
              path="/register"
              element={(
                <Register />
              )}
            />
            <Route element={<RequireAuth />}>
              <Route
                exact
                path="/"
                element={(
                  <Conversation />
                )}
              />
            </Route>
          </Routes>
        </main>
      </div>
    </div>
  </NavigationProvider>
);

export default App;
