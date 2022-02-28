const Yelp = {
    async searchYelp(term, location, sortBy) {
        try {
            const response = await fetch(`https://thingproxy.freeboard.io/fetch/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
                    'Access-Control-Allow-Origin': '*'
                },
            })
            const jsonRes = await response.json();
            if (jsonRes.businesses) {
                return jsonRes.businesses.map((business => {
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
            else {
                throw new Error(jsonRes.error.description || 'Unexpected error! Please refresh page!')
            }
        } catch (e) {
            console.log(e)
            alert(e.message)
            return []
        }
    }
}

export default Yelp;
 