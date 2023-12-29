import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavigationProvider } from './components/NavigationContext';
import Navigation from './components/Navigation';
// import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import RequireAuth from './components/RequireAuth';
import Test from './components/Test';

const App = () => (
  <NavigationProvider>
    <div className="container-fluid main-height ">
      <div className="">
        <Navigation />
        <main className="col">
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
                  <Test />
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
