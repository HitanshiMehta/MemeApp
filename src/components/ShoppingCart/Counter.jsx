import React from "react";

// Component hierarchy(ShoppingApp->Counters->Counter)
class Counter extends React.Component {
  onIncrement = () => {
    // onIncrement send to parent class(Counters->ShoppingApp)
    this.props.onIncrement(this.props.counter);
  };
  onDelete = () => {
    // onDelete send to parent class(Counters-<ShoppingApp)
    this.props.onDelete(this.props.counter.id);
  };
  render() {
    
    return (
      <>
        <h3>
          {/* decide badgeclass and format of count based on number of items */}
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            onClick={this.onIncrement}
            className="btn btn-secondary btn-lg"
          >
            +
          </button>
          <button className="btn btn-danger btn-lg m-2" onClick={this.onDelete}>
            -
          </button>
        </h3>
      </>
    );
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "primary" : "warning";
    return classes;
  }
}

export default Counter;
