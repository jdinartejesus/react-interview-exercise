import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import SelectFriendGender from './SelectFriendGender';


describe('components/SelectFriendGender', () => {

  const defaultValue = 'female';
  const onChangeGender = (value) => {
    return value;
  };

  it('should match it\'s empty snapshot', () => {
    const tree = renderer.create(
      <SelectFriendGender onChangeGender={onChangeGender} value={defaultValue}  />
    );

    expect(tree).toMatchSnapshot();
  })

  it('should contain two options', () => {
    const component = shallow(<SelectFriendGender onChangeGender={onChangeGender} value={defaultValue} />);

    expect(component.find('option')).toHaveLength(2);
  })

  it('should select the option male', () => {
    const onChangeGender = jest.fn();
    const component = shallow(<SelectFriendGender onChangeGender={onChangeGender} value="female" />);

    component.find('select').simulate('change', { target: { value : 'male'} });
    expect(onChangeGender).toBeCalledWith('male');
  })
})

