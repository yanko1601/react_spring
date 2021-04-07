import './Home.css';
import RankTable from '../RankTable/RankTable';
import GamesTable from '../GamesTable/GamesTable';

const Home = (props) => {

   

    return(
        <div className="home-wrapper">
            {props.data.token ? 
            <div>
                <h1>Тенис лига Шумен</h1>
                <div className="table-wrapper">
                    <section className="table-section">
                        <RankTable></RankTable>
                    </section>
                    <section className="table-section">
                        <GamesTable></GamesTable>
                    </section>
                    <section className="table-section">
                        <RankTable></RankTable>
                    </section>
                </div>
            </div>
                : 
                <div>
                    <h1>Home component</h1>
                    <p></p>
                </div>
            }          
            
        </div>
        
    );
}

export default Home;