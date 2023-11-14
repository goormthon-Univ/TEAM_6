import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
setupIonicReact();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <IonApp>
    <IonReactRouter>
      <App />
    </IonReactRouter>
  </IonApp>
);
