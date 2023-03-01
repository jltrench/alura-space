import logo  from './logo.png';
import search from './search.png';

export default function Cabecalho() {
    return (
        <header>
            <img src={logo} alt="Logo"/>
            <div>
                <input type="text" placeholder="O que voce procura?"/>
                <img src={search} alt="Icone de lupa" />
            </div>
        </header>
    );
}