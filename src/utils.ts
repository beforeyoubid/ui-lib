import { faker } from '@faker-js/faker';
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

export const notEmpty = <TValue>(value: TValue | null | undefined): value is TValue =>
  value !== null && value !== undefined;

export function automation(componentKeys: Maybe<string>[] | string, attributes = {}) {
  const dataAttributes: Record<string, unknown> = {};
  const keyIncludesComponent = (key: string) => key.toLocaleLowerCase().includes('component.');
  const keyIncludesPage = (key: string) => key.toLocaleLowerCase().includes('page');

  if (Array.isArray(componentKeys)) {
    componentKeys.filter(notEmpty).forEach(key => {
      if (keyIncludesComponent(key)) {
        dataAttributes['data-component-key'] = key;
      }
      if (keyIncludesPage(key)) {
        dataAttributes['data-page-component-key'] = key;
      }
    });
  } else if (componentKeys) {
    if (keyIncludesComponent(componentKeys)) {
      dataAttributes['data-component-key'] = componentKeys;
    }
    if (keyIncludesPage(componentKeys)) {
      dataAttributes['data-page-component-key'] = componentKeys;
    }
  }
  for (const [key, value] of Object.entries(attributes)) {
    dataAttributes[`data-component-${key.toLocaleLowerCase()}`] = value;
  }
  return {
    ...dataAttributes,
  };
}
