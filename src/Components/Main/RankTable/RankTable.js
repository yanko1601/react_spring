import './RankTable.css';
import { useState, useEffect } from 'react'

const RankTable = () => {

    const [players, setPlayers] = useState({})
    const [hasErrors, setHasErrors] = useState(false)

    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
      'Content-Type': 'application/json'
        }
    }

    async function fetchData() {
        const res = await fetch('http://localhost:8080/player/all', options);
        res
          .json()
          .then(res => setPlayers({res}))
          .catch(err => setHasErrors(err));
      }

    useEffect(() => {
       fetchData()
    }, []);

    console.log(players);
    return(
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <div class="table-header">
                        <p>Ранглиста гр.Шумен</p>
                        <div class="divTable blueTable">
                            <div class="divTableHeading">
                                <div class="divTableRow">
                                    <div class="divTableHead">Ранг</div>
                                    <div class="divTableHead">Име</div>
                                </div>
                            </div>
                            <div class="divTableBody">
                                {players.res ? 
                                    players.res.map(x => 
                                        <div class="divTableRow" key={x.id}>
                                            <div class="divTableCell players" >{x.id}</div>
                                            <div class="divTableCell players" >{x.name} {x.lastName}</div>
                                        </div>)
                                        :
                                        <div class="divTableRow">
                                            <div class="divTableCell players" ></div>
                                            <div class="divTableCell players" ></div>
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

export default RankTable;