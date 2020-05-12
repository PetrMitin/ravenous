const apiKey = 'gqII128WSYCIYxmYw59mcEftRByKUsmac1WfRwUikX_gh22Gdix7k-u00HbDJ5ce4hFjDb1FaAC_c8zFS9vQz_RYM1zy9QvWPjSHmNh-b2z_Kyh_8F_akzQBPYcTXnYx';

const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(((business) => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                        url: business.url,
                        coordinates: business.coordinates
                    };
                }));
            }
        })
    }
}

export default Yelp;
 