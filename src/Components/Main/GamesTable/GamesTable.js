import './GamesTable.css';
import { Component } from 'react'

class GamesTable extends Component {

    constructor (props) {
        super(props)
        this.state = {loading: true}
    }

    async componentDidMount(){
        const url = `http://localhost:8080/game/getall`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `${this.props.data.token}`
                    }
                }
            );
        const data = await response.json();
        this.setState({games: data, loading: false});
    }


    render() {
        return(
        <div>
            {this.state.loading ?
                <div>
                    <p>Loading...</p>
                </div>
                :
                <div>
                    <div class="table-header">
                        <p>Предстоящи мачове гр. </p>                            
                            <div class="divTable blueTable"/>                            
                                
                                    <div class="divTableHeading">
                                        <div class="divTableRow">
                                            <div class="divTableHead">Мач</div>
                                            <div class="divTableHead">Град</div>
                                            <div class="divTableHead">Корт</div>
                                            <div class="divTableHead">Час</div>
                                            <div class="divTableHead">Рез</div>
                                        </div>
                                    </div>
                                {this.state.games.map(g =>
                                    <div class="divTableBody">                                
                                        <div class="divTableRow" key={g.id}>
                                            <div class="divTableCell players">{g.firstPlayerFullName} : {g.secondPlayerFullName}</div>
                                            <div class="divTableCell players">{g.city}</div>
                                            <div class="divTableCell players">{g.place}</div>
                                            <div class="divTableCell players">{g.time}</div>
                                            {this.props.data.user.role === 'ADMIN' ?
                                                <div class="divTableCell players"><button>Резултат</button></div>
                                            :
                                            <div></div>
                                            }
                                            
                                        </div>                                   
                                    </div>
                                )}
                                
                                
                            </div>                             
                    </div>
                
            }
            
        </div>
        );
    }
    
}

export default GamesTable;