import { BaseModal } from '@alfalab/core-components/base-modal';
import styles from './OldBrowserAlert.module.css';
import { Typography } from '@alfalab/core-components/typography';
import { useState } from 'react';
import { Mq } from '@alfalab/core-components/mq';
import { BottomSheet } from '@alfalab/core-components/bottom-sheet';
import { Button } from '@alfalab/core-components/button';

export const OldBrowserAlert = (): JSX.Element => {
    const [opened, setOpened] = useState(true);
    const onClose = () => {
        setOpened(false);
    };

    return (
        <>
            <Mq query="--mobile">
                <BottomSheet
                    actionButton={
                        <Button block className={styles.closeButtonMobile} onClick={onClose} view="tertiary">
                            Закрыть
                        </Button>
                    }
                    className={styles.bottomSheet}
                    onClose={onClose}
                    open={opened}
                >
                    <div className={styles.containerMobile}>
                        <Typography.Title className={styles.titleMobile} tag="h2">
                            Ваша версия браузера может неправильно отображать некоторые страницы. Для большего удобства
                            советуем обновить или сменить браузер
                        </Typography.Title>
                    </div>
                </BottomSheet>
            </Mq>
            <Mq query="--tablet-s">
                <BaseModal onClose={onClose} open={opened}>
                    <div className={styles.container}>
                        <button className={styles.closeButton} onClick={onClose}></button>
                        <div className={styles.backgroundWrapper}></div>
                        <Typography.Title className={styles.title} tag="h2">
                            Ваша версия браузера может неправильно отображать некоторые страницы
                        </Typography.Title>
                        <Typography.Text className={styles.advice}>
                            Для большего удобства советуем обновить или сменить браузер
                        </Typography.Text>
                    </div>
                </BaseModal>
            </Mq>
        </>
    );
};
