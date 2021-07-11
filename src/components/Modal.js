export default function Modal(props) {
    const divStyles = {
        color: 'green',
        border: '1px solid gray',
        borderRadius: '10px',
        maxWidth: '50vw',
        maxHeight: '30vh',
        padding: '5rem 0'
    }

    return (
        <div style={divStyles}>
            <h3>{props.message.title}</h3>
            <p>{props.message.description}</p>
            <button>Okay</button>
        </div>
    )
}