import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/searchStringRedux';

const SearchForm = () => {

    const [searchString, setSearchString] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(searchString))
        setSearchString('')
      }


    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={searchString} onChange={e => setSearchString(e.target.value)} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );

  };

  export default SearchForm;