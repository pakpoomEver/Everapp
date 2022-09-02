import React, { useState, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import TabNavigation from "../Navigation/tabNavigation";
import { AuthContext } from "../Navigation/authUser";
export default function Navigation(props) {
  const { user, setUser } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {user ? <TabNavigation />  : <AuthStack /> }
    </NavigationContainer>
  );
}
