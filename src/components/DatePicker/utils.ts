import moment from 'moment';

import { empty } from '../../utils';

/**
 * util function to check whether the date is Invalid
 * @param date the date to check
 * @returns a boolean of whether the date is invalid
 */
export const isInvalidDate = (date: Maybe<Date | moment.MomentInput | moment.Moment>): boolean => {
  if (empty(date)) return true;
  // eslint-disable-next-line import/no-named-as-default-member
  if (moment.isMoment(date)) {
    return date.isValid();
  }

  return moment(date).isValid();
};
