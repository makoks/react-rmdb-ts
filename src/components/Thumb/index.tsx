import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import { Image, ClickableImage } from './Thumb.styles';

// Types
type Props = {
    image: string;
    movieId?: number;
    clickable: boolean;
}

const Thumb: React.FC<Props> = ({ image, movieId, clickable }) => {
    return clickable ? (
        <div>
            <Link to={`/${movieId}`}>
                <ClickableImage src={image} alt='movie-poster' />
            </Link>
        </div>
    ) : (
        <div>
            <Image src={image} alt='movie-poster' />
        </div>
    );
};

export default Thumb;
