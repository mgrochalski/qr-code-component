import './QrCode.css';

const QrCode = (props) => {
    return (
        <div id="qr-code">
            <img className='code-img' src={props.img} alt="QR code" />
            <h1 className='title'>{props.title}</h1>
            <h2 className='description'>{props.description}</h2>
        </div>
    )
}

export default QrCode;