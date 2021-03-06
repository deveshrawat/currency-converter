import React from "react";
import { Provider } from "react-redux";
import EStyleSheet from "react-native-extended-stylesheet";
import Navigator from "./config/routes";
import store from "./config/store";
import { AlertProvider } from "./components/Alert";

EStyleSheet.build({
  $primaryBlue: "#4f6d7a",
  $primaryOrange: "#D57A66",
  $primaryGreen: "#00BD9D",
  $primaryPurple: "#9E768F",
  $white: "#ffffff",
  $border: "#e2e2e2e2",
  $inputText: "#797979",
  $lightGray: "#f0f0f0",
  $darkText: "#343434"
  // $outline: 1
});

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigator onNavigationStateChange={null} />
    </AlertProvider>
  </Provider>
);
