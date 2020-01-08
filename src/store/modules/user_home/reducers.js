import {
  CLIENT_DETAILS_SUBMITTED_SUCCESSFULLY,
  CLIENT_EMPLOYMENT_DETAILS_UPDATE_SUCCESSFUL,
  FETCHING_THE_COMPANYS_PENDING_LOANS_SUCCEEDED
} from "./actionTypes";

export const ACTION_HANDLERS = {
  [CLIENT_DETAILS_SUBMITTED_SUCCESSFULLY]: (state, action) =>
    Object.assign({}, state, {
      displayPersonalDetails: false,
      displayEmploymentDetails: true,
      displayLoanDetails: false,
      currentClientDbRecordId: action.payload.recordId
    }),
  [CLIENT_EMPLOYMENT_DETAILS_UPDATE_SUCCESSFUL]: (state, action) =>
    Object.assign({}, state, {
      displayPersonalDetails: false,
      displayEmploymentDetails: false,
      displayLoanDetails: true,
      currentEmploymentDetails: action.payload.currentEmploymentDetails
    }),
  [FETCHING_THE_COMPANYS_PENDING_LOANS_SUCCEEDED]: (state, action) =>
    Object.assign({}, state, {
      currentCompanyPendingLoans: action.payload.currentCompanyPendingLoans
    })
};
