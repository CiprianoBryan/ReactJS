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

function useSearchBadges(badges) {
	const [query, setQuery] = React.useState('');
	const [filteredBadges, setFilteredBadges] = React.useState(badges);

	React.useMemo(() => {
		const response = badges.filter(badge => {
			return `${badge.firstName} ${badge.lastName}`.toLowerCase()
				.includes(query.toLowerCase())
		});
		setFilteredBadges(response);
	}, [badges, query]);

	return {query, setQuery, filteredBadges};
}

function BadgeListElements(props) {
	const handleChange = e => {
		setQuery(e.target.value);
	};

	const badges = props.badges;
	const {setQuery, filteredBadges} = useSearchBadges(badges);

	if (filteredBadges.length === 0) {
		return (
			<div>
				<div className="form-group">
					<label>Filter Badges</label>
					<input 
						className="form-control"
						type="text"
						onChange={handleChange}/>
				</div>
				<h3>No badge were found</h3>
				<Link className="btn btn-primary" to="/badge/new">
					Create new badge
				</Link>
			</div>
		);
	}
	return (
		<div className="BadgeListElement">
			<div className="form-group">
				<label>Filter Badges</label>
				<input 
					className="form-control"
					type="text"
					onChange={handleChange}/>
			</div>
			<ul className="list-unstyled">
				{filteredBadges.map(badge => {
					return (
						<li key={badge.id}>
							<Link className="text-reset text-decoration-none" to={`/badge/${badge.id}`}>
								<BadgeListItem badge={badge}/>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default BadgeListElements;