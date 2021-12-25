import moment from "moment";

/**
 * Format date for human with moment.js
 */
export const formatDateForHuman = (date) => {
  return moment(date).fromNow();
};
