import 'react-native';
import React from 'react';
import AppList from '../src/components/AppList';

import renderer from 'react-test-renderer';
import IconList from '../src/components/IconList';

it('renders correctly', () => {
    const tree = renderer.create(
        <IconList />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});