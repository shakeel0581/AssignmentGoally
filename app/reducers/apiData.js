import * as actionTypes from "@actions/actionTypes";
const initialState = {
  rawData: {},
  docsData: [],
  isDesc: true,
  searchText: ""
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.FETCH_RECORD_FROM_API:
      return { rawData: action.payload, docsData: action.DESCOrderedData, isDesc: true, searchText: "" };
    case actionTypes.UPDATE_DATA_ORDER:
      return { ...state, docsData: action.payload, isDesc: action.isDesc };
    case actionTypes.SET_SEARCH_TEXT:
      const newData = state?.rawData?.docs.filter((item) => {
        const itemData = `${item.name.toUpperCase()}`;
        const textData = action.payload.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      return { ...state, searchText: action.payload, docsData: newData };
      case actionTypes.DELETE_ITEM:
        const filterRawData = state?.rawData?.docs.filter((item) => item.id != action.payload);
        const filterDocsData = state?.docsData?.filter((item) => item.id != action.payload);
        return { ...state, rawData: {...state.rawData, docs: filterRawData}, docsData: filterDocsData };
    default:
      return state;
  }
};