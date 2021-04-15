import './EndOfLeague.css'




const EndOfLeague = (props) => {

    const onClickEndHandler = () => {
        fetch('http://localhost:8080/admin/endofleague', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': `${props.token}`
            }
        })
        .then(res => res.json())
        .catch(err => console.error(err))
    }

    return(
        <div className="end-wrapper">
            <h1>Край на лигата</h1>
            <p>С натискане на долния бутон ще поставите край на лигата и всички мачове и предизвикателства ще бъдат изтрити</p>

            <button className="end-of-league" onClick={onClickEndHandler}>Край на лигата</button>
        </div>
    );
}

export default EndOfLeague