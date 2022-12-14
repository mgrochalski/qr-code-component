import './QrCode.scss';

const QrCode = (props) => {
    return (
        <div id="qr-code">
            <img src={props.img} alt="QR code" />
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
        </div>
    )
}

export default QrCode;