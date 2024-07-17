const Tweet = (props) => {
    return (
        <div className="tweet">
            <h4 className="username">{props.username}</h4>
            <h4 className="name">{props.name}</h4>
            <h5 className="date">{props.date}</h5>
            <p className="message">{props.message}</p>
        </div>
    )
}