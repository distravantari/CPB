import React, { Component } from 'react'
import Datepicker from './Datepicker'

class Form extends Component {

    constructor(props) {
        super(props)
        //  this.state = {
        //     value: 'ehehehe'
        //     }
        this.state = {
            form: "",
            name1: "",
            compName1: "",
            telp1: "",
            email1: "",
            startdate1: "",
            starttime1: "",
            enddate1: "",
            endtime1: "",
            type1: "",
            gender1: "",
            age1: "",
            character1: "",
            num1: "",
            level1: "",
            theme1: "",
            venue: "",
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
            transportn1: "",
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
            remarks1: "",
            name2: "",
            national2: "",
            telp2: "",
            email2: "",
            startdate2: "",
            starttime2: "",
            enddate2: "",
            endtime2: "",
            tentative2: "",
            type2: "",
            venue2: "",
            numad2: "",
            numkid2: "",
            esti2: "",
            single2: "",
            twinking: "",
            twinbed2: "",
            triple2: "",
            area2: "",
            beachfront2: "",
            business2: "",
            golfcourse2: "",
            kids2: "",
            nearbeach2: "",
            nearmountain2: "",
            nearrestaurant2: "",
            heart2: "",
            tranquil2: "",
            nearnight2: "",
            family2: "",
            fitness2: "",
            pool2: "",
            private2: "",
            wifi2: "",
            nonsmoking2: "",
            smoking2: "",
            spa2: "",
            rest2: "",
            otherrequest2: "",
            transporty2: "",
            transportn2: "",
            dettransport2: "",
            toursy2: "",
            toursn2: "",
            dettours2: "",
            acty2: "",
            actn2: "",
            detact2: "",
            mealsy2: "",
            mealsn2: "",
            breakfast2: "",
            half2: "",
            full2: "",
            budget2: "",
            remarks2: "",
            name3: "",
            national3: "",
            telp3: "",
            email3: "",
            startdate3: "",
            starttime3: "",
            enddate3: "",
            endtime3: "",
            tentative3: "",
            numroom3: "",
            venue3: "",
            numad3: "",
            numkid3: "",
            esti3: "",
            amed3: "",
            candi3: "",
            cangguarea3: "",
            canggubeach3: "",
            jimbaran3: "",
            karang3: "",
            kerobokan3: "",
            kids3: "",
            kutaarea3: "",
            kutabeach3: "",
            legianarea3: "",
            legianbeach3: "",
            lembongan3: "",
            lovinabeach3: "",
            lovina3: "",
            menjangan3: "",
            nearbeach3: "",
            nusadua3: "",
            petit3: "",
            seminyakbeach3: "",
            seminyak3: "",
            tabanan3: "",
            tanjung3: "",
            sanurbeach3: "",
            sanurarea3: "",
            sinaraja3: "",
            tuban3: "",
            tulamban3: "",
            ubud3: "",
            uluwatu3: "",
            ungasan3: "",
            beachfront3: "",
            business3: "",
            golfcourse3: "",
            kidsfarm3: "",
            nearthebeach3: "",
            nearmountain3: "",
            nearrestaurant3: "",
            heart3: "",
            tranquil3: "",
            nearnight3: "",
            family3: "",
            fitness3: "",
            pool3: "",
            private3: "",
            wifi3: "",
            nonsmoking3: "",
            smoking3: "",
            spa3: "",
            rest3: "",
            otherrequest3: "",
            transporty3: "",
            transportn3: "",
            dettransport3: "",
            remarks3: ""
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
            case 'startdate1':
                let startdate = e.split('T')[0]
                this.setState({
                    startdate1: startdate  
                })
                break
            case 'starttime1':
                this.setState({
                    starttime1: e.target.value    
                })
                break
            case 'enddate1':
                let enddate = e.split('T')[0]
                this.setState({
                    enddate1: enddate    
                })
                break
            case 'endtime1':
                this.setState({
                    endtime1: e.target.value    
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
            case 'venue':
                console.log(key)
                this.setState({
                    venue: e.target.value    
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
                    meetingy1: ". it will be a meeting "    
                })
                break
            case 'meetingn1':
                this.setState({
                    meetingn1: ". no meeting "    
                })
                break
            case 'detmeeting1':
                this.setState({
                    detmeeting1: e.target.value    
                })
                break
            case 'outingy1':
                this.setState({
                    outingy1: ". it will be outing "    
                })
                break
            case 'outingn1':
                this.setState({
                    outingn1: ". no outing "    
                })
                break
            case 'detouting1':
                this.setState({
                    detouting1: e.target.value    
                })
                break
            case 'toursy1':
                this.setState({
                    toursy1: ". it will be tours "    
                })
                break
            case 'toursn1':
                this.setState({
                    toursn1: ". no tours "    
                })
                break
            case 'dettours1':
                this.setState({
                    dettours1: e.target.value    
                })
                break
            case 'transporty1':
                this.setState({
                    transporty1: ". we need transportation "    
                })
                break
            case 'transportn1':
                this.setState({
                    transportn1: ". we don't need transportation "    
                })
                break
            case 'dettransport1':
                this.setState({
                    dettransport1: e.target.value    
                })
                break
            case 'eventy1':
                this.setState({
                    eventy1: ". it will be event "    
                })
                break
            case 'eventn1':
                this.setState({
                    eventn1: ". no event "    
                })
                break
            case 'detevent1':
                this.setState({
                    detevent1: e.target.value    
                })
                break
            case 'homeband1':
                this.setState({
                    homeband1: " Home band"    
                })
                break
            case 'keyboardist1':
                this.setState({
                    keyboardist1: " Keyboardist + Singer"    
                })
                break
            case 'popband1':
                this.setState({
                    popband1: " Pop band"    
                })
                break
            case 'openingdance1':
                this.setState({
                    openingdance1: " Opening dance"    
                })
                break
            case 'traddance1':
                this.setState({
                    traddance1: " Tradiotional dance"    
                })
                break
            case 'moddance1':
                this.setState({
                    moddance1: " Modern dance"    
                })
                break
            case 'dj1':
                this.setState({
                    dj1: " DJ"    
                })
                break
            case 'mc1':
                this.setState({
                    mc1: " MC"    
                })
                break
            case 'ushers1':
                this.setState({
                    ushers1: " Ushers"    
                })
                break
            case 'othertalent1':
                this.setState({
                    othertalent1: e.target.value    
                })
                break
            case 'sound1':
                this.setState({
                    sound1: " Sound"    
                })
                break
            case 'lighting1':
                this.setState({
                    lighting1: " Lighting"    
                })
                break
            case 'led1':
                this.setState({
                    led1: " LED backdrop"    
                })
                break
            case 'backdrop1':
                this.setState({
                    backdrop1: " 3D backdrop"    
                })
                break
            case 'projector1':
                this.setState({
                    projector1: " Projector"    
                })
                break
            case 'lcd1':
                this.setState({
                    lcd1: " LCD/PlasmaTV"    
                })
                break
            case 'photo1':
                this.setState({
                    photo1: " Photography"    
                })
                break
            case 'video1':
                this.setState({
                    video1: " Videography"    
                })
                break
            case 'digital1':
                this.setState({
                    digital1: " Digital printing backdrop"    
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
            case 'name2':
                this.setState({
                    name2: e.target.value    
                })
                break
            case 'national2':
                this.setState({
                    national2: e.target.value    
                })
                break
            case 'telp2':
                this.setState({
                    telp2: e.target.value    
                })
                break
            case 'email2':
                this.setState({
                    email2: e.target.value    
                })
                break
            case 'startdate2':
                let startdate2 = e.split('T')[0]
                this.setState({
                    startdate2: startdate2  
                })
                break
            case 'starttime2':
                this.setState({
                    starttime2: e.target.value    
                })
                break
            case 'enddate2':
                let enddate2 = e.split('T')[0]
                this.setState({
                    enddate2: enddate2    
                })
                break
            case 'endtime2':
                this.setState({
                    endtime2: e.target.value    
                })
                break
            case 'tentative2':
                this.setState({
                    tentative2: ". *still tentative"    
                })
                break
            case 'type2':
                this.setState({
                    type2: e.target.value    
                })
                break
            case 'venue2':
                this.setState({
                    venue2: e.target.value    
                })
                break
            case 'numad2':
                this.setState({
                    numad2: e.target.value    
                })
                break
            case 'numkid2':
                this.setState({
                    numkid2: e.target.value    
                })
                break
            case 'esti2':
                this.setState({
                    esti2: e.target.value    
                })
                break
            case 'single2':
                this.setState({
                    single2: "Single Occupancy (King/Queensize) "    
                })
                break
            case 'twinking2':
                this.setState({
                    twinking2: "Twin Sharing (King/Queensize) "    
                })
                break
            case 'twinbed2':
                this.setState({
                    twinbed2: "Twin Sharing (Twin bed) "    
                })
                break
            case 'triple2':
                this.setState({
                    triple2: "Triple Sharing (add extrabed) "    
                })
                break
            case 'area2':
                this.setState({
                    area2: e.target.value    
                })
                break
            case 'beachfront2':
                this.setState({
                    beachfront2: "Beachfront "    
                })
                break
            case 'business2':
                this.setState({
                    business2: "Business facilities "    
                })
                break
            case 'golfcourse2':
                this.setState({
                    golfcourse2: "Golf course "    
                })
                break
            case 'kids2':
                this.setState({
                    kids2: "Kids/Family Friendly "    
                })
                break
            case 'nearbeach2':
                this.setState({
                    nearbeach2: "Near The Beach "    
                })
                break
            case 'nearmountain2':
                this.setState({
                    nearmountain2: "Near Mountain "    
                })
                break
            case 'nearrestaurant':
                this.setState({
                    nearrestaurant2: "Near Restaurant "  
                })
                break
            case 'heart2':
                this.setState({
                    heart2: "Heart of the City "    
                })
                break
            case 'tranquil2':
                this.setState({
                    tranquil2: "Tranquil Area "    
                })
                break
            case 'nearnight21':
                this.setState({
                    nearnight2: "Near nightclub "    
                })
                break
            case 'family2':
                this.setState({
                    family2: "Family room "    
                })
                break
            case 'fitness2':
                this.setState({
                    fitness2: "Fitness centre "    
                })
                break
            case 'pool2':
                this.setState({
                    pool2: "Pool "    
                })
                break
            case 'private2':
                this.setState({
                    private2: "Private pool "    
                })
                break
            case 'wifi2':
                this.setState({
                    wifi2: "WIFI "    
                })
                break
            case 'nonsmoking2':
                this.setState({
                    nonsmoking2: "Non-smoking room "    
                })
                break
            case 'smoking2':
                this.setState({
                    smoking2: "Smoking room "    
                })
                break
            case 'spa2':
                this.setState({
                    spa2: "Spa and wellness center "    
                })
                break
            case 'rest2':
                this.setState({
                    rest2: "Restaurant"    
                })
                break
            case 'otherrequest2':
                this.setState({
                    otherrequest2: e.target.value  
                })
                break
            case 'transporty2':
                this.setState({
                    transporty2: "yes, we need a tranportation "    
                })
                break
            case 'transportn2':
                this.setState({
                    transportn2: "no, we don't need any transportation "
                })
                break
            case 'dettransport2':
                this.setState({
                    dettransport2: e.target.value 
                })
                break
            case 'toursy2':
                this.setState({
                    toursy2: "yes, we need a tours "    
                })
                break
            case 'toursn2':
                this.setState({
                    toursn2: "no, we don't need any transportation "    
                })
                break
            case 'dettours2':
                this.setState({
                    dettours2: e.target.value   
                })
                break
            case 'acty2':
                this.setState({
                    acty2: "yes, we need activities "    
                })
                break
            case 'actn2':
                this.setState({
                    actn2: "no, we don't need activities "    
                })
                break
            case 'detact2':
                this.setState({
                    detact2: e.target.value    
                })
                break
            case 'mealsy2':
                this.setState({
                    mealsy2: "yes, we want meals "    
                })
                break
            case 'mealsn2':
                this.setState({
                    mealsn2: "no, we don't want meals "    
                })
                break
            case 'breakfast2':
                this.setState({
                    breakfast2: "Breakfast included "    
                })
                break
            case 'half2':
                this.setState({
                    half2: "Halfboard Included "    
                })
                break
            case 'full2':
                this.setState({
                    full2: "Fullboard "    
                })
                break
            case 'budget2':
                this.setState({
                    budget2: e.target.value    
                })
                break
            case 'remarks2':
                this.setState({
                    remarks2: e.target.value   
                })
                break
        }
    }

    render() {
        if(this.props.index==0) {
            return this.form0()
        }
        else if(this.props.index==1) {
            return this.form1()
        }
        else if(this.props.index==2) {
            return this.form2()
        }
    }


    handleSubmit(e) {
        e.preventDefault()
        if(this.props.index==0) {
            let message = "Name: " + this.state.name1 + ". Company name: " + this.state.compName1 + ". Telephone: " + this.state.telp1 + ". E-mail: " + this.state.email1 + ". Start date: " + this.state.startdate1 + ". Start time: "+ this.state.starttime1 + ". End date: " + this.state.enddate1 + ". End time: " + this.state.endtime1 + ". Event type: " + this.state.type1 + ". Guest gender of attendees: " + this.state.gender1 + ". Age profile of attendees: " + this.state.age1 + ". Special characteristics of attendees: " + this.state.character1 + ". Number of attendees: " + this.state.num1 + ". Managerial level of attendees: " + this.state.level1 + ". Theme: " + this.state.theme1 + ". Venue/hotel: " + this.state.venue + " stars. Number of adults: " + this.state.numad1 + ". Number of kids: " + this.state.numkid1 + ". Estimation accommodation budget (per-night, per-room: " + this.state.esti1 + ". Bedding type: " + this.state.bed1 + ". Hotel area: " + this.state.area1 + ". Hotel Facility: " + this.state.fac1 + ". Other request: " + this.state.otherrequest1 + this.state.meetingy1 + this.state.meetingn1 + ". Details for meeting: " + this.state.detmeeting1 + this.state.outingy1 + this.state.outingn1 + ". Details for outing: " + this.state.detouting1 + this.state.toursy1 + this.state.toursn1 + ". Details for tours: " + this.state.dettours1 + this.state.transporty1 + this.state.transportn1 + ". Details for transport: " + this.state.dettransport1 + this.state.eventy1 + this.state.eventn1 + ". Details for event: " + this.state.detevent1 + ". Talent or entertainment need: " + this.state.homeband1 + this.state.keyboardist1 + this.state.popband1 + this.state.openingdance1 + this.state.traddance1 + this.state.moddance1 + this.state.dj1 + this.state.mc1 + this.state.ushers1 + ". Other talent need: " + this.state.othertalent1 + ". Technical support need: " + this.state.sound1 + this.state.lighting1 + this.state.led1 + this.state.backdrop1 + this.state.projector1 + this.state.lcd1 + this.state.photo1 + this.state.video1 + this.state.digital1 + "Other technical support need: " + this.state.otherTech1 + ". Indicative budget: " + this.state.budget1 + ". Special remarks: " + this.state.remarks1
            console.log("AKHIRNYA",message)
        }
        else if(this.props.index==1) {
            let message = "Name: " + this.state.name2 + ". Nationality: " + this.state.national2 + ". Telephone: " + this.state.telp2 + ". E-mail: " + this.state.email2 + ". Start date: " + this.state.startdate2 + ". Start time: " + this.state.starttime2 + ". End date: " + this.state.enddate2 + ". End time: " + this.state.endtime2 + this.state.tentative2 + ". Event type: " + this.state.type2 + ". Venue/hotel: " + this.state.venue2 + ". Number of adults: " + this.state.numad2 + ". Number of kids: " + this.state.numkid2 + ". Estimation accommodation budget (per-night,per-room): " + this.state.esti2 + ". Bedding type: " + this.state.single2 + this.state.twinking2 + this.state.twinbed2 + this.state.triple2 + ". Hotel area: " + this.state.area2 + ". Hotel Preference: " + this.state.beachfront2 + this.state.business2 + this.state.golfcourse2 + this.state.kids2 + this.state.nearbeach2 + this.state.nearmountain2 + this.state.nearrestaurant2 + this.state.heart2 + this.state.tranquil2 + this.state.nearnight2 + ". Hotel facility: " + this.state.family2 + this.state.fitness2 + this.state.pool2 + this.state.private2 + this.state.wifi2 + this.state.nonsmoking2 + this.state.smoking2 + this.state.spa2 + this.state.rest2 + ". Other request: " + this.state.otherrequest2 + this.state.transporty2 + this.state.transportn2 + ". Transportation details: " + this.state.dettransport2 + this.state.toursy2 + this.state.toursy2 + ". Tours details: " + this.state.dettours2 + this.state.acty2 + this.state.acty2 + this.state.mealsy2 + this.state.mealsn2 + this.state.breakfast2 + this.state.half2 + this.state.full2 + ". Indicative budget: " + this.state.budget2 + ". Special remarks: " + this.state.remarks2
            console.log("HEHEHE",message)
        }
        else if(this.props.index==2) {
            let message = "Name: "
            console.log("hihihhiihihhihhihihh",message)
        }
        
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
                            <label for="event-start">Starts from (Date) :</label>
                            <Datepicker value={this.state.startdate1} onChange={(e) => this.handleChange(e,'startdate1')} />
                        </div>
                        <div className="form-group">
                            <label for="event-start">Starts from (Time) :</label>
                            <input type="text" className="form-control short-input" value={this.state.starttime1} onChange={(e) => this.handleChange(e,'starttime1')} id="type" />
                        </div>
                        <div className="form-group">
                            <label for="event-end">Ends (Date) :</label>
                            <Datepicker value={this.state.enddate1} onChange={(e) => this.handleChange(e,'enddate1')} />    
                        </div>
                        <div className="form-group">
                            <label for="event-start">Ends (Time) :</label>
                            <input type="text" className="form-control short-input" value={this.state.endtime1} onChange={(e) => this.handleChange(e,'endtime1')} id="type" />
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
                                <select className="form-control" value={this.state.venue} onChange={(e) => this.handleChange(e,'venue')} id="sel1">
                                    <option value="5" >5</option>
                                    <option value="4" >4</option>
                                    <option value="3" >3</option>
                                    <option value="2" >2</option>
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
                                <input type="text" className="form-control" value={this.state.otherrequest1} onChange={(e) => this.handleChange(e,'otherrequest1')} id="other" />
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
                            <input type="text" className="form-control" value={this.state.detouting1} onChange={(e) => this.handleChange(e,'detouting1')} id="comp-name" />
                        </div>
                    <div className="form-group">
                        <label for="phone">TOURS :</label>
                        <div className="radio-inline">
                            <label><input name="tours1" type="radio" value={this.state.toursy1} onChange={(e) => this.handleChange(e,'toursy1')}/>Yes</label>
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
                            <input type="text" className="form-control" type="input" value={this.state.detevent1} onChange={(e) => this.handleChange(e,'detevent1')} id="comp-name" />
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
                    <button type="submit" className="btn btn-default" onClick={(e) => this.handleSubmit(e)}>Submit</button>
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
                            <input type="text" className="form-control" value={this.state.name2} onChange={(e) => this.handleChange(e,'name2')} id="name" required/>
                        </div>
                        <div className="form-group">
                            <label for="name">Nationality :</label>
                            <input type="text" className="form-control" value={this.state.national2} onChange={(e) => this.handleChange(e,'national2')} id="name" required/>
                        </div>
                        <div className="form-group">
                            <label for="phone">Telephone :</label>
                            <input type="number" className="form-control" value={this.state.telp2} onChange={(e) => this.handleChange(e,'telp2')} id="phone" required/>
                        </div>
                        <div className="form-group">
                            <label for="email">E-mail :</label>
                            <input type="email" className="form-control" value={this.state.email2} onChange={(e) => this.handleChange(e,'email2')} id="email" required/>
                        </div>
                    </div>
                    <br/>
                    <h5>TRIP DETAILS</h5>
                    <div className="form-section">
                        <div className="form-group">
                            <label for="event-start">Starts from (Date) :</label>
                            <Datepicker value={this.state.startdate2} onChange={(e) => this.handleChange(e,'startdate2')} />
                        </div>
                        <div className="form-group">
                            <label for="event-start">Starts from (Time) :</label>
                            <input type="text" className="form-control short-input" value={this.state.starttime2} onChange={(e) => this.handleChange(e,'starttime2')} id="type" />
                        </div>
                        <div className="form-group">
                            <label for="event-end">Ends (Date) :</label>
                            <Datepicker value={this.state.enddate2} onChange={(e) => this.handleChange(e,'enddate2')} />    
                        </div>
                        <div className="form-group">
                            <label for="event-start">Ends (Time) :</label>
                            <input type="text" className="form-control short-input" value={this.state.endtime2} onChange={(e) => this.handleChange(e,'endtime2')} id="type" />
                        </div>
                        <div className="checkbox-inline">
                            <label><input type="checkbox" value={this.state.tentative2} onChange={(e) => this.handleChange(e,'tentative2')}/>Still Tentative</label>
                        </div>
                        <div className="form-group">
                            <label for="phone">Event Type :</label>
                            <select className="form-control" value={this.state.type2} onChange={(e) => this.handleChange(e,'type2')} id="sel1">
                                <option value="Family" >Family</option>
                                <option value="Friends" >Friends</option>
                                <option value="Mix Group" >Mix Group</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <h5>ACCOMMODATION</h5>
                    <div className="form-section">
                        <div className="form-group">
                            <label for="name">Venue/Hotel :</label>
                             <select className="form-control" value={this.state.venue2} onChange={(e) => this.handleChange(e,'venue2')} id="sel1">
                                <option value="Apartment" >Apartment</option>
                                <option value="Bungalow" >Bungalow</option>
                                <option value="Guest House" >Guest House</option>
                                <option value="5 stars" >5 stars</option>
                                <option value="4 stars" >4 stars</option>
                                <option value="3 stars" >3 stars</option>
                                <option value="2 stars" >2 stars</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="comp-name">Number of Adult :</label>
                            <input type="number" className="form-control" value={this.state.numad2} onChange={(e) => this.handleChange(e,'numad2')} id="comp-name" />
                        </div>
                        <div className="form-group">
                            <label for="phone">Number of Kids (if there are any) : </label>
                            <input type="number" className="form-control" value={this.state.numkid2} onChange={(e) => this.handleChange(e,'numkid2')} id="phone" />
                        </div>
                        <div className="form-group">
                            <label for="email">Estimation accommodation budget (per-night, per-room) :</label>
                            <input type="number" className="form-control" value={this.state.esti2} onChange={(e) => this.handleChange(e,'esti2')} id="email" />
                        </div>
                        <h5>REQUEST :</h5>
                        <div className="form-section">
                            <div className="form-group">
                                <label for="name">Bedding type :</label>
                                <div className="checkbox">
                                    <label><input type="checkbox"  value={this.state.single2} onChange={(e) => this.handleChange(e,'single2')}/>Single Occupancy (King/Queensize)</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.twinking2} onChange={(e) => this.handleChange(e,'twinking2')}/>Twin Sharing (King/Queensize)</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.twinbed2} onChange={(e) => this.handleChange(e,'twinbed2')}/>Twin Sharing (Twin bed)</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.triple2} onChange={(e) => this.handleChange(e,'triple2')}/>Triple Sharing (add extrabed)</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="comp-name">Hotel Area :</label>
                                <input type="text" className="form-control" value={this.state.area2} onChange={(e) => this.handleChange(e,'area2')} id="comp-name" />
                            </div>
                            <div className="form-group">
                                <label for="phone">Hotel Preference :</label>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.beachfront2} onChange={(e) => this.handleChange(e,'beachfront2')}/>Beachfront</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.business2} onChange={(e) => this.handleChange(e,'business2')}/>Business facilities</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.golfcourse2} onChange={(e) => this.handleChange(e,'golfcourse2')}/>Golf Course</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.kids2} onChange={(e) => this.handleChange(e,'kids2')}/>Kids/Family Friendly</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.nearbeach2} onChange={(e) => this.handleChange(e,'nearbeach2')}/>Near The Beach</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.nearmountain2} onChange={(e) => this.handleChange(e,'nearmountain2')}/>Near Mountain</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.nearrestaurant2} onChange={(e) => this.handleChange(e,'nearrestaurant2')}/>Near Restaurant</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.heart2} onChange={(e) => this.handleChange(e,'heart2')}/>Heart of the City</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.tranquil2} onChange={(e) => this.handleChange(e,'tranquil2')}/>Tranquil Area</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.nearnight2} onChange={(e) => this.handleChange(e,'nearnight2')}/>Near Nightclub</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="comp-name">Hotel Facility :</label>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.family2} onChange={(e) => this.handleChange(e,'family2')}/>Family Room</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.fitness2} onChange={(e) => this.handleChange(e,'fitness2')}/>Fitness Centre</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.pool2} onChange={(e) => this.handleChange(e,'pool2')}/>Pool</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.private2} onChange={(e) => this.handleChange(e,'private2')}/>Private Pool</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.wifi2} onChange={(e) => this.handleChange(e,'wifi2')}/>WIFI</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.nonsmoking2} onChange={(e) => this.handleChange(e,'nonsmoking2')}/>Non-smoking room</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.smoking2} onChange={(e) => this.handleChange(e,'smoking2')}/>Smoking room</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.spa2} onChange={(e) => this.handleChange(e,'spa2')}/>Spa & Wellness Center</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.rest2} onChange={(e) => this.handleChange(e,'rest2')}/>Restaurant</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="email">Others :</label>
                                <input type="text" className="form-control" value={this.state.otherrequest2} onChange={(e) => this.handleChange(e,'otherrequest2')} id="email" />
                            </div>
                        </div>    
                    </div>
                    <br/>
                    <div className="form-group">
                        <label for="name">TRANPORTATION :</label>
                        <div className="radio-inline">
                            <label><input type="radio" name="trans" value={this.state.transporty2} onChange={(e) => this.handleChange(e,'transporty2')}/>Yes</label>
                        </div>
                        <div className="radio-inline">
                            <label><input type="radio" name="trans" value={this.state.transportn2} onChange={(e) => this.handleChange(e,'transportn2')}/>No</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <p for="comp-name">Details :</p>
                        <input type="text" className="form-control" value={this.state.dettransport2} onChange={(e) => this.handleChange(e,'dettransport2')} id="comp-name" />
                    </div>
                    <div className="form-group">
                        <label for="comp-name">TOURS / SIGHTSEEING :</label>
                        <div className="radio-inline">
                            <label><input name="tours" type="radio" value={this.state.toursy2} onChange={(e) => this.handleChange(e,'toursy2')}/>Yes</label>
                        </div>
                        <div className="radio-inline">
                            <label><input name="tours" type="radio" value={this.state.toursn2} onChange={(e) => this.handleChange(e,'toursn2')}/>No</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <p for="comp-name">Details :</p>
                        <input type="text" className="form-control" value={this.state.dettours2} onChange={(e) => this.handleChange(e,'dettours2')} id="comp-name" />
                    </div>
                    <div className="form-group">
                        <label for="comp-name">ACTIVITIES :</label>
                        <div className="radio-inline">
                            <label><input name="act" type="radio" value={this.state.acty2} onChange={(e) => this.handleChange(e,'acty2')}/>Yes</label>
                        </div>
                        <div className="radio-inline">
                            <label><input name="act" type="radio" value={this.state.actn2} onChange={(e) => this.handleChange(e,'actn2')}/>No</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <p for="comp-name">Details :</p>
                        <input type="text" className="form-control" value={this.state.detact2} onChange={(e) => this.handleChange(e,'detact2')} id="comp-name" />
                    </div>
                    <div className="form-group">
                        <label for="comp-name">MEALS :</label>
                        <div className="radio-inline">
                            <label><input name="meals" type="radio" value={this.state.mealsy2} onChange={(e) => this.handleChange(e,'mealsy2')}/>Yes</label>
                        </div>
                        <div className="radio-inline">
                            <label><input name="meals" type="radio" value={this.state.mealsn2} onChange={(e) => this.handleChange(e,'mealsn2')}/>No</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value={this.state.breakfast2} onChange={(e) => this.handleChange(e,'breakfast2')}/>Breakfast Included</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value={this.state.half2} onChange={(e) => this.handleChange(e,'half2')}/>Halfboard (B&L)</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value={this.state.full2} onChange={(e) => this.handleChange(e,'full2')}/>Fullboard (B,L&D)</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="email">Indicative Budget :</label>
                        <input type="number" className="form-control" value={this.state.budget2} onChange={(e) => this.handleChange(e,'budget2')}id="email" />
                    </div>
                    <div className="form-group">
                        <label for="email">Special Remarks :</label>
                        <input type="text" className="form-control" value={this.state.remarks2} onChange={(e) => this.handleChange(e,'remarks2')} id="email" />
                    </div>
                    <br/>
                    <button type="submit" onClick={(e) => this.handleSubmit(e)} className="btn btn-default">Submit</button>
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
                            <input type="text" className="form-control" value={this.state.name3} onChange={(e) => this.handleChange(e,'name3')} id="name" required/>
                        </div>
                        <div className="form-group">
                            <label for="name">Nationality :</label>
                            <input type="text" className="form-control" value={this.state.national3} onChange={(e) => this.handleChange(e,'national3')} id="name" required/>
                        </div>
                        <div className="form-group">
                            <label for="phone">Telephone :</label>
                            <input type="number" className="form-control" value={this.state.telp3} onChange={(e) => this.handleChange(e,'telp3')} id="phone" required/>
                        </div>
                        <div className="form-group">
                            <label for="email">E-mail :</label>
                            <input type="email" className="form-control" value={this.state.email3} onChange={(e) => this.handleChange(e,'email3')} id="email" required/>
                        </div>
                    </div>
                    <br/>
                    <h5>TRIP DETAILS</h5>
                    <div className="form-section">
                        <div className="form-group">
                            <label for="event-start">Starts from (Date) :</label>
                            <Datepicker value={this.state.startdate3} onChange={(e) => this.handleChange(e,'startdate3')} />
                        </div>
                        <div className="form-group">
                            <label for="event-start">Starts from (Time) :</label>
                            <input type="text" className="form-control short-input" value={this.state.starttime3} onChange={(e) => this.handleChange(e,'starttime3')} id="type" />
                        </div>
                        <div className="form-group">
                            <label for="event-end">Ends (Date) :</label>
                            <Datepicker value={this.state.enddate3} onChange={(e) => this.handleChange(e,'enddate3')} />    
                        </div>
                        <div className="form-group">
                            <label for="event-start">Ends (Time) :</label>
                            <input type="text" className="form-control short-input" value={this.state.endtime3} onChange={(e) => this.handleChange(e,'endtime3')} id="type" />
                        </div>
                        <div className="checkbox-inline">
                            <label><input type="checkbox" value={this.state.tentative3} onChange={(e) => this.handleChange(e,'tentative3')} />Still Tentative</label>
                        </div>
                        <div className="form-group">
                            <label for="phone">Number of Rooms :</label>
                            <input type="number" className="form-control" value={this.state.numroom3} onChange={(e) => this.handleChange(e,'numroom3')}  id="phone" required/>
                        </div>
                    </div>
                    <br/>
                    <h5>ACCOMMODATION</h5>
                    <div className="form-section">
                        <div className="form-group">
                            <label for="name">Venue/Hotel :</label>
                            <select className="form-control" value={this.state.venue3} onChange={(e) => this.handleChange(e,'venue3')} id="sel1">
                                <option value="Apartment" >Apartment</option>
                                <option value="Bungalow" >Bungalow</option>
                                <option value="Guest House" >Guest House</option>
                                <option value="5 stars" >5 stars</option>
                                <option value="4 stars" >4 stars</option>
                                <option value="3 stars" >3 stars</option>
                                <option value="2 stars" >2 stars</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="comp-name">Number of Adult :</label>
                            <input type="text" className="form-control" value={this.state.numad3} onChange={(e) => this.handleChange(e,'numad3')} id="comp-name" required/>
                        </div>
                        <div className="form-group">
                            <label for="phone">Number of Kids (if there are any) : </label>
                            <input type="number" className="form-control" value={this.state.numkid3} onChange={(e) => this.handleChange(e,'numkid3')} id="phone" required/>
                        </div>
                        <div className="form-group">
                            <label for="email">Estimation accommodation budget (per-night, per-room) :</label>
                            <input type="email" className="form-control" value={this.state.esti3} onChange={(e) => this.handleChange(e,'esti3')} id="email" required/>
                        </div>
                        <h5>REQUEST :</h5>
                        <div className="form-section">
                            <div className="form-group">
                                <label for="comp-name">Hotel Area :</label>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.amed3} onChange={(e) => this.handleChange(e,'amed3')}/>Amed</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.candi3} onChange={(e) => this.handleChange(e,'candi3')}/>Candidasa</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.cangguarea3} onChange={(e) => this.handleChange(e,'cangguarea3')}/>Canggu area</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.canggubeach3} onChange={(e) => this.handleChange(e,'canggubeach3')}/>Canggu Beach</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.jimbaran3} onChange={(e) => this.handleChange(e,'jimbaran3')}/>Jimbaran</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.karang3} onChange={(e) => this.handleChange(e,'karang3')}/>Karangasem</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.kerobokan3} onChange={(e) => this.handleChange(e,'kerobokan3')}/>Kerobokan</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.kids3} onChange={(e) => this.handleChange(e,'kids3')}/>Kids/Family Friendly</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.kutaarea3} onChange={(e) => this.handleChange(e,'kutaarea3')}/>Kuta area</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.kutabeach3} onChange={(e) => this.handleChange(e,'kutabeach3')}/>Kuta Beach</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.legianarea3} onChange={(e) => this.handleChange(e,'legianarea3')}/>Legian Area</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.legianbeach3} onChange={(e) => this.handleChange(e,'legianbeach3')}/>Legian Beach</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.lembongan3} onChange={(e) => this.handleChange(e,'lembongan3')}/>Lembongan</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.lovinabeach3} onChange={(e) => this.handleChange(e,'lovinabeach3')}/>Lovina Beach</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.lovina3} onChange={(e) => this.handleChange(e,'lovina3')}/>Lovina</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.menjangan3} onChange={(e) => this.handleChange(e,'menjangan3')}/>Menjangan</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.nearbeach3} onChange={(e) => this.handleChange(e,'nearbeach3')}/>Near The Beach</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.nusadua3} onChange={(e) => this.handleChange(e,'nusadua3')}/>Nusadua Beach</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.petit3} onChange={(e) => this.handleChange(e,'petit3')}/>Petitenget</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.seminyakbeach3} onChange={(e) => this.handleChange(e,'seminyakbeach3')}/>Seminyak Beach</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.seminyak3} onChange={(e) => this.handleChange(e,'seminyak3')}/>Seminyak</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.tabanan3} onChange={(e) => this.handleChange(e,'tabanan3')}/>Tabanan</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.tanjung3} onChange={(e) => this.handleChange(e,'tanjung3')}/>Tanjung Benoa</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.sanurbeach3} onChange={(e) => this.handleChange(e,'sanurbeach3')}/>Sanur Beach</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.sanurarea3} onChange={(e) => this.handleChange(e,'sanurarea3')}/>Sanur Area</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.sinaraja3} onChange={(e) => this.handleChange(e,'sinaraja3')}/>Sinaraja</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.tuban3} onChange={(e) => this.handleChange(e,'tuban3')}/>Tuban</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.tulamban3} onChange={(e) => this.handleChange(e,'tulamban3')}/>Tulamben</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.ubud3} onChange={(e) => this.handleChange(e,'ubud3')}/>Ubud</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.uluwatu3} onChange={(e) => this.handleChange(e,'uluwatu3')}/>Uluwatu</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.ungasan3} onChange={(e) => this.handleChange(e,'ungasan3')}/>Ungasan</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="phone">Hotel Preference :</label>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.beachfront3} onChange={(e) => this.handleChange(e,'beachfront3')}/>Beachfront</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.business3} onChange={(e) => this.handleChange(e,'business3')}/>Business facilities</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.golfcourse3} onChange={(e) => this.handleChange(e,'golfcourse3')}/>Golf Course</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.kidsfam3} onChange={(e) => this.handleChange(e,'kidsfam3')}/>Kids/Family Friendly</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.nearthebeach3} onChange={(e) => this.handleChange(e,'nearthebeach3')}/>Near The Beach</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.nearmountain3} onChange={(e) => this.handleChange(e,'nearmountain3')}/>Near Mountain</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.nearrestaurant3} onChange={(e) => this.handleChange(e,'nearrestaurant3')}/>Near Restaurant</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.heart3} onChange={(e) => this.handleChange(e,'heart3')}/>Heart of the City</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.tranquil3} onChange={(e) => this.handleChange(e,'tranquil3')}/>Tranquil Area</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.nearnight3} onChange={(e) => this.handleChange(e,'nearnight3')}/>Near Nightclub</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="comp-name">Hotel Facility :</label>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.family3} onChange={(e) => this.handleChange(e,'family3')}/>Family Room</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.fitness3} onChange={(e) => this.handleChange(e,'fitness3')}/>Fitness Centre</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.pool3} onChange={(e) => this.handleChange(e,'pool3')}/>Pool</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.private3} onChange={(e) => this.handleChange(e,'private3')}/>Private Pool</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.wifi3} onChange={(e) => this.handleChange(e,'wifi3')}/>WIFI</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.nonsmoking3} onChange={(e) => this.handleChange(e,'nonsmoking3')}/>Non-smoking room</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.smoking3} onChange={(e) => this.handleChange(e,'smoking3')}/>Smoking room</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.spa3} onChange={(e) => this.handleChange(e,'spa3')}/>Spa & Wellness Center</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value={this.state.rest3} onChange={(e) => this.handleChange(e,'rest3')}/>Restaurant</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="email">Others :</label>
                                <input type="email" className="form-control" value={this.state.otherrequest3} onChange={(e) => this.handleChange(e,'otherrequest3')} id="email" required/>
                            </div>
                        </div>    
                    </div>
                    <br/>
                    <div className="form-group">
                        <label for="name">TRANPORTATION :</label>
                        <div className="checkbox-inline">
                            <label><input type="checkbox" value={this.state.transporty3} onChange={(e) => this.handleChange(e,'transporty3')}/>Yes</label>
                        </div>
                        <div className="checkbox-inline">
                            <label><input type="checkbox" value={this.state.transportn3} onChange={(e) => this.handleChange(e,'transportn3')}/>No</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <p for="comp-name">Details :</p>
                        <input type="text" className="form-control" value={this.state.dettransport3} onChange={(e) => this.handleChange(e,'dettransport3')} id="comp-name" required/>
                    </div>
                    <div className="form-group">
                        <label for="email">Special Remarks :</label>
                        <input type="email" className="form-control" value={this.state.remarks3} onChange={(e) => this.handleChange(e,'remarks3')} id="email" required/>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form