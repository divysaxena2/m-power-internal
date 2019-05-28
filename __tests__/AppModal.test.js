import 'react-native';
import React from 'react';
import AppModal from '../src/components/AppModal';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <AppModal />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});