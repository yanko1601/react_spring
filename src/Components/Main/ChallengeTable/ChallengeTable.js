import './ChallengeTable.css'
import { Component } from 'react'

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
        const data = {
            "firstPlayerId": id,
            "secondPlayerId": this.props.data.user.id
        }

        fetch('http://localhost:8080/game/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': `${this.props.data.token}`
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(resdata => this.setState({message: resdata.message}))
        .catch(err => console.error(err))

    }

    onClickDeclineButton(id) {
        const data = {
            "challengingPlayerId": id,
            "challengedPlayerId": this.props.data.user.id
        }

        fetch('http://localhost:8080/challenge/decline', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': `${this.props.data.token}`
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(resdata => this.setState({message: resdata.message}))
        .catch(err => console.error(err))

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
        .then(resdata => this.setState({message: resdata.message}))
        .catch(err => console.error(err))
        
    }

    render () {
        return (
            <div className="container">
            <div className="row">
                {this.state.message ?
                    <div className="challenge-message">
                        <p>{this.state.message}</p>
                    </div>
                    :
                    <div></div>
                }
                <div className="col-sm">
                    {this.state.loading ? 
                        (<div>
                            <p>Loading...</p>
                        </div>)
                        :
                        (
                        <div className="table-header">
                            <p>???????? ?? ???????????? ???? ?????????????????????????? {this.props.data.user.name}</p>
                        <div className="divTable blueTable">
                            <div className="divTableHeading">
                                <div className="divTableRow">
                                    <div className="divTableHead">????????</div>
                                    <div className="divTableHead">??????</div>
                                    <div className="divTableHead">??????????????????????</div>
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
                                                    <p className="right-column">?????????????????????? ????</p>
                                                    <button className="accept-button" onClick={this.onClickReceiveButton.bind(this, pl.id)}>????????????</button>
                                                    <button className="decline-button" onClick={this.onClickDeclineButton.bind(this, pl.id)}>????????????</button>
                                                </div>
                                                :
                                                pl.challenged ?
                                                <div>
                                                    <p className="right-column">??????????????????????...</p>
                                                </div>
                                                :
                                                pl.haveMatch ?
                                                <div>
                                                    <p className="right-column">?????????? ???????? ??????</p>
                                                </div>
                                                :
                                                <button className="chall-button" onClick={this.onClickChallengeButton.bind(this, pl.id)}>??????????????????????</button>                    
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
                        Race to FINAL ????.??????????
                        <div class="divTable blueTable">
                            <div class="divTableHeading">
                                <div class="divTableRow">
                                    <div class="divTableHead">??????</div>
                                    <div class="divTableHead">??????????</div>
                                </div>
                            </div>
                            <div class="divTableBody">
                                <div class="divTableRow">
                                    <div class="divTableCell players">???????? ??????????</div>
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