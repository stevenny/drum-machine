import React, { Component } from 'react';
import './drum-machine.css';

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
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', 
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
}]

class DrumMachine extends Component {
    constructor(props) {
       super(props)
       this.state = {
           display: "",
           currentBank: bank,    
           volume: 50,
           power: true,
           powerOn: "On"
       }
       this.updateDisplay = this.updateDisplay.bind(this);
       this.updateVolume = this.updateVolume.bind(this);
       this.updatePower = this.updatePower.bind(this);
       }
       
    updateDisplay(name) {
        this.setState({
            display: name
        })
    }

    updateVolume(vol) {
        this.setState({
            volume: vol.target.value
        })
    }

    updatePower() {
        this.setState({
            power: this.state.power ? false : true,
            powerOn: this.state.power ? "Off" : "On"
        })
    }
   
    render() {
        let newArr = this.state.currentBank.map((j, i, padArr) => {
            return (
                <DrumPad
                    id={padArr[i].id}
                    keyTrigger={padArr[i].keyTrigger}
                    keyCode={padArr[i].keyCode}
                    url={padArr[i].url}
                    key={padArr[i].id}
                    updateDisplay={this.updateDisplay}
                    power={this.state.power}
                    volume={this.state.volume}
                ></DrumPad>
            )
        });

        return (
            <div className="container" id="drum-machine">
                <h1>Drum Machine</h1>
                <div>
                    <p id="display">{this.state.display}</p>
                    <div className="inline">
                        <p >Volume: </p>
                        <input type="range" min="1" max="100" value={this.state.volume} onChange={this.updateVolume}  />
                        <p>{this.state.volume}</p>
                    </div>
                    <div className="inline">
                        <p>Power: </p>
                        <div onClick={this.updatePower} id="powerButton"></div>
                        <p>{this.state.powerOn}</p>
                    </div>
                </div>
                <div id="inner">
                    {newArr}
                </div>
            </div>
        )  
    }
}

class DrumPad extends Component {
    constructor(props) {
        super(props)
        this.playAudio = this.playAudio.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress)
    }

    handleKeyPress(e) {
        if(e.keyCode === this.props.keyCode) {
            this.playAudio();
        }
    }

    playAudio() {
        const sound = document.getElementById(this.props.keyTrigger);
        if(this.props.power) {
            let newVol = this.props.volume / 100;
            sound.volume = newVol;
            sound.play();
            this.props.updateDisplay(this.props.id)
        }    
    }

    render() {
        return (
            <div onClick={this.playAudio} id={this.props.id} className="drum-pad">
                <p>{this.props.keyTrigger}</p>
                <audio id={this.props.keyTrigger} src={this.props.url}></audio>
            </div>
        )
    }
}
export default DrumMachine;