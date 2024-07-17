const Person = (props) => {
    let reply;
    let name;

    // if (props.age < 18) {
    //     reply = "you must be 18"
    // } else {
    //     reply = "please go vote"
    // }

    reply = age < 18 ? "you must be 18" : "please go vote!";

    if (props.name.length < 8) {
        name = props.name
    } else {
        name = props.name.slice(0,6)
    }

    return (
        <div>
            <p>Learn some information about this person</p>
            <h3>{name}, { reply }</h3>
            <h3>Hobbies</h3>
            <ul>{props.hobbies.map(h => (
                <li>
                    <p>{h}</p>
                </li>
                ))}
            </ul>
        </div>
    )
}