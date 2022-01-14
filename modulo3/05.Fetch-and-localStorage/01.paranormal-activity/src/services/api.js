const callToApi = () => {
  return fetch("https://api.tvmaze.com/search/shows?q=paranormal")
    .then((response) => response.json())
    .then((response) => {
      const shows = response.map((showData) => {
        return {
          showTitle: showData.show.name,
        };
      });
      return shows;
    });
};

export default callToApi;
