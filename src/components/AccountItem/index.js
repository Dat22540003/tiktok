import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/45cdacbd2595b03bfe09605f32520a2b~c5_300x300.webp?lk3s=a5d48078&nonce=26776&refresh_token=f3e90234a58454d5e9cadd04f6787441&x-expires=1722092400&x-signature=AlSNhyJ7pYJ4oQ9pnah%2Bw2o5Dcs%3D&shp=a5d48078&shcp=c1333099"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>user name</span>
            </div>
        </div>
    );
};

export default AccountItem;
