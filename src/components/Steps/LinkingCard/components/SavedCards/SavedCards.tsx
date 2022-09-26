import styles from './SavedCards.module.css';
import { Button } from '@alfalab/core-components/button';
import { ReactComponent as PlusIcon } from 'assets/images/linking_card/plus_icon.svg';
import { CARD_TYPES } from '../../constants';
import { ReactComponent as ArrowIcon } from 'assets/images/linking_card/arrow.svg';
import { useAtom } from 'jotai';
import { _activeSavedCard } from 'store/store';
import cn from 'classnames';
import { SavedCardsProps } from 'types/models';

export const SavedCards = ({ onClick, hideBindButton, cards }: SavedCardsProps): JSX.Element => {
    const [activeCard, setActiveCard] = useAtom(_activeSavedCard);
    const onItemClick = (card: IUserCard) => {
        setActiveCard(card);
    };

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>У Вас есть сохранённая карта</h2>
            <p className={styles.description}>Можете использовать её или добавить другую карту</p>
            <ul className={styles.card_list}>
                {cards?.map((item, i) => {
                    const cardType = CARD_TYPES[item.cardMask.charAt(0)] || '';
                    const isActive = activeCard?.cardMask === item.cardMask;

                    return (
                        <li
                            className={cn(styles.card_item, {
                                [styles.card_item_active]: isActive,
                            })}
                            key={i.toString()}
                            onClick={() => onItemClick(item)}
                        >
                            <div className={styles.card_right}>
                                <div className={styles.card_img}>{cardType}</div>
                                <div>••••{item.cardMask.slice(-4)}</div>
                            </div>
                            <ArrowIcon />
                        </li>
                    );
                })}
            </ul>
            {!hideBindButton && (
                <Button block leftAddons={<PlusIcon />} onClick={onClick} size="xs" view="tertiary">
                    Привязать карту
                </Button>
            )}
        </div>
    );
};
