import { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

import NoteFeed from '../../components/NoteFeed';
import { Button } from '../../components/Button';

const GET_NOTES = gql`
  query noteFeed($cursor: String) {
  noteFeed(cursor: $cursor) {
    cursor
    hasNextPage
    notes {
      id
      createdAt
      content
      favoriteCount
      author {
        username
        id
        avatar
      }
    }
  }
}
`;

export default function Home() {
  const {
    data, loading, error, fetchMore,
  } = useQuery(GET_NOTES);

  useEffect(() => {
    document.title = 'Home | Notedly';
  }, []);

  const handleButtonOnclick = () => {
    fetchMore({
      variables: {
        cursor: data.noteFeed.cursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => ({
        noteFeed: {
          cursor: fetchMoreResult.noteFeed.cursor,
          hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
          notes: [
            ...previousResult.noteFeed.notes,
            ...fetchMoreResult.noteFeed.notes,
          ],
          __typename: 'noteFeed',
        },
      }),
    });
  };

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error! Note not found</p>;

  return (
    <>
      <NoteFeed notes={data.noteFeed.notes} />
      {data.noteFeed.hasNextPage && (
        <Button onClick={handleButtonOnclick}>
          Load more
        </Button>
      )}
    </>
  );
}
