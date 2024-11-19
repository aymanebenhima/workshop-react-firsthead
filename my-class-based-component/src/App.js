import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'John Doe',
      bio: 'I am a software engineer with a passion for building user-friendly applications.',
      imgSrc: 'https://via.placeholder.com/150',
      profession: 'Software Engineer'
    },
    shows: false,
    mountedTime: 0
  };

  // Timer reference
  timer = null;

  // Lifecycle method to start the timer
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1
      }));
    }, 1000);
  }

  // Lifecycle method to clean up the timer
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // Method to toggle the visibility of the profile
  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  };

  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <div className="App">
        <h1>Class-Based Component with State</h1>
        <button onClick={this.toggleProfile} className="toggle-btn">
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div className="profile-card">
            <img src={person.imgSrc} alt="Profile" className="profile-image" />
            <h2>{person.fullName}</h2>
            <p><strong>Bio:</strong> {person.bio}</p>
            <p><strong>Profession:</strong> {person.profession}</p>
          </div>
        )}
        <p>Time elapsed since component mounted: {mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;