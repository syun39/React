import skyImage from './assets/Sky.jpg'
import SkyImage from './assets/Sky2.jpg'
import SKYImage from './assets/Sky3.jpg'
import './Image.css/'

function Image() {
    return (
        <div>
            <h2>空の画像</h2>
            <div className="image">
                <img src={skyImage} alt="空の画像" width="30%"/>
                <img src={SkyImage} alt="空の画像" width="30%"/>
                <img src={SKYImage} alt="空の画像" width="30%"/>
            </div>
        </div>
    );
}

export default Image