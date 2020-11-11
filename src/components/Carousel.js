import React from 'react';

import Card from '../components/Card';

import devgrub from '../assets/images/devgrub.png';
import youtube from '../assets/images/youtube.png';
import evverest from '../assets/images/evverest.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'PHMS',
                    subTitle: 'The application use to keep track people heal data',
                    imgSrc: devgrub,
                    link: 'https://github.com/thantienduc/PHMS-2020',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Shoe Use',
                    subTitle: 'Application sells the used show',
                    imgSrc: youtube,
                    link: 'https://github.com/thantienduc/Shoeuse',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Cominneed',
                    subTitle: 'A social network shows the dieaster area to people to donate',
                    imgSrc: evverest,
                    link: 'https://github.com/binanhphuoc/Comineed',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;