import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const launchYear = [
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
  2020
];

export default class index extends Component {
  render() {
    return (
      <div className="filter-component">
        <Card>
          <div className="filterMain">Filters</div>
          <div className="launchYear">Launch Year</div>
          <div className="buttonDiv">
            {launchYear.map(year => (
              <button className="yearButton">{year}</button>
            ))}
          </div>
          <div className="launchYear">Successful Launch</div>
          <div className="buttonDiv">
            <button className="yearButton">True</button>
            <button className="yearButton">False</button>
          </div>

          <div className="launchYear">Successful Landing</div>
          <div className="buttonDiv">
            <button className="yearButton">True</button>
            <button className="yearButton">False</button>
          </div>
        </Card>
      </div>
    );
  }
}
