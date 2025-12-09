import { useState, CSSProperties } from "react";
import { BeatLoader, ClipLoader, PropagateLoader } from "react-spinners";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

function Loader() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#2b6cff");

    return (
        <div className="sweet-loading">


            <BeatLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}
export default Loader;