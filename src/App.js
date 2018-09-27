import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import {render} from "react-dom";
import logo from './logo-uf.svg';
import bkgdImg from './uf-campus.jpg'
//import logo-uf from './src/logo-uf.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value

    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })

  }

  render() {



    return (



      <div className="bg">
        <div className="topRow">
          <a href="www.ufl.edu">
            <img src={logo} height="31" width="46" />
        </a>
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
          />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                selectedBuilding={this.state.selectedBuilding}
                data={this.props.data}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>

    );
  }
}

export default App;
