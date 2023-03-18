import './App.css';
import React from 'react';
import Header from './components/nav/Header.js';
import ClaimForm from './claim-form.js';

export default function Claims() {
  return (
    <div>
      <Header />
      <ClaimForm />
    </div>
  )
}

