import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_MISSION_DETAILS":
      return {
        // state,
        ..._.mapKeys(action.payload, "flight_number")
      };

    // case "FETCH_PRODUCT":
    //   // console.log(state, "state in reducer");
    //   return { state };

    case "FETCH_FILTERED_PRODUCT":
      const { query } = action;
      let prodArray = Object.values(state);
      const filteredData = prodArray.filter(product => {
        let prodName = product.productName.toLowerCase();
        let queryLower = query.toLowerCase();
        if (prodName !== undefined && prodName.includes(queryLower)) {
          return product;
        }
      });
      // console.log(filteredData, "filteredData in reducer");
      return {
        ...filteredData
      };

    default:
      return state;
  }
};
