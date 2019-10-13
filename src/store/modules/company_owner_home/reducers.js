import {
  FETCHING_COMPANY_OWNERS_COMPANY_DETAILS_SUCCEEDED,
  FETCHING_THE_COMPANYS_BRANCHES_SUCCEEDED
} from "./actionTypes";

export const ACTION_HANDLERS = {
  [FETCHING_COMPANY_OWNERS_COMPANY_DETAILS_SUCCEEDED]: (state, action) =>
    Object.assign({}, state, {
      companyOwnersCompanyDetails: action.payload.companyOwnersCompanyDetails
    }),
  [FETCHING_THE_COMPANYS_BRANCHES_SUCCEEDED]: (state, action) =>
    Object.assign({}, state, {
      myCompanyBranches: action.payload.myCompanyBranches
    })
};
