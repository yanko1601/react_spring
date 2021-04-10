import './ChallengeTable.css'
import { useState, useEffect, Component } from 'react'

class ChallengeTable extends Component {

    constructor (props) {
        super(props)
        this.state = {loading: true}
    }

        async componentDidMount(){
            const url = `http://localhost:8080/player/challengeList/${this.props.data.user.id}`;
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
            this.setState({players: data, loading: false});
        }


    onClickReceiveButton(id) {

    }

    onClickDeclineButton(id) {

    }

    onClickChallengeButton(id) {
        const data = {
            "challengingPlayerId": this.props.data.user.id,
            "challengedPlayerId": id
        }

        fetch('http://localhost:8080/challenge/setchallenge', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': `${this.props.data.token}`
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
        
    }

    render () {
        return (
            <div className="container">
            <div className="row">
                <div className="col-sm">
                    {this.state.loading ? 
                        (<div>
                            <p>Loading...</p>
                        </div>)
                        :
                        (
                        <div className="table-header">
                            <p>Лист с играчи за предизвикване {this.props.data.user.name}</p>
                        <div className="divTable blueTable">
                            <div className="divTableHeading">
                                <div className="divTableRow">
                                    <div className="divTableHead">Ранг</div>
                                    <div className="divTableHead">Име</div>
                                    <div className="divTableHead">Предизвикай</div>
                                </div>
                            </div>
                            <div className="divTableBody">
                                {this.state.players.map (pl => 
                                    <div className="divTableRow" key={pl.id}>
                                        <div className="divTableCell players" >{pl.rank}</div>
                                        <div className="divTableCell players" >{pl.fullName}</div>
                                        <div className="divTableCell players" >
                                            {pl.challengedYou ? 
                                                <div>
                                                    <p>Предизвикан си</p>
                                                    <button onClick={this.onClickReceiveButton.bind(this, pl.id)}>Приеми</button>
                                                    <button onClick={this.onClickDeclineButton.bind(this, pl.id)}>Откажи</button>
                                                </div>
                                                :
                                                pl.challenged ?
                                                <div>
                                                    <p>Предизвикан...</p>
                                                </div>
                                                :
                                                pl.haveMatch ?
                                                <div>
                                                    <p>Имате вече мач</p>
                                                </div>
                                                :
                                                <button onClick={this.onClickChallengeButton.bind(this, pl.id)}>Предизвикай</button>                    
                                            }
                                        </div>
                                    </div>
                                )} 
                                
                            </div>
                        </div>
                        </div>
                        )
                    }
                </div>
                {/* <div class="col-sm">
                    <div class="table-header">
                        Race to FINAL гр.Шумен
                        <div class="divTable blueTable">
                            <div class="divTableHeading">
                                <div class="divTableRow">
                                    <div class="divTableHead">Име</div>
                                    <div class="divTableHead">Точки</div>
                                </div>
                            </div>
                            <div class="divTableBody">
                                <div class="divTableRow">
                                    <div class="divTableCell players">Янко Янков</div>
                                    <div class="divTableCell players">10</div>
                                </div>
                            </div>
                        </div>
                    </div>
            
                </div> */}
            </div>
        </div>
        );
    }    
    
}

export default ChallengeTable;