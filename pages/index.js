import Link from 'next/link';

const index = () => (
    <div>
        <Link href="/about"><a>About</a></Link>
        &nbsp;
        &nbsp;
        <Link href="/test"><a>Test</a></Link>
        <h1>Home</h1>
        Welcome to home page
    </div>
);

export default index;