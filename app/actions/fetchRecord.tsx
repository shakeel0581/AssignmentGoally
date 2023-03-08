import axios from "axios"
import * as actionTypes from "./actionTypes";
import * as reorderData from "./reorderData";

interface docs {
  "_id": String,
  "type": String,
  "ctaOrdering": Number,
  "entityType": String,
  "devices": [],
  "libraryType": String,
  "ordering": Number,
  "clientId": String,
  "createdBy": String,
  "notifications": [],
  "visualAidUrl": String,
  "duration": Number,
  "schedule": {},
  "name": String,
  "__v": Number,
  "createdAt": Date,
  "updatedAt": String,
  "id": String
};

export const collectDataFromAPI = (callBack: Function) => async (dispatch: Function) => {
  try {
    const response = await axios({
      url: 'https://devapi.getgoally.com/v1/api/reminders/all',
      method: "get",
      headers: {
        'Authorization': 'ddc58e6a-2e69-4f44-97e8-1454eb352069'
      }
    });

    const orderedData = reorderData.DESC_Data(response.data?.docs ?? []);
    dispatch({ type: actionTypes.FETCH_RECORD_FROM_API, payload: response.data, DESCOrderedData: orderedData });
    callBack({ status: true, res: response });
    return { status: true, res: response };
  } catch (error) {
    return { status: false, res: error };
  }
}

export const setASC = (data: docs[]) => async (dispatch: Function) => {
  const orderedData = reorderData.ASC_Data(data);
  dispatch({ type: actionTypes.UPDATE_DATA_ORDER, payload: orderedData, isDesc: false });
}

export const setDSCE = (data: docs[]) => async (dispatch: Function) => {
  const orderedData = reorderData.DESC_Data(data);
  dispatch({ type: actionTypes.UPDATE_DATA_ORDER, payload: orderedData, isDesc: true});
}

