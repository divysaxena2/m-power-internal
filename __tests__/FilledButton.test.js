import 'react-native';
import React from 'react';
import AppList from '../src/components/AppList';

import renderer from 'react-test-renderer';
import FilledButton from '../src/components/FilledButton';

it('renders correctly', () => {
    const tree = renderer.create(
        <FilledButton />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});