import React from 'react';

// Config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config';

// Components
import HeroImage from './HeroImage';
import SearchBar from './SearchBar';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import Button from './Button';

// Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

// Images
import NoImage from '../images/no_image.jpg';

const Home = () => {
    const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();

    if (error) return <div>Something went wrong...</div>;

    return (
        <>
            {!searchTerm && state.results[0] &&
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].title}
                    text={state.results[0].overview}
                />
            }

            <SearchBar setSearchTerm={setSearchTerm} />

            <Grid header={searchTerm ? 'Search Results' : 'Popular Movies'}>
                {state.results.map(movie => (
                    <Thumb
                        key={movie.id}
                        image={movie.poster_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                            : NoImage
                        }
                        clickable
                        movieId={movie.id}
                    />
                ))}
            </Grid>

            {loading && <Spinner />}

            {state.page < state.total_pages && !loading &&
                <Button text='Load More' callback={() => setIsLoadingMore(true)} />
            }
        </>
    );
};

export default Home;
