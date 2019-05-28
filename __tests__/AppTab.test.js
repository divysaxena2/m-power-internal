import 'react-native';
import React from 'react';
import AppTab from '../src/components/AppTab';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <AppTab />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});