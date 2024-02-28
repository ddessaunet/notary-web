import React from "react";

export default function Content({children}: {children: React.ReactNode}) {
    return (
        <div id="p-content" className="l-content t-content m-shadow">
            {children}
        </div>
    )
}
