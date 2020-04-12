import React from 'react'
import renderer from './helper/tests/jest'

import Provider from './Provider'
import Content from './Content'

describe('Content', () => {
  test('default', () => {
    const tree = renderer(<Provider onClose={() => {}} push><Content>content</Content></Provider>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('without push', () => {
    const tree = renderer(<Provider onClose={() => {}}><Content>content</Content></Provider>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('open', () => {
    const tree = renderer(<Provider onClose={() => {}} push isOpen><Content>content</Content></Provider>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('left', () => {
    const tree = renderer(<Provider onClose={() => {}} position='left' push isOpen><Content>content</Content></Provider>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('blur', () => {
    const tree = renderer(<Provider onClose={() => {}} blur push isOpen><Content>content</Content></Provider>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
