import React from "react";
import { Route, Redirect } from "react-router-dom";
import {
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  useIonRouter,
} from "@ionic/react";
import "./App.css";
import { CollectionIcon } from "./assets/bottomnavbar/CollectionIcon";
import { MainIcon } from "./assets/bottomnavbar/MainIcon";
import { UserIcon } from "./assets/bottomnavbar/UserIcon";
import CollectionPage from "./pages/CollectionPage";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const router = useIonRouter();

  const isSelected = (path: string): boolean => {
    return router.routeInfo.pathname === path;
  };

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/collection" component={CollectionPage} exact />
        <Route path="/main" component={MainPage} exact />
        <Route path="/profile" component={ProfilePage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/signup" component={SignupPage} exact />
        <Route path="/" render={() => <Redirect to="/main" />} exact />
      </IonRouterOutlet>
      // 로그인 및 회원가입 페이지에 있을 때 네브바 안보이도록 설정
      {isSelected("/login") || isSelected("/signup") ? (
        <IonTabBar></IonTabBar>
      ) : (
        <IonTabBar slot="bottom">
          <IonTabButton tab="collection" href="/collection">
            <CollectionIcon isSelected={isSelected("/collection")} />
            <IonLabel>컬렉션</IonLabel>
          </IonTabButton>
          <IonTabButton tab="main" href="/main">
            <MainIcon isSelected={isSelected("/main")} />
            <IonLabel>메인</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profile" href="/profile">
            <UserIcon isSelected={isSelected("/profile")} />
            <IonLabel>마이</IonLabel>
          </IonTabButton>
        </IonTabBar>
      )}
    </IonTabs>
  );
}

export default App;
