import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <Heading fontSize={'2xl'} marginBottom={3}>
        Genre
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id}>
            <HStack>
              <Image
                boxSize='32px'
                borderRadius={8}
                paddingY='5px'
                src={getCroppedImageUrl(genre.image_background)}
                objectFit={'cover'}
              />

              <Button
                whiteSpace={'normal'}
                textAlign={'left'}
                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                onClick={() => onSelectGenre(genre)}
                fontSize='lg'
                variant='link'>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
