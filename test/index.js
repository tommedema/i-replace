/* global describe, it */
require('should')

const iReplace = require('../src')

describe('iReplace', () => {
  it('should replace when case matches', () => {
    const input = 'monkeys live in temples'
    const output = iReplace(input, 'eys', 's')
    output.should.equal('monks live in temples')
  })
  it('should replace when case does not match', () => {
    const input = 'monkeys live in temples'
    const output = iReplace(input, 'TEMPLES', 'the jungle')
    output.should.equal('monkeys live in the jungle')
  })
  it('should replace a single occurence without multi false (default)', () => {
    const input = 'monkeys with keys live in temples'
    const output = iReplace(input, 'eys', 's')
    output.should.equal('monks with keys live in temples')
  })
  it('should replace multiple occurrences with multi true', () => {
    const input = 'zzz\nz'
    const output = iReplace(input, 'z', 'br', true)
    output.should.equal('brbrbr\nbr')
  })
  it('should replace with regexp replacement strings', () => {
    const input = 'monkeys live in temples'
    const output = iReplace(input, 'eys', '$1')
    output.should.equal('monkeys live in temples')
  })
})
