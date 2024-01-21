import { Button } from 'react-daisyui';
import { useGetProjects } from '../hooks/useGetProjects';
export const HomePage = () => {
  const { data, fetching, error, reexecuteQuery } = useGetProjects();
  return (
    <>
      <h1>Test</h1>
      <Button onClick={() => reexecuteQuery()}>test</Button>
      <pre>{JSON.stringify({ data, fetching, error }, null, 2)}</pre>
    </>
  );
};
