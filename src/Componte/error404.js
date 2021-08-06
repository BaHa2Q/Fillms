import React from 'react'
import './css/404.css'

function error404() {
    return (
        <>
        <blockquote>
            <h2>Error 404 Not Found</h2>
            <p>Our apologies for the temporary inconvenience. The requested URL was not found on this server.  We suggest you try one of the links below:</p>
            <ul>
                <li><b>Verify url and typos</b> - The web page you were attempting to view may not exist or may have moved - try <em>checking the web address for typos</em>.</li>
                <li><b>E-mail us</b> - If you followed a link from somewhere, please let us know at <a href="mailto:webmaster@example.com">webmaster@example.com</a>. Tell us where you came from and what you were looking for, and we'll do our best to fix it.</li>
            </ul>
        </blockquote>
        </>
    )
}

export default error404
