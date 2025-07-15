import './Practice.css'
import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>朝食と栄養</h1>
            <p>普段の朝食で食べる栄養について</p>
            <hr/>
            <h2>パンについて</h2>
            <p>まずはパンです。<br/>今回は食パンについて調べてみました。</p>
            <hr/>
            <h3>食パンの栄養</h3>
            <p>なにも付けていない食パンの栄養価は、、</p>

            <h2>ご飯について</h2>
            <p>次にご飯です。<br/>今回は白米と玄米について調べてみました。</p>

            <h3>白米の栄養</h3>
            <p>白米の栄養価は、、、</p>

            <h3>玄米の栄養</h3>
            <p>玄米の栄養価は、、、</p>

            {/*区切り線を入れるタグ*/}
            <hr/>

            {/*bは文字を太くするタグ*/}
            <p>今日は<b>重要なお知らせ</b>があります。</p>
            <p>
                {/*markは文字を蛍光ペンでマーキングしたようにするタグ*/}
                {/*supは斜め上に小さく何かを表示するタグ*/}
                <mark>９月</mark>
                は、誕生日<sup>※</sup>です。
            </p>
            <p>
                {/*delは文字に取り消し線を引くタグ*/}
                <del>プレゼント待ってます。</del>
            </p>
            <p>※日にちは秘密です。</p>
            {/*iは文字を斜めにするタグ*/}

            <p><i>Mr.IS</i></p>
            {/*subは斜め下に何かを表示するタグ*/}

            <p>水の化学式はH<sub>2</sub>Oです。</p>
            <hr/>

            <p>好きなゲームの公式サイト(外部リンク)</p>
            {/*サイトに飛べるタグ*/}
            <a href="https://pjsekai.sega.jp/">プロセカ</a>

            <hr/>

            {/*新たなタブでサイトに飛べる*/}
            <a href="https://pjsekai.sega.jp/" target="_blank">プロセカ</a><br/>
            <a href="https://www.fate-go.jp/" target="_blank">FGO</a>

            <hr/>

            {/*新たなタブでサイトに飛びそのタブを再利用"reuse"はどんな名前でも良い*/}
            <a href="https://pjsekai.sega.jp/" target="reuse">プロセカ</a><br/>
            <a href="https://www.fate-go.jp/" target="reuse">FGO</a>

            <hr/>

            {/*セキュリティー対策*/}
            <a href="https://www.fate-go.jp/" target="_blank" rel="noopener noreferrer">FGO</a>

            <p>内部リンク</p>
            {/*a hrefはリロードが発生するので内部では使わない*/}
            <p>画像は
                <Link to="/image">こちら</Link>
                です。
            </p>
        </div>
    );
}

export default Home;