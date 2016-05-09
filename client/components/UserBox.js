import React, { PropTypes, Component } from 'react';
import MenuList from './MenuList';
import Toggle from './Toggle';

const UserBox = function ({ username, role, avatar }) {
    const wrap = (
        <div
            className="b-user-box__wrap"
            onClick={this.handleClick}
        >
            <div className="b-user-box__left">
                <span className="b-user-box__username">
                    @{username}
                </span>
                <span className="b-user-box__role">
                    {role}
                </span>
            </div>
            <div className="b-user-box__right">
                <img
                    className="b-user-box__avatar"
                    src={avatar}
                />
            </div>
        </div>
    );

    const menu = (
        <div className="b-user-box__menu">
            <MenuList
                items={[
                    { title: 'Sign out', href: '/sign-out' }
                ]}
            />
        </div>
    );

    return (
        <div className="b-user-box">
            <Toggle
                link={wrap}
                content={menu}
            />
        </div>
    );
};

UserBox.defaultProps = {
    avatar: 'http://placehold.it/38x38'
};

UserBox.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
};

export default UserBox;