import React from "react";

const MyComponent = ({ children }) => {
  const childElement = React.Children.only(children);
  return <div className="wrapper">{childElement}</div>;
};

const App = () => {
  return (
    <MyComponent>
      <p>Hello, World!</p>
      {/* <p>Hello, World!</p> */}
      {/*  uncomment above thing and see */}
    </MyComponent>
  );
};

export default App;
