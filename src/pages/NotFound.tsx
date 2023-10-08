import React, { useEffect } from 'react';

function NotFound() {
    useEffect(() => {
        window.scrollTo(0, 0)
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