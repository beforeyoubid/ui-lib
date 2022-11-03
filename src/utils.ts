import { faker } from '@faker-js/faker';
import { Typography } from '@mui/material/styles/createTypography';
import moment from 'moment-timezone';
import { PRODUCT_STATUSES, PRODUCT_TYPES } from './my-constants';

const getRandomElement = <T>(elements: T[]): T => elements[Math.floor(Math.random() * elements.length)];

const getRandomDateStr = () => moment(faker.date.past()).format('DD/MM/YY');

const getFullAddress = () =>
  `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}`;

export const createOrder = () => {
  return {
    id: faker.datatype.number(),
    address: getFullAddress(),
    status: getRandomElement(PRODUCT_STATUSES),
    productType: getRandomElement(PRODUCT_TYPES),
    purchasedDate: getRandomDateStr(),
    authorityReceived: getRandomDateStr(),
    reportDate: getRandomDateStr(),
  };
};

export const isEvenNum = (num: number) => num % 2 === 0;
