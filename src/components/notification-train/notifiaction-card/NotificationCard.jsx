import './NotificationCard.scss';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

class NotificationCard extends Component {
  render() {
    const { notification } = this.props;
    return (
      <div className="notification__container">
        <div className="notification__section notification__time">{notification?.time}</div>
        <div className="notification__section">
          <div className="notification__title">
            <span className="notification__title-name">{notification?.person}</span>
            {' ' + notification?.action}
          </div>
          <div className="notification__subtitle">{notification?.date}</div>
        </div>
      </div>
    );
  }
}

NotificationCard.propTypes = {
  notification: PropTypes.shape({
    date: PropTypes.string,
    time: PropTypes.string,
    person: PropTypes.string,
    action: PropTypes.string,
    actionDate: PropTypes.string,
  }),
};

NotificationCard.defaultProps = {
  notification: {
    date: 'TODAY',
    time: '01:37AM',
    person: 'Wayne Jimenez',
    action: 'has assigned you a new lead',
    actionDate: '25th May 2020',
  },
};

export default NotificationCard;
