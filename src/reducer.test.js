import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })

  test('ok is incremented', () => {
    const state = initialState
    deepFreeze(state)

    const newState = counterReducer(state, { type: 'OK' })
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0
    })
  })

  test('bad is incremented', () => {
    const state = initialState
    deepFreeze(state)

    const newState = counterReducer(state, { type: 'BAD' })
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 1
    })
  })

  test('state is zeroed', () => {
    const state = {
      good: 1,
      ok: 3,
      bad: 7
    }
    deepFreeze(state)

    const newState = counterReducer(state, { type: 'ZERO' })
    expect(newState).toEqual(initialState)
  })
})
