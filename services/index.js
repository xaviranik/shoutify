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
