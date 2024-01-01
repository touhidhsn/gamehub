import { Heading } from '@chakra-ui/react';
import useGameQueryStore from '../store';
import usePlatform from '../hooks/usePlatform';
import useGenre from '../hooks/useGenre';

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ''}  ${genre?.name || ''} Games `;

  return (
    <Heading
      as='h1'
      paddingLeft={10}
      marginY={5}
    >
      {heading}
    </Heading>
  );
};

export default GameHeading;
