import {CLIENT_DETAILS_SUBMITTED_SUCCESSFULLY} from "./actionTypes";

export const ACTION_HANDLERS = {
    [CLIENT_DETAILS_SUBMITTED_SUCCESSFULLY]: state =>
        Object.assign({}, state, {
            currentClientDetailsSubmitted: true
        })
};
