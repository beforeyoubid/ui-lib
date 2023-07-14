import { IconButton } from '@mui/material';
import { faker } from '@faker-js/faker';
import moment from 'moment-timezone';
import { Trash } from 'tabler-icons-react';

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
    <Trash />
  </IconButton>
);

export const responsiveTableData = [
  {
    ...createOrder(),
    actions,
  },
];
