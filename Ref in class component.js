import React from "react";

class EncouragementForm extends React.Component {
  handleSubmit = (e) => {
    alert(this.input.value);
    e.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Send an Encouraging Message:
          <input type="text" ref={(input) => (this.input = input)} />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

const App = () => {
  return <EncouragementForm />;
};

export default App;
