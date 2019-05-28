import 'react-native';
import React from 'react';
import AppList from '../src/components/AppList';

import renderer from 'react-test-renderer';
import OutlineButton from '../src/components/OutlineButton';

it('renders correctly', () => {
    const tree = renderer.create(
        <OutlineButton />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});