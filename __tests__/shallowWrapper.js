import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import React from 'react';

export const shallowWithStore = (component, store) => {
    return shallow(
        <Provider store={store}>{component}</Provider>);
};

export const shallowWithoutStore = (component) => {
    return shallow(component);
};

export const mountWithStore = (component, store) => {
    return mount(
        <Provider store={store}>{component}</Provider>);
};

export const mountWithoutStore = (component) => {
    return mount(component);
};
