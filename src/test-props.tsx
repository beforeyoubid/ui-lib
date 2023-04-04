import { Delete } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { faker } from '@faker-js/faker';
import moment from 'moment-timezone';

const PRODUCT_TYPES = ['STRATA', 'BPI'];
const PRODUCT_STATUSES = ['LIVE', 'CLOSED'];

const getRandomElement = <T extends unknown>(elements: T[]): T => elements[Math.floor(Math.random() * elements.length)];

const getRandomDateStr = () => moment(faker.date.past()).format('DD/MM/YY');

const getFullAddress = () =>
  `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}`;

const createOrder = () => {
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

const actions = (
  <IconButton>
    <Delete />
  </IconButton>
);

export const responsiveTableData = [
  {
    ...createOrder(),
    actions,
  },
];
