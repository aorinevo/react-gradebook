import { shallow } from 'enzyme';
import React from 'react';
import GradebookTh from '../../../src/components/gradebook/gradebook-th';
import expect from 'expect';

describe('GradebookTh', ()=>{
  let component = null;
  beforeEach(()=> {
      component = shallow(<GradebookTh assignment={{assign_name: 'test'}}/>);
    }
  )
  afterEach(() => {
    component = null;
  })
  it('should return one <th>', ()=>{
    expect(component.find('th').length).toBe(1);
  })
  it('should have an assign_name', ()=>{
    expect(component.find('button').text()).toBe('test');
  })
})