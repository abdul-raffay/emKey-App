import { Navigation } from "react-native-navigation";
import App from "./App";

Navigation.registerComponent('app', () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: 
            {
              name: 'app',
              options: 
              {
                topBar: 
                {
                    visible: false
                }
              }
            }
          }
        ]
      }
    }
  });
});
