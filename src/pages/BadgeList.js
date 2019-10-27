import React from 'react';
import {Link} from 'react-router-dom';
import BadgeListElement from '../components/BadgeListElement';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import LoaderThreePoints from '../components/LoaderThreePoints';
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
		this.intervalId = setInterval(this.fetchData, 5000);
	}

	componentWillUnmount() {
		clearInterval(this.intervalId);
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
		if (this.state.loading && !this.state.data) {
			return <PageLoading/>;
		}
		if (this.state.error) {
			return <PageError error={this.state.error}/>
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
					{this.state.loading && <LoaderThreePoints/>}
				</div>
			</React.Fragment>
		);
	}
}

export default BadgeList;