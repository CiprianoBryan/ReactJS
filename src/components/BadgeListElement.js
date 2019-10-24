import React from 'react';
import {Link} from 'react-router-dom';
import './styles/BadgeListElement.css';

class BadgeListItem extends React.Component {
    render() {
        return (
            <div className="BadgeListItem">
                <img
                    className="BadgeListItem__avatar" 
                    src={this.props.badge.avatarUrl}
                    alt="Avatar"
                />
                <div>
                    <strong>{this.props.badge.firstName} {this.props.badge.lastName}
                    </strong>
                    <br/>@{this.props.badge.twitter}
                    <br/>{this.props.badge.jobTitle}
                </div>
            </div>
        );
    }
}

class BadgeListElements extends React.Component {
    render() {
        if (this.props.badges.length == 0) {
            return (
                <div>
                    <h3>No badge were found</h3>
                    <Link className="btn btn-primary" to="/badge/new">
                        Create new badge
                    </Link>
                </div>
            );
        }
        return (
            <div className="BadgeListElement">
                <ul className="list-unstyled">
                    {this.props.badges.map(badge => {
                        return (
                            <li key={badge.id}>
                                <BadgeListItem badge={badge}/>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default BadgeListElements;