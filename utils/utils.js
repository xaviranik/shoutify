import moment from "moment";

/**
 * Format date with moment.js
 */
export const formatDateForHuman = (date) => {
  return moment(date).fromNow();
};
