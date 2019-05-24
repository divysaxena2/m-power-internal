import 'react-native';
import React from 'react';
import IconContainer from '../src/components/IconContainer';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <IconContainer />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});