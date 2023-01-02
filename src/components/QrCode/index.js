import './QrCode.scss';

const QrCode = ({img, title, description}) => (
        <div className="qrCode">
            <img src={img} className="qrCode__img" alt="QR code" />
            <h1 className="qrCode__title">{title}</h1>
            <h2 className="qrCode__description">{description}</h2>
        </div>
)

export default QrCode;