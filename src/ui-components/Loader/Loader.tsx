import styles from './Loader.module.css';

const Loader = (): JSX.Element => {
    return (
        <div className={styles.overlay}>
            <p>Проверяем</p>
            <div className={styles.loaderContainer}>
                <div className={styles.loader}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
