import React from 'react';
import {Link} from 'react-router-dom';
import BadgeListElement from '../components/BadgeListElement';
import api from '../api';

import './styles/BadgeList.css';

import confLogo from '../images/badge-header.svg';

class BadgeList extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({
            loading: true,
            error: null
        });
        try {
            const data = await api.badges.list();
            this.setState({
                loading: false,
                data: data
            });
        } catch (error) {
            this.setState({
                loading: false,
                error: error
            });
        }
    }

    render() {
        if (this.state.loading) {
            return 'Loading...';
        }
        if (this.state.error) {
            return `error: ${this.state.error.message}`
        }
        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badge/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>
                    <BadgeListElement badges={this.state.data}/>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeList;