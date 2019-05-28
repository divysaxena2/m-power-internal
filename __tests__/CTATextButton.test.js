import 'react-native';
import React from 'react';


import renderer from 'react-test-renderer';
import CTATextButton from '../src/components/CTATextButton';

it('renders correctly', () => {
    const tree = renderer.create(
        <CTATextButton />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});