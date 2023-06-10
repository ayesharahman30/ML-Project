import React from "react";
import { Component } from "react";
import "./ContestListItem.css";
import calenderIcon from "../../Image/calender.png";

class ContestListItem extends Component {
  render() {
    return (
      <div className="ContestListItem">
        <div className="ContestListTitle">
          <a href={"contest?id=" + this.props.contest.id}>
            {this.props.contest.name}
          </a>
        </div>
        <div className="ContestListBottom">
          <div className="ContestListTime">
            <img src={calenderIcon}></img>
            <span>{this.props.contest.date.split('T')[0]}</span>
            <p>({this.props.contest.start}-{this.props.contest.end})</p>
          </div>
          
        </div>
      </div>
    );
  }
}
export default ContestListItem;
