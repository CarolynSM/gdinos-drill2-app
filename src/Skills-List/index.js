import React from "react";
import ToggleDisplay from "react-toggle-display";

export default class Skills extends React.Component {
  createSkills(item) {
    return <li>{item}</li>;
  }

  render() {
    return (
      <section className="skills-container hidden">
        <h4>Skills</h4>
        <ul className="skills-list">{this.props.dinosaurs.skills.map(this.createSkills)}</ul>
      </section>
    );
  }
}
