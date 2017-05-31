import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Pagination from './Pagination';

describe('components/Pagination', () => {
  const defaultTotalPages = 5;
  const onHandlerNext = (number) => ( number )
  const onHandlerPrevious = (number) => ( number )
  const onHandlePageNumber = (number) => ( number )

  it('should match it\'s empty snapshot', () => {
    const tree = renderer.create(
      <Pagination
        totalPages={defaultTotalPages}
        onHandlerNext={onHandlerNext}
        onHandlerPrevious={onHandlerPrevious}
        onHandlePageNumber={onHandlePageNumber}
      />
    )

    expect(tree).toMatchSnapshot();
  })

  it('should display of buttons for given TotalPages', () => {
    const component = shallow(
      <Pagination
        totalPages={defaultTotalPages}
        onHandlerNext={onHandlerNext}
        onHandlerPrevious={onHandlerPrevious}
        onHandlePageNumber={onHandlePageNumber}
      />
    );

    expect(component.find('a').not('a[aria-label]')).toHaveLength(defaultTotalPages);
  })

  it('should return next page number', () => {
    const onHandlerNext = jest.fn();
    const component = shallow(
      <Pagination
        totalPages={defaultTotalPages}
        onHandlerNext={onHandlerNext}
        onHandlerPrevious={onHandlerPrevious}
        onHandlePageNumber={onHandlePageNumber}
      />
    );

    component.find('a[aria-label="Next"]').simulate('click');
    expect(onHandlerNext).toHaveBeenCalled();
  })

  it('should return previous page number', () => {
    const onHandlerPrevious = jest.fn();
    const component = shallow(
      <Pagination
        totalPages={defaultTotalPages}
        onHandlerNext={onHandlerNext}
        onHandlerPrevious={onHandlerPrevious}
        onHandlePageNumber={onHandlePageNumber}
      />
    );

    component.find('a[aria-label="Previous"]').simulate('click');
    expect(onHandlerPrevious).toHaveBeenCalled();
  })

  it('should return clicked page number', () => {
    const onHandlePageNumber = jest.fn();
    const component = shallow(
      <Pagination
        totalPages={defaultTotalPages}
        onHandlerNext={onHandlerNext}
        onHandlerPrevious={onHandlerPrevious}
        onHandlePageNumber={onHandlePageNumber}
      />
    );

    component.find('a').not('a[aria-label]').first().simulate('click')
    expect(onHandlePageNumber).toBeCalledWith(0);
  })
})
