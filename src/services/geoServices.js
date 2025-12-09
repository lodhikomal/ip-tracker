export const fetchGeo = async (query) => {
    const url = `https://ipapi.co/${encodeURIComponent(query)}/json/`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.error) {
        throw new Error(data.reason || "Invalid IP or domain");
    }

    // Normalize the output to match your previous data format
    return {
        status: "success",
        query: data.ip || query,
        isp: data.org,
        timezone: data.timezone,
        country: data.country_name,
        regionName: data.region,
        city: data.city,
        lat: data.latitude,
        lon: data.longitude,
    };
};



// encodeURIComponent is a built-in JavaScript function that safely converts any string into a valid URL-friendly format.