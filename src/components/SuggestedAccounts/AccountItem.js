import React from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';
import { Wrapper as ProperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

const AccountItem = () => {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <ProperWrapper>
                    <AccountPreview />
                </ProperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} render={renderPreview} placement="bottom">
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src={
                            'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/3f78a71c1ec8ac695ea1d27b5ba9d283~c5_100x100.jpeg?lk3s=a5d48078&nonce=2921&refresh_token=9b0f806e5790456cf8637f72ffc94d78&x-expires=1722672000&x-signature=Q9tqNnrHGkLughtEFJBd4u7Zv4c%3D&shp=a5d48078&shcp=81f88b70'
                        }
                        alt="avatar"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>BarcaBarcaBarca</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Barcelona</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
};

export default AccountItem;
