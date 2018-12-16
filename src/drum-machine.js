import {Grid, Row, Col} from 'react-flexbox-grid';
import React, { Component } from 'react';
import './drum-machine.css';

class DrumMachine extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Grid fluid>
                <div id="drum-machine">
                    <Row>
                        <Col id="display" md={12}>
                            <h1>Display</h1>
                        </Col>


                    </Row>
                    <Row>
                        <DrumPad></DrumPad>
                        <DrumPad></DrumPad>
                        <DrumPad></DrumPad>

                    </Row>

                </div>
            
            </Grid>          
        )
    }
}

class DrumPad extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Col md={3}>
                <div className="drum-pad">
                    <p>Hello</p>
                </div>
            </Col>
        )
    }
}

export default DrumMachine;