import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const BlogPage = ({}) => {
  const data = useStaticQuery(query);
  console.log("blogposts: ", data);

  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;
