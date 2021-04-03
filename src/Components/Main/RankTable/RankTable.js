import './RankTable.css';

const RankTable = () => {

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
                                <div class="divTableRow">
                                    <div class="divTableCell players">1</div>
                                    <div class="divTableCell players">Янко Янков</div>
                                </div>
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