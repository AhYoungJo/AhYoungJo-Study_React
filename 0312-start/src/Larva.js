import './Larva.css';
import grass from './src_img/grass.png';

function Larva(){
    return (
        <div class="larva">
            <div class="item i-7"></div>
            <div class="item i-8"></div>
            <div class="item i-9"></div>
            <div class="item i-10"></div>
            <div class="eye e-3"></div>
            <div class="eye e-4"></div>
            <img class="grass" src={grass} alt="grass" />
        </div>
    )

}

export default Larva;