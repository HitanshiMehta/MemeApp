import React from "react";
import Counter from "./Counter";

// Component hierarchy(ShoppingApp->Counters->Counter)
class Counters extends React.Component {
  render() {
    const { onReset, onDelete, onIncrement, counters } = this.props;
    const counter = counters.map((counter) => (
      <Counter
        counter={counter}
        key={counter.id}
        onDelete={onDelete}
        onIncrement={onIncrement}
      />
    ));
    return (
      <>
        <button className="btn btn-primary m-2" onClick={onReset}>
          Reset
        </button>
        {counter}
      </>
    );
  }
}

export default Counters;
