import './QrCode.scss';

const QrCode = ({img, title, description}) => (
        <div id="qr-code">
            <img src={img} alt="QR code" />
            <h1>{title}</h1>
            <h2>{description}</h2>
        </div>
)

export default QrCode;