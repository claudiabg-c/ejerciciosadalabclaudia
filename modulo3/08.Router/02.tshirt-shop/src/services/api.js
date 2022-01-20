const callToApi = () => {
  return fetch("https://beta.adalab.es/ejercicios-extra/api/eshop/v2/cart.json")
    .then((response) => response.json())
    .then((data) => {
      const dataTshirts = data.cart.items.map((tshirt) => {
        return {
          name: tshirt.name,
          price: tshirt.price,
          img: tshirt.imageUrl,
          description: tshirt.description,
          sizes: tshirt.sizes,
        };
      });
      return dataTshirts;
    });
};

export default callToApi;
