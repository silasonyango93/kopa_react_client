import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./TopBar.scss";
import { terminateASystemUserSession } from "../../store/modules/current_session/actions";
import { REGULAR_SYSTEM_USER } from "../../config/constants/Constants";

class TopBar extends Component {
  handleLogoutButtonClicked = () => {
    if (this.props.RoleType !== REGULAR_SYSTEM_USER) {
      window.location.assign("/");
    } else if (this.props.RoleType === REGULAR_SYSTEM_USER) {
      const payload = {
        ColumnName: "SessionLogId",
        ColumnValue: this.props.dbSessionLogId
      };
      this.props.terminateASystemUserSession(payload);
      window.location.assign("/");
    }
  };

  render() {
    return (
      <div className="top-bar">
        <div className="topbar__close-icon-div">
          <i
            className="fa fa-power-off fa-fw topbar__power-icon"
            onClick={() => {
              this.handleLogoutButtonClicked();
            }}
          />
        </div>
      </div>
    );
  }
}

TopBar.propTypes = {
  terminateASystemUserSession: PropTypes.func.isRequired,
  dbSessionLogId: PropTypes.string.isRequired,
  RoleType: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  isSessionActive: state.current_session.isSessionActive,
  dbSessionLogId: state.current_session.dbSessionLogId,
  RoleType: state.current_session.RoleType
});

const mapDispatchToProps = dispatch => ({
  terminateASystemUserSession: payload =>
    dispatch(terminateASystemUserSession(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);
