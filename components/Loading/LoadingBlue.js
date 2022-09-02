import React from "react";
import { View , ActivityIndicator , Text} from "react-native";

const LoadingBlue = ({ featured_title, featured_detail }) => {
  return (
    <View style={{ height: '100%' , width: '100%' , justifyContent: 'center' , alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#026487" />
        <Text style={{ fontSize: ' 18' , fontWeight: 'bold' , color: '#026487'}}>Loading</Text>
    </View>
  );
};
export default LoadingBlue;
