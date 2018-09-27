import React from 'react';

class ViewBuilding extends React.Component {

	render() {

		const { data, selectedBuilding } = this.props;
		//const bdgID = selectedBuilding.map( id =>{


		//})

		//if (this.props.selectedBuilding != 0){
			//console.log('there was a building selected')
			const viewBuilding = data
			.filter(building => building.id === selectedBuilding).map(building =>{
				return (

							<li key={building.selectedBuilding}>
							 <p>Name: </p>
							 <p>{building.name}</p>
							 <p>Address: </p>
							 <p>{building.address}</p>

							 </li>


				)
			})
		//} else {
			return (



				<div className="selectedBuilding">
					<p>
						{' '}
						<i>Click on a name to view more information</i>
						<ul> {viewBuilding} </ul>
					</p>
				</div>
			);
	//}
	}
}
export default ViewBuilding;
