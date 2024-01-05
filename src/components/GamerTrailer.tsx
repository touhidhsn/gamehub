import useTrailers from '../hooks/useTrailers';

interface Props {
  gameId: number;
}

const GamerTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];

  if (!first) return null;

  return first ? (
    <video
      src={first.data[480]}
      poster={first.preview}
      controls
    />
  ) : null;
};

export default GamerTrailer;
