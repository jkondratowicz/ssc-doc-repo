import { gql, useQuery } from 'urql';
const GetProjectsQuery = gql`
  query GetProjects {
    projects {
      id
      title
      coverImage {
        id
        url
      }
      tags {
        name
      }
      documentsCount
    }
  }
`;

export function useGetProjects() {
  const [result, reexecuteQuery] = useQuery({
    query: GetProjectsQuery,
  });

  const { data, fetching, error } = result;

  return { data, fetching, error, reexecuteQuery };
}
