import React from "react";
import Skills from "../Skills-List";
import ToggleDisplay from "react-toggle-display";

export default class Profiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.createDino = this.createDino.bind(this);
  }

  handleClick(event) {
    if (event.target.parentNode.classList.contains("profile-header")) {
      event.target.parentNode.parentNode.childNodes[1].classList.toggle("hidden");
    }
  }

  createDino(item) {
    return (
      <li>
        <div className="profile-card" onClick={this.handleClick.bind(this)}>
          <header className="profile-header">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
          </header>
          <Skills dinosaurs={item} />
        </div>
      </li>
    );
  }

  render() {
    return (
      <main>
        <section id="profiles-container">
          <h2>Profiles</h2>
          <ul id="profiles">{this.props.dinosaurs.map(this.createDino)}</ul>
        </section>
      </main>
    );
  }
}
