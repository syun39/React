import skyImage from './assets/Sky.jpg'

function Image(){
    return(
        <div>
            <h2>空の画像</h2>
            <img src={skyImage} alt="空の画像" width="50%" height="0%"/>
        </div>
    );
}

export default Image