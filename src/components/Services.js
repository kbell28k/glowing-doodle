import React, { Component } from "react";
import Title from "./Title";
import { FaCat, FaDog, FaKiwiBird, FaFrog } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaDog />,
        title: "Daily Services",
        info: "Grooming, Nail Trims, Dog Walks",
      },
      {
        icon: <FaKiwiBird />,
        title: "Boarding Services",
        info:
          "Single or Multi-Pet Rooms with daily exercise and tailored schedules to your pet",
      },
      {
        icon: <FaCat />,
        title: "Training",
        info: "Puppy classes, Adult Manners Classes, Agility Classes",
      },
      {
        icon: <FaFrog />,
        title: "Socialization",
        info: "Paw playtime for the best-behaved animals",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span> {item.icon}</span>
                <h6> {item.title}</h6>
                <p> {item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
