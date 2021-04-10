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
                    <section className="ranklist-section">
                        <RankTable></RankTable>
                    </section>
                    <section className="game-section">
                        <GamesTable data={{user: props.data.user, token: props.data.token}}></GamesTable>
                    </section>
                    <section className="points-section">
                        {/* <RankTable></RankTable> */}
                    </section>
                </div>
            </div>
                : 
                <div>
                    <h1>Добре дошли в аматьорската тенис лига</h1>
                    <p>Това е идея, която да Ви помогне да играете любимата игра с хора от вашето ниво</p>
                    <p>След като се регистрирате влизате в ранглистата на вашия град на последното място</p>
                    <p>Можете да предизвиквате за мач само играчи, които са 5 места преди вас или 5 места след вас</p>
                </div>
            }          
            
        </div>
        
    );
}

export default Home;