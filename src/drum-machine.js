import {Grid, Row, Col} from 'react-flexbox-grid';
import React, { Component } from 'react';
import './drum-machine.css';

//need to add keyCode attr
const bank = [{
    keyTrigger: 'Q',
    keyCode: 81,
    id: 'heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
}, {
    keyTrigger: 'W',
    keyCode: 87,
    id: 'heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
    keyTrigger: 'E',
    keyCode: 69,
    id: 'heater-3',
    url: '‘https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', 
}, {
    keyTrigger: 'A',
    keyCode: 65,
    id: 'heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
    keyTrigger: 'S',
    keyCode: 83,
    id: 'heater-6',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
}, {
    keyTrigger: 'D',
    keyCode: 68,
    id: 'dsc-oh',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
    keyTrigger: 'Z',
    keyCode: 90,
    id: 'kick-n-hat',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
}, {
    keyTrigger: 'X',
    keyCode: 88,
    id: 'rp4-kick-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
}, {
    keyTrigger: 'C',
    keyCode: 67,
    id: 'cev-h2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
}
]

class DrumMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBank: bank
        }
    }
    
    render() {
            return (
                <Grid fluid>
                    <div id="drum-machine">
                    <h1>Drum Machine</h1>
                        <Row id="display"> 
                            <Col md={12}>
                                <h2>Display </h2>
                            </Col>
                        </Row>
                        <DrumPad>
                           

                        </DrumPad>
                    </div>
                </Grid>          
            )
    }
}

class DrumPad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBank: bank
        }
    }
    
    render() {
        let newArr = this.state.currentBank.map((k, i, padArr) => {
            return (
                <Pad 
                    id={padArr[i].id} 
                    url={padArr[i].url} 
                    keyTrigger={padArr[i].keyTrigger} 
                    keyCode={padArr[i].keyCode}
                    key={padArr[i].id}
                    
                ></Pad>
            )
        })

        return (
            <div>
                {newArr}
            </div>
        )
    }  
}

class Pad extends Component {
    constructor(props) {
        super(props);
        this.playSound = this.playSound.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress)
    } 
    handleKeyPress(e) {
        if (e.keyCode === this.props.keyCode) {
            this.playSound();
        }
    } 

    
    playSound(e) {
        const sound = document.getElementById(this.props.keyTrigger)
        sound.play();
    }
    render() {
        return(
            <div className="drum-pad" onClick={this.playSound} className="drum-pad">{this.props.keyTrigger}<audio src={this.props.url} className="clip" id={this.props.keyTrigger}></audio></div>
        )
    }
}


 
export default DrumMachine;