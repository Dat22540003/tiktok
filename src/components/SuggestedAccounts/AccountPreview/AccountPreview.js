import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const AccountPreview = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/3f78a71c1ec8ac695ea1d27b5ba9d283~c5_100x100.jpeg?lk3s=a5d48078&nonce=2921&refresh_token=9b0f806e5790456cf8637f72ffc94d78&x-expires=1722672000&x-signature=Q9tqNnrHGkLughtEFJBd4u7Zv4c%3D&shp=a5d48078&shcp=81f88b70"
                    alt="avatar"
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>BarcaBarcaBarca</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Barcelona</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
};

export default AccountPreview;
