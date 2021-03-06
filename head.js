'use strict';

const e = React.createElement;

class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.cliked) {
      return 'You clicked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ cliked: true }) },
      'Click'
    );
  }
}

const domContainer = document.querySelector('#head_container');
ReactDOM.render(e(Head), domContainer);
