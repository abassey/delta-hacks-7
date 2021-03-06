'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      student: false,
      mentor: false
     };
  }

  render() {
    if (this.state.student) {
      return 'hello student.';
    }

    if (this.state.mentor) {
      return 'welcome mentor.';
    }

    return (
      <div>
        <button onClick={this.setState({ student: true })}>Student</button>
        <button onClick={this.setState({ mentor: true })}>Mentor</button>
      </div>
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);