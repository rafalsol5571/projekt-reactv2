import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { addColumn } from '../../redux/columnsRedux';



const ColumnForm = ({listId}) => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ listId, title, icon}));
        setTitle('');
        setIcon('');
     };

    const dispatch = useDispatch();

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            Title: <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
            Icon: <TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>
                Add column
            </Button>
        </form>
	);
};

export default ColumnForm;