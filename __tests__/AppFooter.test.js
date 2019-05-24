import 'react-native';
import React from 'react';
import AppFooter from '../src/components/AppFooter';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <AppFooter />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});