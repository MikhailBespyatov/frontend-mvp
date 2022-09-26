import { useAtom } from 'jotai';
import clsx from 'clsx';

import { Badge } from '@alfalab/core-components/badge';
import { Typography } from '@alfalab/core-components/typography';

import backbtn from 'assets/images/layout/backBtn.svg';
import backbtnBlack from 'assets/images/layout/backBtnBlack.svg';

import { DESKTOPMENU, MOBILEMENU } from '../../constants';

import { isDarkMode, _step } from 'store/store';

import styles from './Header.module.css';
import { ApplicationStep } from 'store/store.types';

const { DUPLICATE, VERIFY, CONFIRM } = ApplicationStep;

export default function Header(props: IHeader): JSX.Element {
    const [step, setStep] = useAtom(_step);

    const mobileMenu: string[] = MOBILEMENU;
    const desktopMenu: string[] = DESKTOPMENU;

    const isDuplicate = step === DUPLICATE;

    const goBack = () => {
        if ([VERIFY, DUPLICATE].includes(step)) {
            window.location.href = props.link;
        } else {
            setStep(step - 1);
        }
    };

    return (
        <div className={clsx(styles.header_container, { [styles.header_container_center]: !isDuplicate })}>
            <div className={styles.header_subcontainer}>
                <div className={styles.title_backbtn_container}>
                    {[DUPLICATE, VERIFY, CONFIRM].includes(step) && (
                        <div data-test-id="header-button-go-back" onClick={goBack}>
                            <img alt="Back" src={isDarkMode ? backbtnBlack : backbtn} />
                            <span>{mobileMenu[isDuplicate ? 0 : step - 1]}</span>
                        </div>
                    )}
                </div>

                {!isDuplicate && (
                    <div className={styles.steps}>
                        <div className={styles.mobile}>
                            <span>{step === ApplicationStep.FINAL ? 4 : step}</span>
                            /4
                        </div>
                        <div className={styles.desktop}>
                            {desktopMenu.map((menuItem, i) => {
                                const className =
                                    step === i + 1 ||
                                    (step === ApplicationStep.FINAL && i === 3 && styles.activeBadge) ||
                                    styles.badge;

                                return (
                                    <div key={i}>
                                        <Badge
                                            className={(className as string) || undefined}
                                            content={i + 1}
                                            view="count"
                                        />
                                        <Typography.Title className={styles.title} tag="h6" view="xsmall">
                                            {menuItem}
                                        </Typography.Title>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
                {/* <Timer /> */}
            </div>
        </div>
    );
}
