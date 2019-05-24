import 'react-native';
import React from 'react';
import AppHeader from '../src/components/AppHeader';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <AppHeader />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});