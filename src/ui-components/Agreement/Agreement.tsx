import { useState } from 'react';

import { Checkbox } from '@alfalab/core-components/checkbox';

import styles from './Agreement.module.css';

const Agreement = (props: IAgreementProps): JSX.Element => {
    const [activeLink, setActiveLink] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);

    const agreedWithServicePolicy = () => {
        if (count === 1) {
            setCount(0);
        }
        props.check(!props.checked);
    };

    const activateLink = () => {
        setActiveLink(!activeLink);
    };

    const triggerAgreedWithServicePolicy = () => {
        agreedWithServicePolicy();
        setCount(1);
    };

    return (
        <div className={styles.agreement}>
            <Checkbox checked={props.checked} dataTestId={props.dataTestId} onChange={agreedWithServicePolicy} />
            <p>
                <span onClick={triggerAgreedWithServicePolicy}>{props.title}</span>
                <a
                    className={`${activeLink && styles.active}`}
                    href={props.linkUrl}
                    onClick={activateLink}
                    rel="noreferrer"
                    target="_blank"
                >
                    {props.linkedText}
                </a>
            </p>
        </div>
    );
};

export default Agreement;
