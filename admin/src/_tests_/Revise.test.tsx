import React from 'react';
import ReactDOM from 'react-dom';
import Revise from '../components/Revise';

it('renders Revise page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Revise />, div);
  ReactDOM.unmountComponentAtNode(div);
});