import './Card.css'
function Card(props){
    const cname = 'card '+props.className;
    return<div className={cname}>{props.children}</div>
}

export default Card;