import {
  TERMINATE_CURRENT_SESSION,
  STORE_USER,
  SYSTEM_NOT_CONFIGURED,
  INITIAL_SYSTEM_OWNERSHIP_GROUP_CONFIGURATION_SUCCESSFUL,
  INITIAL_SYSTEM_COMPANY_CONFIGURATION_SUCCESSFUL,
  INITIAL_EMPLOYMENT_CATEGORIES_CONFIGURATION_SUCCESSFUL,
  MALE_GENDER_CONFIGURATION_SUCCESSFUL,
  FEMALE_GENDER_CONFIGURATION_SUCCESSFUL,
  INITIAL_SYSTEM_CONFIGURATION_SUCCESSFUL,
  FETCHING_SYSTEM_USER_COMPANY_DETAILS_SUCCEEDED,
  WRONG_LOGIN_CREDENTIALS,
  RESET_WRONG_CREDENTIALS,
  SESSION_LOG_CREATED_SUCCESSFULLY
} from "./actionTypes";

export const ACTION_HANDLERS = {
  [STORE_USER]: (state, action) =>
    Object.assign({}, state, {
      isLoginSuccessful: true,
      session_details: action.payload.session_details,
      RoleType: action.payload.RoleType,
      isSessionActive: action.payload.isSessionActive
    }),
  [TERMINATE_CURRENT_SESSION]: state =>
    Object.assign({}, state, {
      isSessionActive: false,
      isLoginSuccessful: false
    }),
  [WRONG_LOGIN_CREDENTIALS]: state =>
    Object.assign({}, state, {
      hasWrongLoginCredentials: true
    }),
  [RESET_WRONG_CREDENTIALS]: state =>
    Object.assign({}, state, {
      hasWrongLoginCredentials: false
    }),
  [SYSTEM_NOT_CONFIGURED]: (state, action) =>
    Object.assign({}, state, {
      isCompanyAlreadyConfigured: action.payload.isCompanyAlreadyConfigured,
      initialConfigurations: {
        isSystemOwnershipGroupConfigured: false,
        isSystemCompanyConfigured: false,
        isInitialEmploymentCategoryConfigured: false,
        isMaleGenderConfigured: false,
        isFemaleGenderConfigured: false,
        isInitialGenderConfigured: false
      }
    }),
  [INITIAL_SYSTEM_OWNERSHIP_GROUP_CONFIGURATION_SUCCESSFUL]: state =>
    Object.assign({}, state, {
      initialConfigurations: {
        isSystemOwnershipGroupConfigured: true,
        isSystemCompanyConfigured: false,
        isInitialEmploymentCategoryConfigured: false,
        isMaleGenderConfigured: false,
        isFemaleGenderConfigured: false,
        isInitialGenderConfigured: false
      }
    }),
  [INITIAL_SYSTEM_COMPANY_CONFIGURATION_SUCCESSFUL]: state =>
    Object.assign({}, state, {
      initialConfigurations: {
        isSystemOwnershipGroupConfigured: true,
        isSystemCompanyConfigured: true,
        isInitialEmploymentCategoryConfigured: false,
        isMaleGenderConfigured: false,
        isFemaleGenderConfigured: false,
        isInitialGenderConfigured: false
      }
    }),
  [INITIAL_EMPLOYMENT_CATEGORIES_CONFIGURATION_SUCCESSFUL]: state =>
    Object.assign({}, state, {
      initialConfigurations: {
        isSystemOwnershipGroupConfigured: true,
        isSystemCompanyConfigured: true,
        isInitialEmploymentCategoryConfigured: true,
        isMaleGenderConfigured: false,
        isFemaleGenderConfigured: false,
        isInitialGenderConfigured: false
      }
    }),
  [MALE_GENDER_CONFIGURATION_SUCCESSFUL]: state =>
    Object.assign({}, state, {
      initialConfigurations: {
        isSystemOwnershipGroupConfigured: true,
        isSystemCompanyConfigured: true,
        isInitialEmploymentCategoryConfigured: true,
        isMaleGenderConfigured: true,
        isFemaleGenderConfigured: false,
        isInitialGenderConfigured: false
      }
    }),
  [FEMALE_GENDER_CONFIGURATION_SUCCESSFUL]: state =>
    Object.assign({}, state, {
      initialConfigurations: {
        isSystemOwnershipGroupConfigured: true,
        isSystemCompanyConfigured: true,
        isInitialEmploymentCategoryConfigured: true,
        isMaleGenderConfigured: true,
        isFemaleGenderConfigured: true,
        isInitialGenderConfigured: true
      }
    }),
  [INITIAL_SYSTEM_CONFIGURATION_SUCCESSFUL]: state =>
    Object.assign({}, state, {
      isCompanyAlreadyConfigured: true
    }),

  [FETCHING_SYSTEM_USER_COMPANY_DETAILS_SUCCEEDED]: (state, action) =>
    Object.assign({}, state, {
      currentSystemUserCompanyDetails:
        action.payload.currentSystemUserCompanyDetails
    }),

  [SESSION_LOG_CREATED_SUCCESSFULLY]: (state, action) =>
    Object.assign({}, state, {
      dbSessionLogId: action.payload.dbSessionLogId
    })
};
