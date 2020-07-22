import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/homepage/Homepage";
import { Switch, Route, Redirect } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignIn from "./pages/sign-in/SignIn";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import Checkout from "./pages/checkout/Checkout";

function App({ setCurrentUser, currentUser }) {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      }

      setCurrentUser(user);
    });
    return unsubscribeFromAuth;
  }, [setCurrentUser]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignIn />)}
        />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
