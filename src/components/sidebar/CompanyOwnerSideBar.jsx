import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Route, withRouter } from "react-router-dom";
import { FaCogs, FaCog, FaSearch, FaList } from "react-icons/fa";
import {
  REGISTER_COMPANY_BRANCHES_FORM,
  REGISTER_SYSTEM_USERS_FORM
} from "../../views/company_owner_home/CompanyOwnerHomeConstants";

class CompanyOwnerSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      brandDropdownCollapsed: true,
      samplePagesCollapsed: true
    };

    this.mainPartionsConfigClicked = this.mainPartionsConfigClicked.bind(this);
    this.subPartionsConfigClicked = this.subPartionsConfigClicked.bind(this);
    this.libraryFieldsConfigClicked = this.libraryFieldsConfigClicked.bind(
      this
    );
    this.brandRegistration = this.brandRegistration.bind(this);
  }

  mainPartionsConfigClicked() {
    this.props.history.push("/main-partitions-config");
  }

  subPartionsConfigClicked() {
    this.props.history.push("/subpartitions-config");
  }

  libraryFieldsConfigClicked() {
    this.props.history.push("/fields-config");
  }

  brandRegistration() {
    this.props.history.push("/brand-registration");
  }

  render() {
    return (
      <div
        className="navbar-default sidebar"
        style={{ marginLeft: "-20px" }}
        role="navigation"
      >
        <button
          className="navbar-toggle"
          type="button"
          data-toggle="colapse"
          data-target=".navbar-colapse"
        />
        <div className="sidebar-nav navbar-collapse collapse">
          <ul className="nav in" id="side-menu">
            <li>
              <div className="input-group custom-search-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <FaSearch />
                  </button>
                </span>
              </div>
            </li>

            <li className="list-class">
              <a
                href=""
                onClick={e => {
                  e.preventDefault();
                  this.props.handleSideBarClicked(
                    REGISTER_COMPANY_BRANCHES_FORM
                  );
                }}
              >
                <i className="fa fa-dashboard fa-fw" /> &nbsp;Company Branches
              </a>
            </li>

            <li className="list-class">
              <a
                href=""
                onClick={e => {
                  e.preventDefault();
                  this.props.handleSideBarClicked(REGISTER_SYSTEM_USERS_FORM);
                }}
              >
                <i className="fa fa-dashboard fa-fw" /> &nbsp;System Users
              </a>
            </li>

            <li
              className={classNames({
                active: !this.state.chartsElementsCollapsed
              })}
            >
              <a
                href=""
                onClick={e => {
                  e.preventDefault();
                  this.setState({
                    chartsElementsCollapsed: !this.state.chartsElementsCollapsed
                  });
                  return false;
                }}
              >
                <i className="fa fa-bar-chart-o fa-fw" /> &nbsp;Charts
                <span className="fa arrow" />
              </a>
              <ul
                className={classNames({
                  "nav nav-second-level": true,
                  collapse: this.state.chartsElementsCollapsed
                })}
              >
                <li>
                  <a
                    href=""
                    onClick={e => {
                      e.preventDefault();
                      this.props.history.push("/flotcharts");
                    }}
                  >
                    FlotCharts
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={e => {
                      e.preventDefault();
                      this.props.history.push("/morrisjscharts");
                    }}
                  >
                    Morrisjs Charts
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a
                href=""
                onClick={e => {
                  e.preventDefault();
                  this.props.history.push("/table");
                }}
              >
                <i className="fa fa-table fa-fw" /> &nbsp;Tables
              </a>
            </li>

            <li>
              <a
                href=""
                onClick={e => {
                  e.preventDefault();
                  this.props.history.push("/forms");
                }}
              >
                <i className="fa fa-table fa-fw" /> &nbsp;Forms
              </a>
            </li>

            <li
              className={classNames({
                active: !this.state.uiElementsCollapsed
              })}
            >
              <a
                href=""
                onClick={e => {
                  e.preventDefault();
                  this.setState({
                    uiElementsCollapsed: !this.state.uiElementsCollapsed
                  });
                  return false;
                }}
              >
                <i className="fa fa-edit fa-fw" /> UI Elements
                <span className="fa arrow" />
              </a>

              <ul
                className={classNames({
                  "nav nav-second-level": true,
                  collapse: this.state.uiElementsCollapsed
                })}
              >
                <li>
                  <a
                    href=""
                    onClick={e => {
                      e.preventDefault();
                      this.props.history.push("/panelwells");
                    }}
                  >
                    Panels And Wells
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={e => {
                      e.preventDefault();
                      this.props.history.push("/button");
                    }}
                  >
                    Buttons
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={e => {
                      e.preventDefault();
                      this.props.history.push("/notification");
                    }}
                  >
                    Notification
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={e => {
                      e.preventDefault();
                      this.props.history.push("/typography");
                    }}
                  >
                    Typography
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={e => {
                      e.preventDefault();
                      this.props.history.push("/icons");
                    }}
                  >
                    Icons
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={e => {
                      e.preventDefault();
                      this.props.history.push("/grid");
                    }}
                  >
                    Grid
                  </a>
                </li>
              </ul>
            </li>

            <li
              className={classNames({
                active: !this.state.samplePagesCollapsed
              })}
            >
              <a
                href=""
                onClick={e => {
                  e.preventDefault();
                  this.setState({
                    samplePagesCollapsed: !this.state.samplePagesCollapsed
                  });
                  return false;
                }}
              >
                <i className="fa fa-files-o fa-fw" />
                &nbsp;Sample Pages
                <span className="fa arrow" />
              </a>
              <ul
                className={classNames({
                  "nav nav-second-level": true,
                  collapse: this.state.samplePagesCollapsed
                })}
              >
                <li>
                  <a
                    href=""
                    onClick={e => {
                      e.preventDefault();
                      this.props.history.push("/blank");
                    }}
                  >
                    Blank
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={e => {
                      e.preventDefault();
                      this.props.history.push("/login");
                    }}
                  >
                    Login
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="http://www.strapui.com/">Premium React Themes</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

CompanyOwnerSideBar.propTypes = {
  handleSideBarClicked: PropTypes.func.isRequired
};

export default withRouter(CompanyOwnerSideBar);
