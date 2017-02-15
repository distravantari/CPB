import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
        //  this.state = {
        //     value: 'ehehehe'
        //     }
        this.state = {
            form: "",
            value: "",
            name1: "",
            compName1: "",
            telp1: "",
            email1: "",
            start1: "",
            end1: "",
            type1: "",
            gender1: "",
            age1: "",
            character1: "",
            num1: "",
            level1: "",
            theme1: "",
            blima1: "",
            bempat1: "",
            btiga1: "",
            bdua1: "",
            numad1: "",
            numkid1: "",
            esti1: "",
            bed1: "",
            area1: "",
            fac1: "",
            otherrequest1: "",
            meetingy1: "",
            meetingn1: "",
            detmeeting1: "",
            outingy1: "",
            outingn1: "",
            detouting1: "",
            toursy1: "",
            toursn1: "",
            dettours1: "",
            transporty1: "",
            tranportn1: "",
            dettransport1: "",
            eventy1: "",
            eventn1: "",
            detevent1: "",
            homeband1: "",
            keyboardist1: "",
            popband1: "",
            openingdance1: "",
            traddance1: "",
            moddance1: "",
            dj1: "",
            mc1: "",
            ushers1: "",
            othertalent1: "",
            sound1: "",
            lighting1: "",
            led1: "",
            backdrop1: "",
            projector1: "",
            lcd1:"",
            photo1: "",
            video1: "",
            digital1: "",
            otherTech1: "",
            budget1: "",
            remarks1: ""
        }
    }

    decider(index) {
        if(index==0) {
            this.setState({
                form: 0
            })
        }
        else if(index==1) {
            this.setState({
                form: 1
            })
        }
        else if(index==2) {
            this.setState({
                form: 2
            })
        }
    }

    handleChange(e,key) {
        switch(key) {
            case 'name1':
                console.log(key)
                this.setState({
                    name1: e.target.value    
                })
                break
            case 'compName1':
                this.setState({
                    compName1: e.target.value    
                })
                break
            case 'telp1':
                this.setState({
                    telp1: e.target.value    
                })
                break
            case 'email1':
                this.setState({
                    email1: e.target.value    
                })
                break
            case 'start1':
                console.log(key)
                this.setState({
                    start1: e.target.value    
                })
                break
            case 'end1':
                this.setState({
                    end1: e.target.value    
                })
                break
            case 'type1':
                this.setState({
                    type1: e.target.value    
                })
                break
            case 'gender1':
                this.setState({
                    gender1: e.target.value    
                })
                break
            case 'age1':
                console.log(key)
                this.setState({
                    age1: e.target.value    
                })
                break
            case 'character1':
                this.setState({
                    character1: e.target.value    
                })
                break
            case 'num1':
                this.setState({
                    num1: e.target.value    
                })
                break
            case 'level1':
                this.setState({
                    level1: e.target.value    
                })
                break
            case 'theme1':
                this.setState({
                    theme1: e.target.value    
                })
                break
            case 'blima1':
                this.setState({
                    blima1: e.target.value    
                })
                break
            case 'bempat1':
                this.setState({
                    bempat1: e.target.value    
                })
                break
            case 'btiga1':
                console.log(key)
                this.setState({
                    btiga1: e.target.value    
                })
                break
            case 'bdua1':
                this.setState({
                    bdua1: e.target.value    
                })
                break
            case 'numad1':
                this.setState({
                    numad1: e.target.value    
                })
                break
            case 'numkid1':
                this.setState({
                    numkid1: e.target.value    
                })
                break
            case 'esti1':
                this.setState({
                    esti1: e.target.value    
                })
                break
            case 'bed1':
                this.setState({
                    bed1: e.target.value    
                })
                break
            case 'area1':
                this.setState({
                    area1: e.target.value    
                })
                break
            case 'fac1':
                this.setState({
                    fac1: e.target.value    
                })
                break
            case 'otherrequest1':
                this.setState({
                    otherrequest1: e.target.value    
                })
                break
            case 'meetingy1':
                this.setState({
                    meetingy1: e.target.value    
                })
                break
            case 'meetingn1':
                this.setState({
                    meetingn1: e.target.value    
                })
                break
            case 'detmeeting1':
                this.setState({
                    detmeeting1: e.target.value    
                })
                break
            case 'outingy1':
                this.setState({
                    outingy1: e.target.value    
                })
                break
            case 'outingn1':
                this.setState({
                    outingn1: e.target.value    
                })
                break
            case 'detouting1':
                this.setState({
                    detouting1: e.target.value    
                })
                break
            case 'toursy1':
                this.setState({
                    toursy1: e.target.value    
                })
                break
            case 'toursn1':
                this.setState({
                    toursn1: e.target.value    
                })
                break
            case 'dettours1':
                this.setState({
                    dettours1: e.target.value    
                })
                break
            case 'transporty1':
                this.setState({
                    transporty1: e.target.value    
                })
                break
            case 'tranportn1':
                this.setState({
                    tranportn1: e.target.value    
                })
                break
            case 'dettransport1':
                this.setState({
                    dettransport1: e.target.value    
                })
                break
            case 'eventy1':
                this.setState({
                    eventy1: e.target.value    
                })
                break
            case 'eventn1':
                this.setState({
                    eventn1: e.target.value    
                })
                break
            case 'detevent1':
                this.setState({
                    detevent1: e.target.value    
                })
                break
            case 'homeband1':
                this.setState({
                    homeband1: e.target.value    
                })
                break
            case 'keyboardist1':
                this.setState({
                    keyboardist1: e.target.value    
                })
                break
            case 'popband1':
                this.setState({
                    popband1: e.target.value    
                })
                break
            case 'openingdance1':
                this.setState({
                    openingdance1: e.target.value    
                })
                break
            case 'traddance1':
                this.setState({
                    traddance1: e.target.value    
                })
                break
            case 'moddance1':
                this.setState({
                    moddance1: e.target.value    
                })
                break
            case 'dj1':
                this.setState({
                    dj1: e.target.value    
                })
                break
            case 'mc1':
                this.setState({
                    mc1: e.target.value    
                })
                break
            case 'ushers1':
                this.setState({
                    ushers1: e.target.value    
                })
                break
            case 'othertalent1':
                this.setState({
                    othertalent1: e.target.value    
                })
                break
            case 'sound1':
                this.setState({
                    sound1: e.target.value    
                })
                break
            case 'lighting1':
                this.setState({
                    lighting1: e.target.value    
                })
                break
            case 'led1':
                this.setState({
                    led1: e.target.value    
                })
                break
            case 'backdrop1':
                this.setState({
                    backdrop1: e.target.value    
                })
                break
            case 'projector1':
                this.setState({
                    projector1: e.target.value    
                })
                break
            case 'lcd1':
                this.setState({
                    lcd1: e.target.value    
                })
                break
            case 'photo1':
                this.setState({
                    photo1: e.target.value    
                })
                break
            case 'video1':
                this.setState({
                    video1: e.target.value    
                })
                break
            case 'digital1':
                this.setState({
                    digital1: e.target.value    
                })
                break
            case 'otherTech1':
                this.setState({
                    otherTech1: e.target.value    
                })
                break
            case 'budget1':
                this.setState({
                    budget1: e.target.value    
                })
                break
            case 'remarks1':
                this.setState({
                    remarks1: e.target.value    
                })
                break
        }
    }

    render() {
        if(this.state.form==0) {
            return this.form0()
        }
        else if(this.state.form==1) {
            return this.form1()
        }
        else if(this.state.form==2) {
            return this.form2()
        }
    }


    handleSubmit() {
        let message = "nama: " + this.state.name1 + ". company name = " + this.state.compName1 + ". telephone = " + this.state.telp1 + ". e-mail = " + this.state.email1
        console.log("AKHIRNYA",message)
    }

    form0() {
        return(
            <div className="col-md-offset-1 col-md-10 form">
                <div className="form-group">
                    <h5>Tell us about your ideal event, we want to hear from you!</h5>
                    <p>Please contact us and fill the form for more information or with any help or advice that you may need.</p>
                    <p>We will assist you in designing your event in Bali. Please fill in this event brief form.</p>
                </div>
                <br/>
                <form className="form-div">
                    <h5>COMPANY DETAILS</h5>
                    <div className="form-section">
                        <div className="form-group">
                            <label for="name">Name :</label>
                            <input type="text" className="form-control" value={this.state.name1} onChange={(e) => this.handleChange(e,'name1')} id="name" required/>
                        </div>
                        <div className="form-group">
                            <label for="comp-name">Company Name :</label>
                            <input type="text" className="form-control" value={this.state.compName1} onChange={(e) => this.handleChange(e,'compName1')} id="comp-name" required/>
                        </div>
                        <div className="form-group">
                            <label for="phone">Telephone :</label>
                            <input type="number" className="form-control" value={this.state.telp1} onChange={(e) => this.handleChange(e,'telp1')} id="phone" required/>
                        </div>
                        <div className="form-group">
                            <label for="email">E-mail :</label>{(e) => this.handleChange = e}
                            <input type="email" className="form-control" value={this.state.email1} onChange={(e) => this.handleChange(e,'email1')} id="email" required/>
                        </div>
                    </div>
                    <br/>
                    <h5>EVENT DETAILS</h5>
                    <div className="form-section">
                        <div className="form-group">
                            <label for="event-start">Starts from :</label>
                            <input type="text" className="form-control" value={this.state.start1} onChange={(e) => this.handleChange(e,'start1')} id="event-start" />
                        </div>
                        <div className="form-group">
                            <label for="event-end">Ends :</label>
                            <input type="text" className="form-control" value={this.state.end1} onChange={(e) => this.handleChange(e,'end1')} id="event-end" />
                        </div>
                        <div className="form-group">
                            <label for="type">Event Type :</label>
                            <input type="text" className="form-control" value={this.state.type1} onChange={(e) => this.handleChange(e,'type1')} id="type" />
                        </div>
                        <div className="form-group">
                            <label for="gender">Guest Gender of Attendees :</label>
                            <input type="text" className="form-control" value={this.state.gender1} onChange={(e) => this.handleChange(e,'gender1')} id="gender" />
                        </div>
                        <div className="form-group">
                            <label for="age">Age Profile of Attendees :</label>
                            <input type="number" className="form-control" value={this.state.age1} onChange={(e) => this.handleChange(e,'age1')} id="age" />
                        </div>
                        <div className="form-group">
                            <label for="character">Special characteristics of Attendees :</label>
                            <input type="text" className="form-control" value={this.state.character1} onChange={(e) => this.handleChange(e,'character1')} id="character" />
                        </div>
                        <div className="form-group">
                            <label for="num">Number of Attendees :</label>
                            <input type="number" className="form-control" value={this.state.num1} onChange={(e) => this.handleChange(e,'num1')} id="num" />
                        </div>
                        <div className="form-group">
                            <label for="level">Managerial Level of Attendees :</label>
                            <input type="text" className="form-control" value={this.state.level1} onChange={(e) => this.handleChange(e,'level1')} id="level" />
                        </div>
                        <div className="form-group">
                            <label for="theme">Theme :</label>
                            <input type="text" className="form-control" value={this.state.theme1} onChange={(e) => this.handleChange(e,'theme1')} id="theme" />
                        </div>
                    </div>
                    <br/>
                    <h5>ACCOMMODATION</h5>
                    <div className="form-section">
                        <div className="form-group">
                            <label for="name">Venue/Hotel :</label>
                            <div className="form-group">
                                <select className="form-control" id="sel1">
                                    <option value={this.state.blima1} onChange={(e) => this.handleChange(e,'blima1')}>5</option>
                                    <option value={this.state.bempat1} onChange={(e) => this.handleChange(e,'bempat1')}>4</option>
                                    <option value={this.state.btiga1} onChange={(e) => this.handleChange(e,'btiga1')}>3</option>
                                    <option value={this.state.bdua1} onChange={(e) => this.handleChange(e,'bdua1')}>2</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="numad">Number of Adult :</label>
                            <input type="number" className="form-control" value={this.state.numad1} onChange={(e) => this.handleChange(e,'numad1')} id="numad" />
                        </div>
                        <div className="form-group">
                            <label for="numkid">Number of Kids (if there are any) : </label>
                            <input type="number" className="form-control" value={this.state.numkid1} onChange={(e) => this.handleChange(e,'numkid1')} id="numkid" />
                        </div>
                        <div className="form-group">
                            <label for="esti">Estimation accommodation budget (per-night, per-room) :</label>
                            <input type="number" className="form-control" value={this.state.esti1} onChange={(e) => this.handleChange(e,'esti1')} id="esti" />
                        </div>
                        <h5>REQUEST :</h5>
                        <div className="form-section">
                            <div className="form-group">
                                <label for="bed">Bedding type :</label>
                                <input type="text" className="form-control" value={this.state.bed1} onChange={(e) => this.handleChange(e,'bed1')} id="bed" />
                            </div>
                            <div className="form-group">
                                <label for="area">Hotel Area or Desirable Atmosphere :</label>
                                <input type="text" className="form-control" value={this.state.area1} onChange={(e) => this.handleChange(e,'area1')} id="area" />
                            </div>
                            <div className="form-group">
                                <label for="fac">Hotel Facility :</label>
                                <input type="text" className="form-control" value={this.state.fac1} onChange={(e) => this.handleChange(e,'fac1')} id="fac" />
                            </div>
                            <div className="form-group">
                                <label for="other">Others :</label>
                                <input type="email" className="form-control" value={this.state.otherrequest1} onChange={(e) => this.handleChange(e,'otherrequest1')} id="other" />
                            </div>
                        </div>    
                    </div>
                    <br/>
                    <div className="form-group">
                        <label for="name">MEETING/SEMINAR :</label>
                        <div className="radio-inline">
                            <label><input name="meeting1" type="radio" value={this.state.meetingy1} onChange={(e) => this.handleChange(e,'meetingy1')}/>Yes</label>
                        </div>
                        <div className="radio-inline">
                            <label><input name="meeting1" type="radio" value={this.state.meetingn1} onChange={(e) => this.handleChange(e,'meetingn1')}/>No</label>
                        </div>
                    </div>
                    <div className="form-group">
                            <p for="comp-name">Details :</p>
                            <input type="text" className="form-control" value={this.state.detmeeting1} onChange={(e) => this.handleChange(e,'detmeeting1')} id="details" />
                        </div>
                    <div className="form-group">
                        <label for="comp-name">OUTING :</label>
                        <div className="radio-inline">
                            <label><input name="outing1" type="radio" value={this.state.outingy1} onChange={(e) => this.handleChange(e,'outingy1')}/>Yes</label>
                        </div>
                        <div className="radio-inline">
                            <label><input name="outing1" type="radio" value={this.state.outingn1} onChange={(e) => this.handleChange(e,'outingn1')}/>No</label>
                        </div>
                    </div>
                    <div className="form-group">
                            <p for="comp-name">Details :</p>
                            <input type="text" className="form-control" value={this.state.detouting1} onChange={(e) => this.handleChange(e,'detouting11')} id="comp-name" />
                        </div>
                    <div className="form-group">
                        <label for="phone">TOURS :</label>
                        <div className="radio-inline">
                            <label> onSubmit={() => this.handleSubmit()}<input name="tours1" type="radio" value={this.state.toursy1} onChange={(e) => this.handleChange(e,'toursy1')}/>Yes</label>
                        </div>
                        <div className="radio-inline">
                            <label><input name="tours1" type="radio" value={this.state.toursn1} onChange={(e) => this.handleChange(e,'toursn1')}/>No</label>
                        </div>
                    </div>
                    <div className="form-group">
                            <p for="comp-name">Details :</p>
                            <input type="text" className="form-control" value={this.state.dettours1} onChange={(e) => this.handleChange(e,'dettours1')} id="comp-name" />
                        </div>
                    <div className="form-group">
                        <label for="email">TRANSPORTATION :</label>
                        <div className="radio-inline">
                            <label><input name="transporty1" type="radio" value={this.state.transporty1} onChange={(e) => this.handleChange(e,'transporty1')}/>Yes</label>
                        </div>
                        <div className="radio-inline">
                            <label><input name="transportn1" type="radio" value={this.state.transportn1} onChange={(e) => this.handleChange(e,'transportn1')}/>No</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <p for="comp-name">Details :</p>
                        <input type="text" className="form-control" value={this.state.dettransport1} onChange={(e) => this.handleChange(e,'dettransport1')} id="comp-name" />
                    </div>
                    <div className="form-group">
                        <label for="email">EVENT :</label>
                        <div className="radio-inline">
                            <label><input name="event1" type="radio" value={this.state.eventy1} onChange={(e) => this.handleChange(e,'eventy1')}/>Yes</label>
                        </div>
                        <div className="radio-inline">
                            <label><input name="event1" type="radio" value={this.state.eventn1} onChange={(e) => this.handleChange(e,'eventn1')}/>No</label>
                        </div>
                    </div>
                    <div className="form-group">
                            <p for="comp-name">Details :</p>
                            <input type="text" className="form-control" type="radio" value={this.state.detevent1} onChange={(e) => this.handleChange(e,'detevent1')} id="comp-name" />
                        </div>
                    <div className="form-group">
                        <label for="email">Talent or Entertainment Need :</label>
                        <div className="checkbox">
                            <label><input type="checkbox" value={this.state.homeband1} onChange={(e) => this.handleChange(e,'homeband1')}/>Home Band</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value={this.state.keyboardist1} onChange={(e) => this.handleChange(e,'keyboardist1')}/>Keyboardist + Singer</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value={this.state.popband1} onChange={(e) => this.handleChange(e,'popband1')}/>Popular Band</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value={this.state.openingdance1} onChange={(e) => this.handleChange(e,'openingdance1')}/>Opening Dance</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value={this.state.traddance1} onChange={(e) => this.handleChange(e,'traddance1')}/>Traditional Dance</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value={this.state.moddance1} onChange={(e) => this.handleChange(e,'moddance1')}/>Modern/Contemporary Dance</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value={this.state.dj1} onChange={(e) => this.handleChange(e,'dj1')}/>DJ</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value={this.state.mc1} onChange={(e) => this.handleChange(e,'mc1')}/>MC</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value={this.state.ushers1} onChange={(e) => this.handleChange(e,'ushers1')}/>Ushers</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <p for="comp-name">Others :</p>
                        <input type="text" className="form-control" value={this.state.othertalent1} onChange={(e) => this.handleChange(e,'othertalent1')} id="comp-name" />
                    </div>
                    <div className="form-group">
                        <label for="email">Technical Support Need :</label>
                        <div className="checkbox">
                            <label><input type="checkbox" value={this.state.sound1} onChange={(e) => this.handleChange(e,'sound1')}/>Sound System</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value={this.state.lighting1} onChange={(e) => this.handleChange(e,'lighting1')}/>Lighting System</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value={this.state.led1} onChange={(e) => this.handleChange(e,'led1')}/>LED Backdrop</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value={this.state.backdrop1} onChange={(e) => this.handleChange(e,'backdrop1')}/>3D Backdrop</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value={this.state.projector1} onChange={(e) => this.handleChange(e,'projector1')}/>Projector (standard)</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value={this.state.lcd1} onChange={(e) => this.handleChange(e,'lcd1')}/>LCD/Plasma TV</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value={this.state.photo1} onChange={(e) => this.handleChange(e,'photo1')}/>Photography</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value={this.state.video1} onChange={(e) => this.handleChange(e,'video1')}/>Videography</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value={this.state.digital1} onChange={(e) => this.handleChange(e,'digital1')}/>Digital Printing Backdrop</label>
                        </div>
                        <div className="form-group">
                            <p for="comp-name">Others :</p>
                            <input type="text" className="form-control" value={this.state.otherTech1} onChange={(e) => this.handleChange(e,'otherTech1')} id="comp-name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="budget">Indicative Budget :</label>
                        <input type="number" className="form-control" value={this.state.budget1} onChange={(e) => this.handleChange(e,'budget1')} id="budget" />
                    </div>
                    <div className="form-group">
                        <label for="remarks">Special Remarks :</label>
                        <input type="text" className="form-control" value={this.state.remarks1} onChange={(e) => this.handleChange(e,'remarks1')} id="remarks" />
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-default" onClick={() => this.handleSubmit()}>Submit</button>
                </form>
            </div>
        )
    }

    form1() {
        return(
            <div className="col-md-offset-1 col-md-10 form">
                <div className="form-group">
                    <h5>Tell us about your ideal event, we want to hear from you!</h5>
                    <p>Please contact us and fill the form for more information or with any help or advice that you may need.</p>
                    <p>We will assist you in designing your vacation Bali. Please fill in this event brief form.</p>
                </div>
                <br/>
                <form className="form-div">
                    <div className="form-section">
                        <div className="form-group">
                            <label for="name">Name :</label>
                            <input type="text" className="form-control" id="name" required/>
                        </div>
                        <div className="form-group">
                            <label for="name">Nationality :</label>
                            <input type="text" className="form-control" id="name" required/>
                        </div>
                        <div className="form-group">
                            <label for="phone">Telephone :</label>
                            <input type="number" className="form-control" id="phone" required/>
                        </div>
                        <div className="form-group">
                            <label for="email">E-mail :</label>
                            <input type="email" className="form-control" id="email" required/>
                        </div>
                    </div>
                    <br/>
                    <h5>TRIP DETAILS</h5>
                    <div className="form-section">
                        <div className="form-group">
                            <label for="event-start">Starts from :</label>
                            <input type="text" className="form-control" id="event-start" required/>
                        </div>
                        <div className="form-group">
                            <label for="event-end">Ends :</label>
                            <input type="text" className="form-control" id="event-end" required/>
                        </div>
                        <div className="checkbox-inline">
                            <label><input type="checkbox" value=""/>Still Tentative</label>
                        </div>
                        <div className="form-group">
                            <label for="phone">Event Type :</label>
                            <div className="dropdown">
                                <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Type
                                <span className="caret"></span></button>
                                <ul className="dropdown-menu">
                                    <li>Family</li>
                                    <li>Friends</li>
                                    <li>Mix Group</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <h5>ACCOMMODATION</h5>
                    <div className="form-section">
                        <div className="form-group">
                            <label for="name">Venue/Hotel :</label>
                            <div className="dropdown">
                                <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Stars
                                <span className="caret"></span></button>
                                <ul className="dropdown-menu">
                                    <li>Apartment</li>
                                    <li>Bungalow</li>
                                    <li>Guest House</li>
                                    <li>5</li>
                                    <li>4</li>
                                    <li>3</li>
                                    <li>2</li>
                                </ul>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="comp-name">Number of Adult :</label>
                            <input type="text" className="form-control" id="comp-name" required/>
                        </div>
                        <div className="form-group">
                            <label for="phone">Number of Kids (if there are any) : </label>
                            <input type="number" className="form-control" id="phone" required/>
                        </div>
                        <div className="form-group">
                            <label for="email">Estimation accommodation budget (per-night, per-room) :</label>
                            <input type="email" className="form-control" id="email" required/>
                        </div>
                        <h5>REQUEST :</h5>
                        <div className="form-section">
                            <div className="form-group">
                                <label for="name">Bedding type :</label>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Modern/Contemporary Dance</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>DJ</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>MC</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Ushers</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="comp-name">Hotel Area :</label>
                                <input type="text" className="form-control" id="comp-name" required/>
                            </div>
                            <div className="form-group">
                                <label for="phone">Hotel Preference :</label>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Beachfront</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Business facilities</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Golf Course</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Kids/Family Friendly</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Near The Beach</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Near Mountain</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Near Restaurant</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Heart of the City</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Tranquil Area</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Near Nightclub</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="comp-name">Hotel Facility :</label>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Family Room</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Fitness Centre</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Pool</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Private Pool</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>WIFI</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Non-smoking room</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Smoking room</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Spa & Wellness Center</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Restaurant</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="email">Others :</label>
                                <input type="email" className="form-control" id="email" required/>
                            </div>
                        </div>    
                    </div>
                    <br/>
                    <div className="form-group">
                        <label for="name">TRANPORTATION :</label>
                        <div className="checkbox-inline">
                            <label><input type="checkbox" value=""/>Yes</label>
                        </div>
                        <div className="checkbox-inline">
                            <label><input type="checkbox" value=""/>No</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <p for="comp-name">Details :</p>
                        <input type="text" className="form-control" id="comp-name" required/>
                    </div>
                    <div className="form-group">
                        <label for="comp-name">TOURS / SIGHTSEEING :</label>
                        <div className="checkbox-inline">
                            <label><input type="checkbox" value=""/>Yes</label>
                        </div>
                        <div className="checkbox-inline">
                            <label><input type="checkbox" value=""/>No</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <p for="comp-name">Details :</p>
                        <input type="text" className="form-control" id="comp-name" required/>
                    </div>
                    <div className="form-group">
                        <label for="comp-name">ACTIVITIES :</label>
                        <div className="checkbox-inline">
                            <label><input type="checkbox" value=""/>Yes</label>
                        </div>
                        <div className="checkbox-inline">
                            <label><input type="checkbox" value=""/>No</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <p for="comp-name">Details :</p>
                        <input type="text" className="form-control" id="comp-name" required/>
                    </div>
                    <div className="form-group">
                        <label for="comp-name">MEALS :</label>
                        <div className="checkbox-inline">
                            <label><input type="checkbox" value=""/>Yes</label>
                        </div>
                        <div className="checkbox-inline">
                            <label><input type="checkbox" value=""/>No</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value=""/>Breakfast Included</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value=""/>Halfboard (B&L)</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value=""/>Fullboard (B,L&D)</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="email">Indicative Budget :</label>
                        <input type="email" className="form-control" id="email" required/>
                    </div>
                    <div className="form-group">
                        <label for="email">Special Remarks :</label>
                        <input type="email" className="form-control" id="email" required/>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        )
    }

    form2() {
        return(
            <div className="col-md-offset-1 col-md-10 form">
                <div className="form-group">
                    <h5>Tell us about your dream luxury stays, we want to hear from you!</h5>
                    <p>Please contact us and fill the form for more information or with any help or advice that you may need.</p>
                    <p>We will assist you in designing your vacation Bali. Please fill in this event brief form.</p>
                </div>
                <br/>
                <form className="form-div">
                    <div className="form-section">
                        <div className="form-group">
                            <label for="name">Name :</label>
                            <input type="text" className="form-control" id="name" required/>
                        </div>
                        <div className="form-group">
                            <label for="name">Nationality :</label>
                            <input type="text" className="form-control" id="name" required/>
                        </div>
                        <div className="form-group">
                            <label for="phone">Telephone :</label>
                            <input type="number" className="form-control" id="phone" required/>
                        </div>
                        <div className="form-group">
                            <label for="email">E-mail :</label>
                            <input type="email" className="form-control" id="email" required/>
                        </div>
                    </div>
                    <br/>
                    <h5>TRIP DETAILS</h5>
                    <div className="form-section">
                        <div className="form-group">
                            <label for="event-start">Starts from :</label>
                            <input type="text" className="form-control" id="event-start" required/>
                        </div>
                        <div className="form-group">
                            <label for="event-end">Ends :</label>
                            <input type="text" className="form-control" id="event-end" required/>
                        </div>
                        <div className="checkbox-inline">
                            <label><input type="checkbox" value=""/>Still Tentative</label>
                        </div>
                        <div className="form-group">
                            <label for="phone">Number of Rooms :</label>
                            <input type="number" className="form-control" id="phone" required/>
                        </div>
                    </div>
                    <br/>
                    <h5>ACCOMMODATION</h5>
                    <div className="form-section">
                        <div className="form-group">
                            <label for="name">Venue/Hotel :</label>
                            <div className="dropdown">
                                <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Stars
                                <span className="caret"></span></button>
                                <ul className="dropdown-menu">
                                    <li>Apartment</li>
                                    <li>Bungalow</li>
                                    <li>Guest House</li>
                                    <li>5</li>
                                    <li>4</li>
                                    <li>3</li>
                                    <li>2</li>
                                </ul>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="comp-name">Number of Adult :</label>
                            <input type="text" className="form-control" id="comp-name" required/>
                        </div>
                        <div className="form-group">
                            <label for="phone">Number of Kids (if there are any) : </label>
                            <input type="number" className="form-control" id="phone" required/>
                        </div>
                        <div className="form-group">
                            <label for="email">Estimation accommodation budget (per-night, per-room) :</label>
                            <input type="email" className="form-control" id="email" required/>
                        </div>
                        <h5>REQUEST :</h5>
                        <div className="form-section">
                            <div className="form-group">
                                <label for="comp-name">Hotel Area :</label>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Amed</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Candidasa</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Canggu area</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Canggu Beach</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Jimbaran</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Karangasem</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Kerobokan</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Kids/Family Friendly</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Kuta area</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Kuta Beach</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Legian Area</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Legian Beach</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Lembongan</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Lovina Beach</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Lovina</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Menjangan</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Near The Beach</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Nusadua Beach</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Petitenget</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Seminyak Beach</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Seminyak</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Tabanan</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Tanjung Benoa</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Sanur Beach</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Sanur Area</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Sinaraja</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Tuban</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Tulamben</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Ubud</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Uluwatu</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Ungasan</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="phone">Hotel Preference :</label>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Beachfront</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Business facilities</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Golf Course</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Kids/Family Friendly</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Near The Beach</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Near Mountain</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Near Restaurant</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Heart of the City</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Tranquil Area</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Near Nightclub</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="comp-name">Hotel Facility :</label>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Family Room</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Fitness Centre</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Pool</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Private Pool</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>WIFI</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Non-smoking room</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Smoking room</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Spa & Wellness Center</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Restaurant</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="email">Others :</label>
                                <input type="email" className="form-control" id="email" required/>
                            </div>
                        </div>    
                    </div>
                    <br/>
                    <div className="form-group">
                        <label for="name">TRANPORTATION :</label>
                        <div className="checkbox-inline">
                            <label><input type="checkbox" value=""/>Yes</label>
                        </div>
                        <div className="checkbox-inline">
                            <label><input type="checkbox" value=""/>No</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <p for="comp-name">Details :</p>
                        <input type="text" className="form-control" id="comp-name" required/>
                    </div>
                    <div className="form-group">
                        <label for="email">Special Remarks :</label>
                        <input type="email" className="form-control" id="email" required/>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form