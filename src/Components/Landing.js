import React from 'react';

export default class Landing extends React.Component {
  render() {
    if (process.env.NODE_ENV !== 'production') {
      console.log('👨‍🚀 Application properties:\n', this.props);
    }

    return (
      <div className="landing">
        <div className="outerspace">
          <span className="spacheman" role="img" aria-label="spaceman">
            👨‍🚀
          </span>
          <span className="rocket" role="img" aria-label="rocket">
            🚀
          </span>
        </div>
        <div>
          <h1>Welcome to Helpful Human's React template.</h1>
          <h2>Check the console for application properties.</h2>
        </div>
        <h3>Demo Redux store</h3>
        <br />
        <button onClick={this.props.subtractNumber}>Subtract</button>
        <button onClick={this.props.addNumber}>Add</button>
        <br />
        <br />
        <span>
          value: {this.props.number}
        </span>
      </div>
    );
  }
}
