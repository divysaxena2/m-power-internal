import 'react-native';
import React from 'react';
import AppList from '../src/components/AppList';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <AppList />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});