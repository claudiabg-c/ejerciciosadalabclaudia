const callToApi = (searchSerie) => {
  return fetch(`https://api.tvmaze.com/search/shows?q=${searchSerie}`)
    .then((response) => response.json())
    .then((data) => {
      const resultSearch = data.map((eachShow) => {
        return {
          title: eachShow.show.name,
        };
      });
      return resultSearch;
    });
};

export default callToApi;
