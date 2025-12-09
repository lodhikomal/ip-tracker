import React from "react";
import "./infocard.css";

export default function InfoCard({ data }) {
    if (!data) return null;

    return (
        <div className="info-card">
            <div>
                <p className="title">IP Address</p>
                <p>{data.query}</p>
            </div>

            <div>
                <p className="title">Location</p>
                <p>{data.city}, {data.regionName}, {data.country}</p>
            </div>

            <div>
                <p className="title">Timezone</p>
                <p>{data.timezone}</p>
            </div>

            <div>
                <p className="title">ISP</p>
                <p>{data.isp}</p>
            </div>
        </div>
    );
}
