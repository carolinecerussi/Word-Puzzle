import wordPuzzleReducer from '../../reducers/word-puzzle-reducer';

//First Test//

describe('wordPuzzleReducer', () => {
 
  test('Should return default state if there is no action type passed into the reducer', () => {
    
    expect(wordPuzzleReducer({}, { type: null })).toEqual({});
  })
});