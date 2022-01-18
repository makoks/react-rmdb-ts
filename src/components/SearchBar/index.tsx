import React, { useState, useEffect, useRef } from 'react';

// Styles
import { Wrapper, Content } from './SearchBar.styles';

// Images
import searchIcon from '../../images/search-icon.svg';

// Types
type Props = {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<Props> = ({ setSearchTerm }) => {
    const [state, setState] = useState('');

    const initial = useRef(true);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => setSearchTerm(state), 500);

        return () => clearTimeout(timer);
    }, [state, setSearchTerm]);

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input
                    type='text'
                    placeholder='Search movie'
                    value={state}
                    onChange={event => setState(event.currentTarget.value)}
                />
            </Content>
        </Wrapper>
    );
};

export default SearchBar;
