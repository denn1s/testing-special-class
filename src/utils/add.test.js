import { describe, it, expect } from 'vitest'
import add from './add'

describe('adds two numbers correctly', () => {
  it('adds one plus one and returns two', () => {
    expect(add(1, 1)).toEqual(2)
  })

  it('add 1.1 plus 1.1 and returns 2.2', () => {
    expect(add(1.1, 1.1)).toEqual(2.2)
  })

  it('add 1 plus 2 as string and returns 3 as int', () => {
    expect(add('1', '2')).toEqual(3)
  })
})
