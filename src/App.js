import React, { Component } from 'react';

class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render = () => {
        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Ryan. I'm a software engineer.</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Indianapolis, and I grow software engineering organizations.</p>
                            <p>My favorite language is Java, but React is OK, too!</p>
                            <p>I started coding in 2004, and I love leading teams of developers.</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default App;
