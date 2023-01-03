import styles from './QrCode.module.scss';

const QrCode = ({img, title, description}) => (
        <div className={styles.card}>
            <img src={img} className={styles.img} alt="QR code" />
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.description}>{description}</h2>
        </div>
)

export default QrCode;