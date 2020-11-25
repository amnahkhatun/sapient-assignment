import React, { Suspense } from "react";
import { connect } from "react-redux";

import { fetchMissionDetails } from "../actions";
import MissionCard from "./MissionCard";
import Loading from "./Loading";
import Pagination from "./Pagination";
import "./styles.css";
import LazyLoad from "react-lazyload";
import FilterComponent from "./FilterComponent";

class MissionList extends React.Component {
  componentDidMount() {
    this.props.fetchMissionDetails();
  }

  render() {
    if (this.props.missionDetails.length < 1) {
      return <Loading />;
    }
    const renderList = this.props.missionDetails.map(missionDetails => {
      return (
        <div
          className="singleCard"
          // style={{ paddingBottom: "4rem" }}
          // key={missionDetails.productId}
        >
          {/* <LazyLoad
            // key={missionDetails.flight_number}
            height={100}
            offset={[-100, 100]}
            placeholder={<Loading />}
          > */}
          <MissionCard
            missionName={missionDetails.mission_name}
            flightNumber={missionDetails.flight_number}
            missionId={missionDetails.mission_id}
            lauchYear={missionDetails.launch_year}
            successfulLaunch={missionDetails.launch_success}
            successfulLanding={missionDetails.launch_landing}
            productImage={missionDetails.links.mission_patch}
          />
          {/* </LazyLoad> */}
        </div>
      );
    });

    return (
      <>
        <div className="details-main-div">
          <FilterComponent />

          <div className="cardGrid">
            {/* <div className="row">{renderList}</div> */}
            {renderList}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Pagination />
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  console.log(Object.values(state.missionResponse), "receiving in component");
  let missionDetails = state.missionResponse;
  // console.log(state.missionResponse.filteredData, "filteredData");
  missionDetails = Object.values(missionDetails);
  return { missionDetails };
};
export default connect(mapStateToProps, {
  fetchMissionDetails
})(MissionList);
