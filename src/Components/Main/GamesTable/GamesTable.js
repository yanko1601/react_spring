import './GamesTable.css';

const GamesTable = () => {
    return(
        <div>
            <div class="table-header">
                Предстоящи мачове
            <div class="divTable blueTable">
                    <div class="divTableHeading">
                        <div class="divTableRow">
                            <div class="divTableHead">Мач</div>
                            <div class="divTableHead"></div>
                        </div>
                    </div>
                    <div class="divTableBody">
                        <div class="divTableRow">
                            <div class="divTableCell players">Янко Янков : Петър Петров</div>
                            <div class="divTableCell players"><button class="btn btn-info">Резултат</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="table-header">
                Завършени мачове
            <div class="divTable blueTable">
                    <div class="divTableHeading">
                        <div class="divTableRow">
                            <div class="divTableHead">Мач</div>
                            <div class="divTableHead">Резултат</div>
                        </div>
                    </div>
                    <div class="divTableBody">
                        <div class="divTableRow">
                            <div class="divTableCell players">Митко Павлов : Иван Иванов</div>
                            <div class="divTableCell players">6 : 4</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GamesTable;