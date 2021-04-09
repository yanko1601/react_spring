import './Challenge.css'
import RankTable from '../RankTable/RankTable';
import ChallengeTable from '../ChallengeTable/ChallengeTable';

const Challenge = (props) => {

    const user = props.data.user;
    const token = props.data.token;
    const challData = {
        user: user,
        token: token
    }

    return (
        <div className="challenge-wrapper">
            <div>
                <h1>Предизвикай играч гр. Шумен</h1>
                <div className="table-wrapper">
                    <section className="table-section">
                        <ChallengeTable data={challData}></ChallengeTable>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Challenge;