import React from 'react';

class BuilingList extends React.Component {





	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate } = this.props;

						//console.log(selectedBuilding)



		const buildingList = data
			.filter( building =>{
				//Remove buildings that don't match the filterText
				return building.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			})
			.map(directory => {
				return (
					<tr
					//ref={selectedBuilding => directory.id = selectedBuilding}
					onClick={() => selectedUpdate(directory.id)}
					key={directory.id}>
						<td>{directory.code} </td>
						<td> {directory.name} </td>
					</tr>
				);
			});

		return <div>{buildingList}

		</div>;
	}
}
export default BuilingList;
