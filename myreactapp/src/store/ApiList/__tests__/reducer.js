it("returns state with status loading after requestGists action", () => {
    const expected = {
      gists: [],
      request: {
        status: REQUEST_STATUS.LOADING,
        error: null,
      },
    };
 
    const received = reducer(undefined, getGistsRequest());
    expect(received).toEqual(expected);
  });
 