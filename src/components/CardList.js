import Card from './Card';
// import { robots } from '../robots';

const CardList = ({ robots }) => {
    return robots.map((robot) => <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} /> );
}

export default CardList;