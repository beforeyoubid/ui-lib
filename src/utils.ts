import React from 'react';

export const isEvenNum = (num: number) => num % 2 === 0;
export const typedMemo: <T>(c: T) => T = React.memo;

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
