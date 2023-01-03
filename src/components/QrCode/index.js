import styles from './QrCode.module.scss';

const QrCode = ({img, title, description}) => (
        <div className={styles.qrCode}>
            <img src={img} className={styles.qrCode__img} alt="QR code" />
            <h1 className={styles.qrCode__title}>{title}</h1>
            <h2 className={styles.qrCode__description}>{description}</h2>
        </div>
)

export default QrCode;