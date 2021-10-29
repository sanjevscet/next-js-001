import Link from 'next/link'

export default function Test() {
    return (
        <>
            <Link href="/"><a>Home</a></Link>
            &nbsp;
            &nbsp;
            <Link href="/about"><a>About</a></Link>
            <h2>Test</h2>
        </>
    );
}