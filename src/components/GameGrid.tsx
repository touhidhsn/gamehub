import { Box, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import useGames from '../hooks/useGames';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } =
    useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <Box padding={10}>
      {error && <Text>{error.message}</Text>}
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}

          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
     
    </Box>
  );
};

export default GameGrid;
