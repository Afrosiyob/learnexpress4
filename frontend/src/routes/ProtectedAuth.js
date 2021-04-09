import { Redirect, Route } from "react-router";

export const ProtectedAuth = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={(props) =>
        !token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/main",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
