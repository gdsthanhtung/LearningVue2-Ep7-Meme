// src/helpers/timeHelper.js
import moment from 'moment';

export function formatTimeFromNow(time) {
  moment.locale('vi');
  return moment(time).fromNow();
}
