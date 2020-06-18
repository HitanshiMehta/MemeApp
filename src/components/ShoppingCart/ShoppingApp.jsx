import React from "react";
import Counters from "./Counters.jsx";
import NavBar from "./NavBar.jsx";

// Component hierarchy(ShoppingApp->NavBar And Counters->Counter)
class ShoppingApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 0, value: 0 },
        { id: 1, value: 1 },
        { id: 2, value: 0 },
        { id: 3, value: 3 },
      ],
    };
  }
  // Reset all counter to 0
  handleRest = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters,
    });
  };
  // Filter and delete counter
  handleDelete = (id) => {
    this.setState({
      counters: this.state.counters.filter((c) => c.id !== id),
    });
  };

  handleIncrement = (counter) => {
    // All counter
    const counters = [...this.state.counters];
    // Find index of current counter
    const index = counters.indexOf(counter);
    // Increase current counter's value by 1
    counters[index].value++;
    // setState counters
    this.setState({
      counters,
    });
  };
  render() {
    return (
      <>
        <NavBar
          totalItem={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleRest}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </>
    );
  }
}

export default ShoppingApp;
