import React from 'react';
import renderer from 'react-test-renderer';
import { Link, MemoryRouter } from 'react-router-dom';

describe('test suite for components', () => {
    it('renders correctly home component', () => {
        const tree = renderer
        .create(<MemoryRouter><Link page="http://localhost:3000/">Home</Link></MemoryRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders correctly calculator component', () => {
        const tree = renderer
        .create(<MemoryRouter><Link page="http://localhost:3000/calculator">Calculator</Link></MemoryRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders correctly quote component', () => {
        const tree = renderer
        .create(<MemoryRouter><Link page="http://localhost:3000/quote">Quote</Link></MemoryRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
})