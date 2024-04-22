// src/App.js
import React from 'react';
import UserList from '../src/UserList';
import UserForm from '../src/UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <UserForm />
      <UserList />
    </div>
  );
};

export default App;
