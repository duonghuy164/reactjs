import React from 'react';
import Routes from "./routes";
import {AuthProvider} from "./contexts/authContext";
export default function App() {
  return (
      <AuthProvider>

        <Routes></Routes>

      </AuthProvider>
  );
}
