import {
  CLIENT_DETAILS_SUBMITTED_SUCCESSFULLY,
  CLIENT_EMPLOYMENT_DETAILS_UPDATE_SUCCESSFUL,
  FETCHING_THE_COMPANYS_PENDING_LOANS_SUCCEEDED,
  GENERIC_SEARCH_EMPTY_RESULT_SET,
  GENERIC_SEARCH_SUCCESSFUL,
  GETTING_A_CLIENTS_LOANS_SUCCESSFUL,
  LOAN_DETAILS_ADDED_SUCCESSFULLY,
  RESET_CLIENT_DB_ID,
  RESET_CUSTOMER_ADDED_SUCCESSFULLY,
  RESET_UPDATED_CLIENT_LOAN,
  RESET_UPDATED_SEARCH_RESULTS_AVAILABLE,
  TOGGLE_MODAL_DISPLAY
} from "./actionTypes";

export const ACTION_HANDLERS = {
  [CLIENT_DETAILS_SUBMITTED_SUCCESSFULLY]: (state, action) =>
    Object.assign({}, state, {
      displayPersonalDetails: false,
      displayEmploymentDetails: true,
      displayLoanDetails: false,
      currentClientDbRecordId: action.payload.recordId,
      dialogHeight: "380"
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
    }),
  [LOAN_DETAILS_ADDED_SUCCESSFULLY]: (state, action) =>
    Object.assign({}, state, {
      displayPersonalDetails: true,
      displayEmploymentDetails: false,
      displayLoanDetails: false,
      dialogHeight: "630",
      dialogWidth: "600",
      customerSuccessFullyRegistered: true
    }),

  [TOGGLE_MODAL_DISPLAY]: (state, action) =>
    Object.assign({}, state, {
      visible: action.payload.visible
    }),

  [RESET_CLIENT_DB_ID]: (state, action) =>
    Object.assign({}, state, {
      currentClientDbRecordId: ""
    }),
  [RESET_CUSTOMER_ADDED_SUCCESSFULLY]: (state, action) =>
    Object.assign({}, state, {
      customerSuccessFullyRegistered: false
    }),

  [GENERIC_SEARCH_SUCCESSFUL]: (state, action) =>
    Object.assign({}, state, {
      genericSearchResults: action.payload.genericSearchResults,
      isUpdatedSearchResultsAvailable: true
    }),

  [GENERIC_SEARCH_EMPTY_RESULT_SET]: (state, action) =>
    Object.assign({}, state, {
      genericSearchResults: [],
      isUpdatedSearchResultsAvailable: true
    }),

  [GETTING_A_CLIENTS_LOANS_SUCCESSFUL]: (state, action) =>
    Object.assign({}, state, {
      clientsLoans: action.payload.clientsLoans,
      isUpdatedClientsLoansAvailable: true
    }),

  [GENERIC_SEARCH_EMPTY_RESULT_SET]: (state, action) =>
    Object.assign({}, state, {
      clientsLoans: [],
      isUpdatedClientsLoansAvailable: true
    }),

  [RESET_UPDATED_CLIENT_LOAN]: (state, action) =>
    Object.assign({}, state, {
      isUpdatedClientsLoansAvailable: false,
      clientsLoans: []
    }),

  [RESET_UPDATED_SEARCH_RESULTS_AVAILABLE]: (state, action) =>
    Object.assign({}, state, {
      isUpdatedSearchResultsAvailable: false
    })
};
