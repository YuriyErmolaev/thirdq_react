import { getGistsLoading,  GISTS_LOADING} from '../actions';

it("should return object with certain type", () => {
    const expected = {
      type: GISTS_LOADING
    }; 
    const received = getGistsLoading();
    expect(received).toEqual(expected);
});
 