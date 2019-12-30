import {
    COMPANY_OWNER_REGISTRATION_SUCCESSFUL,
    FETCHING_COMPANY_OWNERS_SUCCEEDED,
    FETCHING_REGISTERED_COMPANIES_SUCCEEDED, RESET_COMPANY_OWNER_REGISTRATION,
    SUBMIT_COMPANY_REGISTRATION_FORM
} from "./actionTypes";

export const ACTION_HANDLERS = {
  [SUBMIT_COMPANY_REGISTRATION_FORM]: (state, action) =>
    Object.assign({}, state, {
      isDataSubmissionSuccessful: true,
      data: action.payload.results
    }),
  [FETCHING_REGISTERED_COMPANIES_SUCCEEDED]: (state, action) =>
    Object.assign({}, state, {
      allRegisteredCompanies: action.payload.allRegisteredCompanies
    }),
    [COMPANY_OWNER_REGISTRATION_SUCCESSFUL]: (state, action) =>
        Object.assign({}, state, {
            isCompanyOwnerSuccessfullyRegistered: true,
            currentCompanyOwnerDbRecordId: action.payload.recordId
        }),

    [RESET_COMPANY_OWNER_REGISTRATION]: (state) =>
        Object.assign({}, state, {
            isCompanyOwnerSuccessfullyRegistered: false,
        }),
  [FETCHING_COMPANY_OWNERS_SUCCEEDED]: (state, action) =>
    Object.assign({}, state, {
      allCompanyOwners: action.payload.allCompanyOwners
    })
};
