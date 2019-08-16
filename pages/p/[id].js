import Markdown from 'react-markdown';
import fetch from 'isomorphic-unfetch';
import Layout from '../../components/layout';

const Post = props => (
  <Layout>
    <style jsx global>{`
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>
  </Layout>
);

export default Post;