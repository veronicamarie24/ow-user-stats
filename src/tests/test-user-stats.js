import React from 'react';
import { shallow } from 'enzyme';

function createTestProps (props) {
  fetchData: jest.fn((options, callback) => callback(null, 'ok')),
  return {
    // common props
    label: 'foo',
    value: 'bar',
    onClick: jest.fn(),
    // allow to override common props
    ...props,
  }
}

describe('rendering', () => {
  let wrapper
  const createWrapper = props => shallow(<MyComponent {...props} />)
  beforeEach(() => {
    const props = createTestProps()
    wrapper = createWrapper(props)
  })
  describe('initial state', () => {
    // Here you can test the default state props which are independent
    // from any logic.
    it('has default isOpen state')
    describe('when there is an initial value', () => {
      beforeEach(() => {
        const props = createTestProps({ initialValue: 'Custom' })
        wrapper = createWrapper(props)
      })
      it('should use the given value')
    })
  })
  // The same applies to rendered elements
})