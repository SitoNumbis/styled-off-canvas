/**
 * @jest-environment node
 */

import React from 'react'
import renderer from './helper/tests/jest'

import Provider from './Provider'
import Menu from './Menu'

describe('Menu', () => {
  let useEffectSpy

  beforeEach(() => {
    // useEffect won't run on server
    useEffectSpy = jest.spyOn(React, 'useEffect')
    useEffectSpy.mockImplementation(() => jest.fn())
  })

  afterEach(() => {
    useEffectSpy.mockRestore()
  })

  test('ssr', () => {
    const tree = renderer(<Provider onClose={() => {}} isOpen><Menu><div>content</div></Menu></Provider>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
