import Link from 'next/link';

const showLink = props => (
    <div>

        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.name}</a>
        </Link>
        <style jsx>{`
            li {
            list-style: none;
            margin: 5px 0;
            }
            
            a {
                text-decoration: none;
                color: blue;
                font-family: 'Arial';
            }
            
            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </div>
);

export default showLink;