import products from "../apis/products";

let response;

export const fetchMissionDetails = pageNumber => async dispatch => {
  response = await products.get(`/v3/launches?limit=8`);
  console.log(response.data, "sending from actions");
  dispatch({
    type: "FETCH_MISSION_DETAILS",
    payload: response.data
  });
};

export const fetchProduct = () => async dispatch => {
  // console.log(response.data.products, "response in actions");
  dispatch({
    type: "FETCH_PRODUCT",
    payload: response.data
  });
};

// export const fetchFilteredProduct = query => async dispatch => {
//   // console.log(query, "response in actions -- fetchFilteredProduct");

//   dispatch({
//     type: "FETCH_FILTERED_PRODUCT",
//     query
//     // payload: response.data
//   });
// };
