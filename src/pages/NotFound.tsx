import React, { useEffect } from 'react';

function NotFound() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      }, []);
      
    return (
        <div className="NotFound">
            <h1>
                404 Not Found
            </h1>
        </div>
    )
}

export default NotFound;