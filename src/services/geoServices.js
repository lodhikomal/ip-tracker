export const fetchGeo = async (query) => {
    const url = `http://ip-api.com/json/${encodeURIComponent(
        query
    )}?fields=status,message,query,isp,timezone,country,regionName,city,lat,lon`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.status !== "success") {
        throw new Error(data.message || "Invalid IP or domain");
    }

    return data;
};

// encodeURIComponent is a built-in JavaScript function that safely converts any string into a valid URL-friendly format.