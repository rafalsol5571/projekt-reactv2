import styles from './Card.module.scss'
import clsx from 'clsx';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';

const Card = ({ title, isFavorite, id }) => {

    const dispatch = useDispatch();


    const classChange = () => {
        dispatch(toggleCardFavorite(id));
      };

    const removedCard = () => {
        dispatch(removeCard(id));
    }

      
    return (
        <li className={styles.card}>{title}
            <div>
            <button type="button" onClick={ classChange } className={clsx(styles.button_star, isFavorite && styles.active) }>
                <span className='fa fa-star-o'></span>
            </button>
            <button type="button" onClick={ removedCard } className={styles.button_trash}>
                <span className='fa fa-trash'></span>
            </button>
            </div>
        </li>
    )}

export default Card;