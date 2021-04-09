import './ChallengeTable.css'
import { useState, useEffect } from 'react'

const ChallengeTable = (props) => {

    const [players, setPlayers] = useState({})
    const [hasErrors, setHasErrors] = useState(false)

    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `${props.data.token}`
        }
    }

    async function fetchData() {
        const res = await fetch(`http://localhost:8080/player/challengeList/${props.data.user.id}`, options);
        res
          .json()
          .then(res => setPlayers({res}))
          .catch(err => setHasErrors(err));
      }

      useEffect(() => {
        fetchData()
     }, []);

    return (
        <div class="container">
        <div class="row">
            <div class="col-sm">
                <div class="table-header">
                    <p>Лист с играчи за предизвикване {props.data.user.name}</p>
                    <div class="divTable blueTable">
                        <div class="divTableHeading">
                            <div class="divTableRow">
                                <div class="divTableHead">Ранг</div>
                                <div class="divTableHead">Име</div>
                                <div class="divTableHead">Предизвикай</div>
                            </div>
                        </div>
                        <div class="divTableBody"> 
                            {players.res ?
                            players.res.map(pl => {
                            <div class="divTableRow" key={pl.id}>
                                <div class="divTableCell players" >{pl.rank}</div>
                                <div class="divTableCell players" >{pl.fullName}</div>
                                <div class="divTableCell players" ><button>предизвикай</button></div>
                            </div>
                            }) 
                            :
                            <div class="divTableRow">
                                <div class="divTableCell players" ></div>
                                <div class="divTableCell players" ></div>
                                <div class="divTableCell players" ><button>предизвикай</button></div>
                            </div> 
                            }
                        </div>
                    </div>
                </div>
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

export default ChallengeTable;