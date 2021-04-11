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

    async onClickResultButton(id) {
        const url = `http://localhost:8080/game/setresult/`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `${this.props.data.token}`
                    },
            body: JSON.stringify({gameId: id})
        });
        const data = await response.json();
        this.setState({message: data});
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
                        <p>Предстоящи мачове гр. Шумен</p>                            
                            <div className="divTable blueTable"/>
                                    <div className="divTableHeading">
                                        <div className="divTableRow">
                                            <div className="divTableHead">Мач</div>
                                            <div className="divTableHead">Град</div>
                                            <div className="divTableHead">Корт</div>
                                            <div className="divTableHead">Час</div>
                                            <div className="divTableHead">Рез</div>
                                        </div>
                                    </div>
                                {this.state.games.map(g =>
                                    <div className="divTableBody">                                
                                        <div className="divTableRow" key={g.id}>
                                            <div className="divTableCell players">{g.firstPlayerFullName} : {g.secondPlayerFullName}</div>
                                            <div className="divTableCell players">{g.city}</div>
                                            <div className="divTableCell players">{g.place}</div>
                                            <div className="divTableCell players">{g.time}</div>
                                            {this.props.data.user.role === 'ADMIN' ?
                                                <div className="divTableCell players"><button className="result-button" onClick={this.onClickResultButton.bind(this, g.id)}>Резултат</button></div>
                                            :
                                            <div></div>
                                            }
                                        </div>                                   
                                    </div>
                                )}
                            </div>
                            {/* <div class="table-header">
                                <p>Изиграни мачове гр. Шумен</p>                            
                                    <div className="divTable blueTable">
                                        <div className="divTableHeading">
                                            <div className="divTableRow">
                                                <div className="divTableHead">Мач</div>
                                                <div className="divTableHead">Резултат</div>
                                            </div>
                                        </div>
                                {this.state.finished.map(fg =>
                                        <div className="divTableBody">                                
                                            <div className="divTableRow" key={fg.id}>
                                                <div className="divTableCell players">{fg.firstPlayerFullName} : {fg.secondPlayerFullName}</div>
                                                <div className="divTableCell players">{fg.firstGames} : {fg.secondGames}</div>
                                            </div>                                   
                                        </div>
                                        )}
                                    </div>                       
                            </div> */}
                    </div>

                    
            }
            
        </div>
        );
    }
    
}

export default GamesTable;