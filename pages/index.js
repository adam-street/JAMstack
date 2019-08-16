import fetch from 'isomorphic-unfetch';
import Layout from '../components/layout';
import ShowLink from '../components/showLink';

const Site = props => (
    <Layout>
        {console.log(props)}
        <h1>My Site</h1>
        <ul>
            {props.shows.map(show => (
                <li key={show.id}>
                    <ShowLink id={show.id} name={show.name}></ShowLink>
                </li>
            ))}
        </ul>
        <style jsx>{`
         h1,
         a {
           font-family: 'Arial';
         }
 
         ul {
           padding: 0;
         }
 
         li {
           list-style: none;
           margin: 5px 0;
         }
 
         a {
           text-decoration: none;
           color: blue;
         }
 
         a:hover {
           opacity: 0.6;
         }
        `}
        </style>
    </Layout>
)

Site.getInitialProps = async () => {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    return {
        shows: data.map(entry => entry.show)
    };
};

export default Site;
