import Loader from '../Loader/Loader';

import styles from './Preloader.module.css';

const Preloader = (): JSX.Element => {
    return (
        <div className={styles.overlay}>
            <Loader />
        </div>
    );
};

export default Preloader;
