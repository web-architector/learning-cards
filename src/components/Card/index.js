import React, {Component} from 'react';
import s from './Card.module.scss';

class Card extends Component {
    constructor(props) {
        super(props);
        this.eng = props.eng;
        this.rus = props.rus;
        this.state = {done: false};
    }

    handleCardClick = () => {
        this.setState((prevState, props)=>({done: !prevState.done}))
    };

    render() {
        const {eng, rus} = this.props;
        const {done} = this.state;
        const cardCLass = [s.card];
        done && cardCLass.push(s.done);
        return (
            <div className={ cardCLass.join(' ') }
                 onClick={ this.handleCardClick }
            >
                <div className={ s.cardInner }>
                    <div className={ s.cardFront }>
                        <span>{ eng }</span>
                    </div>
                    <div className={ s.cardBack }>
                        <span>{ rus }</span>
                    </div>
                </div>
            </div>
        );
    }
}



const CardsContainer = ({wordsList}) => {
    return (
        <div className={ s.cardsContainer }>
            { wordsList.map(({eng, rus}, index) => <Card key={ index } eng={ eng } rus={ rus }/>) }
        </div>
    );
};

export default CardsContainer;
// export default Card;