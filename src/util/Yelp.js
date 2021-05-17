
const apiKey="pzGCkH6fOJOUzZjZ4RX2vhSfuqOnOF45tqhSNFt097t31jBhixHLCVeSniLhJfAgoYGYvk7IAqTgFO1XA6U1BwHp_QBD-GOFIvWGv-cw_gnJlTLMrj6woo1T09SBYHYx"

const Yelp = {
  async search(term, location, sortBy) {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
    const jsonResponse = await response.json()
    try {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
            url:business.url
          };
        });
      } else { console.log('hello world')}
    }
    catch(e) { console.error(`Hello World ${e}`); };
  }
};


export default Yelp;

