import { request, gql } from "graphql-request";

const graphqlEndpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

/**
 * Gets all the shouts from the GraphCMS API
 *
 * @returns {Promise<void>}
 */
export const getShouts = async () => {
  const query = gql`
    query ShoutQuery {
      shoutsConnection {
        edges {
          node {
            author {
              id
              name
              photo {
                url
              }
              bio
            }
            id
            createdAt
            location
            slug
            title
            except
            featured
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const response = await request(graphqlEndpoint, query);

  return response.shoutsConnection.edges;
};

export const getShoutDetails = async (slug) => {
  const query = gql`
    query GetShoutDetails($slug: String!) {
      shout(where: { slug: $slug }) {
        id
        location
        title
        featuredImage {
          url
        }
        author {
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  const response = await request(graphqlEndpoint, query, { slug });

  return response.shout;
};
