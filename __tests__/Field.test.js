import 'react-native';
import React from 'react';


import renderer from 'react-test-renderer';
import Field from '../src/components/Field';

it('renders correctly', () => {
    const tree = renderer.create(
        <Field />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});