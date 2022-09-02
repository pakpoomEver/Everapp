import React from "react";
import { StyleSheet, View } from "react-native";
import Navigation from "./Navigation/Navigation";
import { AuthProvider } from "./Navigation/authUser";
const App = () => {
  console.disableYellowBox = true;
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
