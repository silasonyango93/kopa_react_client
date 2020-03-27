import './NotificationTrain.scss';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import NotificationCard from '../notifiaction-card/NotificationCard';

class NotificationTrain extends Component {
  render() {
    // Group data by date.
    const groupedData = {};
    for (let i = 0; i < this.props.notificationArray.length; i++) {
      const item = this.props.notificationArray[i];

      groupedData[item.date] = groupedData[item.date] || [];
      groupedData[item.date].push(item);
    }

    const dates = (
      <div className="train__dates">
        {Object.keys(groupedData).map(k => (
          <div className="train__date" key={k}>
            <div className="train__date-label">{k}</div>
            <div className="train__items">
              <div className="train__items-container">
                {groupedData[k].map((d, i) => (
                  <NotificationCard notification={d} key={i} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );

    return <div className="train__main-body">{dates}</div>;
  }
}

NotificationTrain.propTypes = {
  notificationArray: PropTypes.arrayOf(PropTypes.object),
};

NotificationTrain.defaultProps = {
  notificationArray: [
    {
      date: 'TODAY',
      time: '01:37AM',
      person: 'Wayne Jimenez',
      action: 'has assigned you a new lead',
      actionDate: '25th May 2020',
    },
    {
      date: 'TODAY',
      time: '01:37AM',
      person: 'Wayne Jimenez',
      action: 'has assigned you a new lead',
      actionDate: '25th May 2020',
    },
    {
      date: '17th Jan',
      time: '01:37AM',
      person: 'Wayne Jimenez',
      action: 'has assigned you a new lead',
      actionDate: '25th May 2020',
    },
    {
      date: '17th Jan',
      time: '01:37AM',
      person: 'Wayne Jimenez',
      action: 'has assigned you a new lead',
      actionDate: '25th May 2020',
    },
    {
      date: '17th Jan',
      time: '01:37AM',
      person: 'Wayne Jimenez',
      action: 'has assigned you a new lead',
      actionDate: '25th May 2020',
    },
    {
      date: '16th Jan',
      time: '01:37AM',
      person: 'Wayne Jimenez',
      action: 'has assigned you a new lead',
      actionDate: '25th May 2020',
    },
  ],
};

export default NotificationTrain;
