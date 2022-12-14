import './App.css';
import QrCode from "./components/QrCode";

function App() {

    const config = {
        img: "images/image-qr-code.png",
        title: "Improve your front-end skills by building projects",
        description: "Scan the QR code to visit Frontend Mentor and take your coding skils to the next level",
    }

    return (
        <div className="App">
            <QrCode img={config.img} title={config.title} description={config.description}/>
        </div>
    );
}

export default App;
