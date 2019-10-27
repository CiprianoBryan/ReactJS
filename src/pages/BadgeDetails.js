import React from 'react';
import {Link} from 'react-router-dom';

import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

import confLogo from '../images/platziconf-logo.svg';

function BadgeDetails(props) {
    return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo de la conferencia"></img>
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>
                                {props.badge.firstName} {props.badge.lastName}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge
                            firstName={props.badge.firstName}
                            lastName={props.badge.lastName}
                            email={props.badge.email}
                            twitter={props.badge.twitter}
                            jobTitle={props.badge.jobTitle}
                        />
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <Link className="btn btn-primary mb-4" to={`/badge/${props.badge.id}/edit`}>Edit</Link>
                            </div>
                            <div>
                                <button className="btn btn-danger" onClick={props.onOpenModal}>Delete</button>
                                <DeleteBadgeModal 
                                    isOpen={props.modalIsOpen} 
                                    onClose={props.onCloseModal}
                                    onDeleteBadge={props.onDeleteBadge}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BadgeDetails;