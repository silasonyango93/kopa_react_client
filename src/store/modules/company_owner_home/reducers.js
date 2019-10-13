import {FETCHING_COMPANY_OWNERS_COMPANY_DETAILS_SUCCEEDED} from "./actionTypes";

export const ACTION_HANDLERS = {
    [FETCHING_COMPANY_OWNERS_COMPANY_DETAILS_SUCCEEDED]: (state, action) =>
        Object.assign({}, state, {
            companyOwnersCompanyDetails: action.payload.companyOwnersCompanyDetails,
        })
};
