import Link from 'next/link';
import Router from 'next/router';

import { useEffect, useState } from 'react';

function about() {
    const [name, setName] = useState('');

    useEffect(() => {
        const confirmationMessage = 'Changes you made may not be saved.';
        const beforeUnloadHandler = (e) => {
            (e || window.event).returnValue = confirmationMessage;
            return confirmationMessage; // Gecko + Webkit, Safari, Chrome etc.
        };
        const beforeRouteHandler = (url) => {
            if (Router.pathname !== url && !confirm(confirmationMessage)) {
                // to inform NProgress or something ...
                Router.events.emit('routeChangeError');
                // tslint:disable-next-line: no-string-throw
                throw `Route change to "${url}" was aborted (this error can be safely ignored). See https://github.com/zeit/next.js/issues/2476.`;
            }
        };
        if (name) {
            window.addEventListener('beforeunload', beforeUnloadHandler);
            Router.events.on('routeChangeStart', beforeRouteHandler);
        }
        return () => {
            window.removeEventListener('beforeunload', beforeUnloadHandler);
            Router.events.off('routeChangeStart', beforeRouteHandler);
        };
    });

    return (
        <div>
            <Link href="/"><a>Home</a></Link>
            &nbsp;
            &nbsp;
            <Link href="/test"><a>Test</a></Link>
            <h1> About</h1>
            <p> A javascript programmer</p>
            <input onChange={e => setName(e.target.value)} />

            <img src="https://raw.githubusercontent.com/sanjevscet/next-js-001/main/static/js-logo.jpg" alt="js-logo" />
        </div>
    );
}

export default about;