import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    const text = <p>Hello, my name is Duc. I'm a front-end and back-end developer with experience in Flask, DJango, Firebase and React.</p>;

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            {text}

            </Content>
        </div>
    );

}

export default AboutPage;