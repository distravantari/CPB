import React, { Component } from 'react'
import Datepicker from './Datepicker'
import receiveForm from '../actions/Form'
import { connect } from 'react-redux'

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
            tulamben3: "",
            ubud3: "",
            uluwatu3: "",
            ungasan3: "",
            beachfront3: "",
            business3: "",
            golfcourse3: "",
            kidsfam3: "",
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
            remarks3: "",
            name4: "",
            national4: "",
            telp4: "",
            email4: "",
            startdate4: "",
            starttime4: "",
            enddate4: "",
            endtime4: "",
            tentative4: "",
            numroom4: "",
            esti4: "",
            area4: "",
            beachfront4: "",
            business4: "",
            golfcourse4: "",
            kidsfam4: "",
            nearthebeach4: "",
            nearmountain4: "",
            nearrestaurant4: "",
            heart4: "",
            tranquil4: "",
            nearnight4: "",
            family4: "",
            fitness4: "",
            pool4: "",
            private4: "",
            wifi4: "",
            nonsmoking4: "",
            smoking4: "",
            spa4: "",
            rest4: "",
            otherrequest4: "",
            transporty4: "",
            transportn4: "",
            dettransport4: "",
            toursy4: "",
            toursn4: "",
            dettours4: "",
            acty4: "",
            actn4: "",
            detact4: "",
            mealsy4: "",
            mealsn4: "",
            breakfast4: "",
            half4: "",
            full4: "",
            budget4: "",
            remarks4: "",
            name5: "",
            national5: "",
            telp5: "",
            email5: "",
            message5: ""
        }
    }

    handleChange(e,key) {
        switch(key) {
            case 'name1':
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
                    homeband1: " Home band/n"
                })
                break
            case 'keyboardist1':
                this.setState({
                    keyboardist1: " Keyboardist + Singer/n"
                })
                break
            case 'popband1':
                this.setState({
                    popband1: " Pop band\n"
                })
                break
            case 'openingdance1':
                this.setState({
                    openingdance1: " Opening dance\n"
                })
                break
            case 'traddance1':
                this.setState({
                    traddance1: " Tradiotional dance\n"
                })
                break
            case 'moddance1':
                this.setState({
                    moddance1: " Modern dance\n"
                })
                break
            case 'dj1':
                this.setState({
                    dj1: " DJ\n"
                })
                break
            case 'mc1':
                this.setState({
                    mc1: " MC\n"
                })
                break
            case 'ushers1':
                this.setState({
                    ushers1: " Ushers\n"
                })
                break
            case 'othertalent1':
                this.setState({
                    othertalent1: e.target.value
                })
                break
            case 'sound1':
                this.setState({
                    sound1: " Sound\n"
                })
                break
            case 'lighting1':
                this.setState({
                    lighting1: " Lighting\n"
                })
                break
            case 'led1':
                this.setState({
                    led1: " LED backdrop\n"
                })
                break
            case 'backdrop1':
                this.setState({
                    backdrop1: " 3D backdrop\n"
                })
                break
            case 'projector1':
                this.setState({
                    projector1: " Projector\n"
                })
                break
            case 'lcd1':
                this.setState({
                    lcd1: " LCD/PlasmaTV\n"
                })
                break
            case 'photo1':
                this.setState({
                    photo1: " Photography\n"
                })
                break
            case 'video1':
                this.setState({
                    video1: " Videography\n"
                })
                break
            case 'digital1':
                this.setState({
                    digital1: " Digital printing backdrop\n"
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
                    single2: " Single Occupancy (King/Queensize)\n"
                })
                break
            case 'twinking2':
                this.setState({
                    twinking2: " Twin Sharing (King/Queensize)\n"
                })
                break
            case 'twinbed2':
                this.setState({
                    twinbed2: " Twin Sharing (Twin bed)\n"
                })
                break
            case 'triple2':
                this.setState({
                    triple2: " Triple Sharing (add extrabed)\n"
                })
                break
            case 'area2':
                this.setState({
                    area2: e.target.value
                })
                break
            case 'beachfront2':
                this.setState({
                    beachfront2: " Beachfront\n"
                })
                break
            case 'business2':
                this.setState({
                    business2: " Business facilities\n"
                })
                break
            case 'golfcourse2':
                this.setState({
                    golfcourse2: " Golf course\n"
                })
                break
            case 'kids2':
                this.setState({
                    kids2: " Kids/Family Friendly\n"
                })
                break
            case 'nearbeach2':
                this.setState({
                    nearbeach2: " Near The Beach\n"
                })
                break
            case 'nearmountain2':
                this.setState({
                    nearmountain2: " Near Mountain\n"
                })
                break
            case 'nearrestaurant':
                this.setState({
                    nearrestaurant2: " Near Restaurant\n"
                })
                break
            case 'heart2':
                this.setState({
                    heart2: " Heart of the City\n"
                })
                break
            case 'tranquil2':
                this.setState({
                    tranquil2: " Tranquil Area\n"
                })
                break
            case 'nearnight21':
                this.setState({
                    nearnight2: " Near nightclub\n"
                })
                break
            case 'family2':
                this.setState({
                    family2: " Family room\n"
                })
                break
            case 'fitness2':
                this.setState({
                    fitness2: " Fitness centre\n"
                })
                break
            case 'pool2':
                this.setState({
                    pool2: " Pool\n"
                })
                break
            case 'private2':
                this.setState({
                    private2: " Private pool\n"
                })
                break
            case 'wifi2':
                this.setState({
                    wifi2: " WIFI\n"
                })
                break
            case 'nonsmoking2':
                this.setState({
                    nonsmoking2: " Non-smoking room\n"
                })
                break
            case 'smoking2':
                this.setState({
                    smoking2: " Smoking room\n"
                })
                break
            case 'spa2':
                this.setState({
                    spa2: " Spa and wellness center\n"
                })
                break
            case 'rest2':
                this.setState({
                    rest2: " Restaurant\n"
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
                    breakfast2: " Breakfast included\n"
                })
                break
            case 'half2':
                this.setState({
                    half2: " Halfboard Included\n"
                })
                break
            case 'full2':
                this.setState({
                    full2: " Fullboard\n"
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
            case 'name3':
                this.setState({
                    name3: e.target.value
                })
                break
            case 'national3':
                this.setState({
                    national3: e.target.value
                })
                break
            case 'telp3':
                this.setState({
                    telp3: e.target.value
                })
                break
            case 'email3':
                this.setState({
                    email3: e.target.value
                })
                break
            case 'startdate3':
                let startdate3 = e.split('T')[0]
                this.setState({
                    startdate3: startdate3
                })
                break
            case 'starttime3':
                this.setState({
                    starttime3: e.target.value
                })
                break
            case 'enddate3':
                let enddate3 = e.split('T')[0]
                this.setState({
                    enddate3: enddate3
                })
                break
            case 'endtime3':
                this.setState({
                    endtime3: e.target.value
                })
                break
            case 'tentative3':
                this.setState({
                    tentative3: " *still tentative"
                })
                break
            case 'numroom3':
                this.setState({
                    numroom3: e.target.value
                })
                break
            case 'venue3':
                this.setState({
                    venue3: e.target.value
                })
                break
            case 'numad3':
                this.setState({
                    numad3: e.target.value
                })
                break
            case 'numkid3':
                this.setState({
                    numkid3: e.target.value
                })
                break
            case 'esti3':
                this.setState({
                    esti3: e.target.value
                })
                break
            case 'amed3':
                this.setState({
                    amed3: " Amed\n"
                })
                break
            case 'candi3':
                this.setState({
                    candi3: " Candidasa\n"
                })
                break
            case 'cangguarea3':
                this.setState({
                    cangguarea3: " Canggu area\n"
                })
                break
            case 'canggubeach3':
                this.setState({
                    canggubeach3: " Canggu beach\n"
                })
                break
            case 'jimbaran3':
                this.setState({
                    jimbaran3: " Jimbaran\n"
                })
                break
            case 'karang3':
                this.setState({
                    karang3: " Karangasem\n"
                })
                break
            case 'kerobokan3':
                this.setState({
                    kerobokan3: " Kerobokan\n"
                })
                break
            case 'kids3':
                this.setState({
                    kids3: " Kids/Family Friendly\n"
                })
                break
            case 'kutaarea3':
                this.setState({
                    kutaarea3: " Kuta area\n"
                })
                break
            case 'kutabeach3':
                this.setState({
                    kutabeach3: " Kuta beach\n"
                })
                break
            case 'legianarea3':
                this.setState({
                    legianarea3: " Legian area\n"
                })
                break
            case 'legianbeach3':
                this.setState({
                    legianbeach3: " Legian beach\n"
                })
                break
            case 'lembongan3':
                this.setState({
                    lembongan3: " Lembongan\n"
                })
                break
            case 'lovinabeach3':
                this.setState({
                    lovinabeach3: " Lovina beach\n"
                })
                break
            case 'lovina3':
                this.setState({
                    lovina3: " Lovina\n"
                })
                break
            case 'menjangan3':
                this.setState({
                    menjangan3: " Menjangan\n"
                })
                break
            case 'nearbeach3':
                this.setState({
                    nearbeach3: " Near the beach\n"
                })
                break
            case 'nusadua3':
                this.setState({
                    nusadua3: " Nusadua beach\n"
                })
                break
            case 'petit3':
                this.setState({
                    petit3: " Petitenget\n"
                })
                break
            case 'seminyakbeach3':
                this.setState({
                    seminyakbeach3: " Seminyak beach\n"
                })
                break
            case 'seminyak3':
                this.setState({
                    seminyak3: " Seminyak\n"
                })
                break
            case 'tabanan3':
                this.setState({
                    tabanan3: " Tabanan\n"
                })
                break
            case 'tanjung3':
                this.setState({
                    tanjung3: " Tanjung Benoa\n"
                })
                break
            case 'sanurbeach3':
                this.setState({
                    sanurbeach3: " Sanur beach\n"
                })
                break
            case 'sanurarea3':
                this.setState({
                    sanurarea3: " Sanur area\n"
                })
                break
            case 'sinaraja3':
                this.setState({
                    sinaraja3: " Sinaraja\n"
                })
                break
            case 'tuban3':
                this.setState({
                    tuban3: " Tuban\n"
                })
                break
            case 'tulamben3':
                this.setState({
                    tulamben3: " Tulamben\n"
                })
                break
            case 'ubud3':
                this.setState({
                    ubud3: " Ubud\n"
                })
                break
            case 'uluwatu3':
                this.setState({
                    uluwatu3: " Uluwatu\n"
                })
                break
            case 'ungasan3':
                this.setState({
                    ungasan3: " Ungasan\n"
                })
                break
            case 'beachfront3':
                this.setState({
                    beachfront3: " Beachfront\n"
                })
                break
            case 'business3':
                this.setState({
                    business3: " Business facilities\n"
                })
                break
            case 'golfcourse3':
                this.setState({
                    golfcourse3: " Golf course\n"
                })
                break
            case 'kidsfam3':
                this.setState({
                    kidsfam3: " Kids/family friendly\n"
                })
                break
            case 'nearthebeach3':
                this.setState({
                    nearthebeach3: " Near the beach\n"
                })
                break
            case 'nearmountain3':
                this.setState({
                    nearmountain3: " Near mountain\n"
                })
                break
            case 'nearrestaurant3':
                this.setState({
                    nearrestaurant3: " Near restaurant\n"
                })
                break
            case 'heart3':
                this.setState({
                    heart3: " Heart of the city\n"
                })
                break
            case 'tranquil3':
                this.setState({
                    tranquil3: " Tranquil area\n"
                })
                break
            case 'nearnight3':
                this.setState({
                    nearnight3: " Near nightclub\n"
                })
                break
            case 'family3':
                this.setState({
                    family3: " Family room\n"
                })
                break
            case 'fitness3':
                this.setState({
                    fitness3: " Fitness centre\n"
                })
                break
            case 'pool3':
                this.setState({
                    pool3: " Pool\n"
                })
                break
            case 'private3':
                this.setState({
                    private3: " Private pool\n"
                })
                break
            case 'wifi3':
                this.setState({
                    wifi3: " WIFI\n"
                })
                break
            case 'nonsmoking3':
                this.setState({
                    nonsmoking3: " Non-smoking room\n"
                })
                break
            case 'smoking3':
                this.setState({
                    smoking3: " Smoking room\n"
                })
                break
            case 'spa3':
                this.setState({
                    spa3: " Spa & Wellness centre\n"
                })
                break
            case 'rest3':
                this.setState({
                    rest3: " Restaurant\n"
                })
                break
            case 'otherrequest3':
                this.setState({
                    otherrequest3: e.target.value
                })
                break
            case 'transporty3':
                this.setState({
                    transporty3: " yes, we need a transportation"
                })
                break
            case 'transportn3':
                this.setState({
                    transportn3: " no, we don't need transportation"
                })
                break
            case 'dettransport3':
                this.setState({
                    dettransport3: e.target.value
                })
                break
            case 'remarks3':
                this.setState({
                    remarks3: e.target.value
                })
                break
            case 'name4':
                this.setState({
                    name4: e.target.value
                })
            case 'national4':
                this.setState({
                    national4: e.target.value
                })
            case 'telp4':
                this.setState({
                    telp4: e.target.value
                })
            case 'email4':
                this.setState({
                    email4: e.target.value
                })
             case 'startdate4':
                let startdate4 = e.split('T')[0]
                this.setState({
                    startdate4: startdate4  
                })
                break
            case 'starttime4':
                this.setState({
                    starttime4: e.target.value
                })
             case 'enddate4':
                let enddate4 = e.split('T')[0]
                this.setState({
                    enddate4: enddate4  
                })
                break
            case 'endtime4':
                this.setState({
                    endtime4: e.target.value
                })
            case 'tentative4':
                this.setState({
                    tentative4: " *still tentative\n"
                })
            case 'numroom4':
                this.setState({
                    numroom4: e.target.value
                })
            case 'esti4':
                this.setState({
                    esti4: e.target.value
                })
            case 'beachfront4':
                this.setState({
                    beachfront4: " Beach front\n"
                })
            case 'business4':
                this.setState({
                    business4: " Business facilities\n"
                })
            case 'golfcourse4':
                this.setState({
                    golfcourse4: " Golf Course\n"
                })
            case 'kidsfam4':
                this.setState({
                    kidsfam4: " Kids/Family Friendly\n"
                })
            case 'nearthebeach4':
                this.setState({
                    nearthebeach4: " Near The Beach\n"
                })
            case 'nearmountain4':
                this.setState({
                    nearmountain4: " Near Mountain\n"
                })
            case 'nearrestaurant4':
                this.setState({
                    nearrestaurant4: " Near Restaurant\n"
                })
            case 'heart4':
                this.setState({
                    heart4: " Heart of the City\n"
                })
            case 'tranquil4':
                this.setState({
                    tranquil4: " Tranquil Area\n"
                })
            case 'nearnight4':
                this.setState({
                    nearnight4: " Near Nightclub\n"
                })
            case 'family4':
                this.setState({
                    family4: " Family Room\n"
                })
            case 'fitness4':
                this.setState({
                    fitness4: " Fitness Centre\n"
                })
            case 'pool4':
                this.setState({
                    pool4: " Pool\n"
                })
            case 'private4':
                this.setState({
                    private4: " Private Pool\n"
                })
            case 'wifi4':
                this.setState({
                    wifi4: " WIFI\n"
                })
            case 'nonsmoking4':
                this.setState({
                    nonsmoking4: " Non-smoking room\n"
                })
            case 'smoking4':
                this.setState({
                    smoking4: " Smoking room\n"
                })
            case 'spa4':
                this.setState({
                    spa4: " Spa & Wellness Center\n"
                })
            case 'rest4':
                this.setState({
                    rest4: " Restaurant\n"
                })
            case 'otherrequest4':
                this.setState({
                    otherrequest4: e.target.value
                })
            case 'transporty4':
                this.setState({
                    transporty4: " yes, we need a transportation\n"
                })
            case 'transportn4':
                this.setState({
                    transportn4: " no, we don't need a transportation\n"
                })
            case 'dettransport4':
                this.setState({
                    dettransport4: e.target.value
                })
            case 'toursy4':
                this.setState({
                    toursy4: " yes, we need a tour\n"
                })
            case 'toursn4':
                this.setState({
                    toursn4: " no, we dont need a tour\n"
                })
            case 'dettours4':
                this.setState({
                    dettours4: e.target.value
                })
            case 'acty4':
                this.setState({
                    acty4: " yes, we need an activities\n"
                })
            case 'actn4':
                this.setState({
                    actn4: " no, we don't need an activites\n"
                })
            case 'detact4':
                this.setState({
                    detact4: e.target.value
                })
            case 'mealsy4':
                this.setState({
                    mealsy4: " yes, we need meals\n"
                })
            case 'mealsn4':
                this.setState({
                    mealsn4: " no, we don't need meals\n"
                })
            case 'breakfast4':
                this.setState({
                    breakfast4: " Breakfast included\n"
                })
            case 'half4':
                this.setState({
                    half4: " Halfboard Included\n" 
                })
            case 'full4':
                this.setState({
                    full4: " Fullboard\n"  
                })
            case 'budget4':
                this.setState({
                    budget4: e.target.value
                })
            case 'remarks4':
                this.setState({
                    remarks4: e.target.value
                })
            case 'name5':
                this.setState({
                    name5: e.target.value
                })
            case 'national5':
                this.setState({
                    national5: e.target.value
                })
            case 'telp5':
                this.setState({
                    telp5: e.target.value
                })
            case 'email5':
                this.setState({
                    email5: e.target.value
                })
            case 'message5':
                this.setState({
                    message5: e.target.value
                })
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
        let message = ""
        let subj = ""
        if(this.props.index==0) {
            subj = "Form " + this.props.index
            message = "Name: " + this.state.name1 + "\nCompany name: " + this.state.compName1 + "\nTelephone: " + this.state.telp1 + "\nE-mail: " + this.state.email1 + "\nStart date: " + this.state.startdate1 + "\nStart time: "+ this.state.starttime1 + "\nEnd date: " + this.state.enddate1 + "\nEnd time: " + this.state.endtime1 + "\nEvent type: " + this.state.type1 + "\nGuest gender of attendees: " + this.state.gender1 + "\nAge profile of attendees: " + this.state.age1 + "\nSpecial characteristics of attendees: " + this.state.character1 + "\nNumber of attendees: " + this.state.num1 + "\nManagerial level of attendees: " + this.state.level1 + "\nTheme: " + this.state.theme1 + "\nVenue/hotel: " + this.state.venue + "\nNumber of adults: " + this.state.numad1 + "\nNumber of kids: " + this.state.numkid1 + "\nEstimation accommodation budget (per-night, per-room: Rp." + this.state.esti1 + "\nBedding type: " + this.state.bed1 + "\nHotel area: " + this.state.area1 + "\nHotel Facility: " + this.state.fac1 + "\nOther request: " + this.state.otherrequest1 + "\n" + this.state.meetingy1 + this.state.meetingn1 + "\nDetails for meeting: " + this.state.detmeeting1 + "\n" + this.state.outingy1 + this.state.outingn1 + "\nDetails for outing: " + this.state.detouting1 + "\n" + this.state.toursy1 + this.state.toursn1 + "\nDetails for tours: " + this.state.dettours1 + "\n" +this.state.transporty1 + this.state.transportn1 + "\nDetails for transport: " + this.state.dettransport1 + "\n" + this.state.eventy1 + this.state.eventn1 + "\nDetails for event: " + this.state.detevent1 + "\nTalent or entertainment need: " + this.state.homeband1 + this.state.keyboardist1 + this.state.popband1 + this.state.openingdance1 + this.state.traddance1 + this.state.moddance1 + this.state.dj1 + this.state.mc1 + this.state.ushers1 + "\nOther talent need: " + this.state.othertalent1 + "\nTechnical support need: " + this.state.sound1 + this.state.lighting1 + this.state.led1 + this.state.backdrop1 + this.state.projector1 + this.state.lcd1 + this.state.photo1 + this.state.video1 + this.state.digital1 + "\nOther technical support need: " + this.state.otherTech1 + "\nIndicative budget: " + this.state.budget1 + "\nSpecial remarks: " + this.state.remarks1
        }
        else if(this.props.index==1) {
            subj = "Form " + this.props.index
            message = "Name: " + this.state.name2 + "\nNationality: " + this.state.national2 + "\nTelephone: " + this.state.telp2 + "\nE-mail: " + this.state.email2 + "\nStart date: " + this.state.startdate2 + "\nStart time: " + this.state.starttime2 + "\nEnd date: " + this.state.enddate2 + "\nEnd time: " + this.state.endtime2 + "\n" + this.state.tentative2 + "\nEvent type: " + this.state.type2 + "\nVenue/hotel: " + this.state.venue2 + "\nNumber of adults: " + this.state.numad2 + "\nNumber of kids: " + this.state.numkid2 + "\nEstimation accommodation budget (per-night,per-room): Rp." + this.state.esti2 + "\nBedding type: " + this.state.single2 + this.state.twinking2 + this.state.twinbed2 + this.state.triple2 + "\nHotel area: " + this.state.area2 + "\nHotel Preference: " + this.state.beachfront2 + this.state.business2 + this.state.golfcourse2 + this.state.kids2 + this.state.nearbeach2 + this.state.nearmountain2 + this.state.nearrestaurant2 + this.state.heart2 + this.state.tranquil2 + this.state.nearnight2 + "\nHotel facility: " + this.state.family2 + this.state.fitness2 + this.state.pool2 + this.state.private2 + this.state.wifi2 + this.state.nonsmoking2 + this.state.smoking2 + this.state.spa2 + this.state.rest2 + "\nOther request: " + this.state.otherrequest2 + this.state.transporty2 + this.state.transportn2 + "\nTransportation details: " + this.state.dettransport2 + this.state.toursy2 + this.state.toursy2 + "\nTours details: " + this.state.dettours2 + this.state.acty2 + this.state.acty2 + this.state.mealsy2 + this.state.mealsn2 + this.state.breakfast2 + this.state.half2 + this.state.full2 + "\nIndicative budget: " + this.state.budget2 + "\nSpecial remarks: " + this.state.remarks2
        }
        else if(this.props.index==2) {
            subj = "Form " + this.props.index
            message = "Name: " + this.state.name3 + "\nNationality: " + this.state.national3 + "\nTelephone: " + this.state.telp3 + "\nE-mail: " + this.state.email3 + "\nStart date: " + this.state.startdate3 + "\nStart time: " + this.state.starttime3 + "\nEnd date: " + this.state.enddate3 + "\nEnd time: " + this.state.endtime3 + this.state.tentative3 + "\nNumber of rooms: " + this.state.numroom3 + "\nVenue/Hotel: " + this.state.venue3 + "\nNumber of adult: " + this.state.numad3 + "\nNumber of kids: " + this.state.numkid3 + "\nEstimation accommodation budget (per-night,per-room): Rp." + this.state.esti3 + "\nHotel area: " + this.state.amed3 + this.state.candi3 + this.state.cangguarea3 + this.state.canggubeach3 + this.state.jimbaran3 + this.state.karang3 + this.state.kerobokan3 + this.state.kids3 + this.state.kutaarea3 + this.state.kutabeach3 + this.state.legianarea3 + this.state.legianbeach3 + this.state.lembongan3 + this.state.lovinabeach3 + this.state.lovina3 + this.state.menjangan3 + this.state.nearbeach3 + this.state.nusadua3 + this.state.petit3 + this.state.seminyakbeach3 + this.state.seminyak3 + this.state.tabanan3 + this.state.tanjung3 + this.state.sanurbeach3 + this.state.sanurarea3 + this.state.sinaraja3 + this.state.tuban3 + this.state.tulamben3 + this.state.ubud3 + this.state.uluwatu3 + this.state.ungasan3 + "\nHotel preference: " + this.state.beachfront3 + this.state.business3 + this.state.golfcourse3 + this.state.kidsfam3 + this.state.nearthebeach3 + this.state.nearmountain3 + this.state.nearrestaurant3 + this.state.heart3 + this.state.tranquil3 + this.state.nearnight3 + "\nHotel facility: " + this.state.family3 + this.state.fitness3 + this.state.pool3 + this.state.private3 + this.state.wifi3 + this.state.nonsmoking3 + this.state.smoking3 + this.state.spa3 + this.state.rest3 + "\nOther request: " + this.state.otherrequest3 + this.state.transporty3 + this.state.transportn3 + "\nDetails for transport: " + this.state.dettransport3 + "\nSpecial remarks: " + this.state.remarks3
        }
        else if(this.props.index==3) {
            subj = "Form " + this.props.index
            message = "Name: " + this.state.name4 + "\nNationality: " + this.state.national4 + "\nTelephone: " + this.state.telp4 + "\E-mail: " + this.state.email4 + "\nStart date: " + this.state.startdate4 + "\nStart time: " + this.state.starttime4 + "\nEnd date: " + this.state.enddate4 + "\nEnd time: " + this.state.endtime4 + this.state.tentative4 + "\nNumber of rooms: " + this.state.numroom4 + "\nEstimation accommodation budget (per-night,per-room): Rp." + this.state.esti4 + "\nHotel area: " + this.state.area4 + "\Hotel Preference: " + this.state.beachfront4 + this.state.business4 + this.state.golfcourse4 + this.state.kidsfam4 + this.state.nearthebeach4 + this.state.nearmountain4 + this.state.nearrestaurant4 + this.state.heart4 + this.state.tranquil4 + this.state.nearnight4 + "\nHotel Facility: " + this.state.family4 + this.state.fitness4 + this.state.pool4 + this.state.private4 + this.state.wifi4 + this.state.nonsmoking4 + this.state.smoking4 + this.state.spa4 + this.state.rest4 + "\nOther Request: " + this.state.otherrequest4 + this.state.transporty4 + this.state.transportn4 + "\nDetails for transportation: " + this.state.dettransport4 + this.state.toursy4 + this.state.toursn4 + "\nDetail for tours: " + this.state.dettours4 + this.state.acty4 + this.state.actn4 + "\nDetails for activities: " + this.state.detact4 + this.state.mealsy4 + this.state.mealsy2 + this.state.breakfast4 + this.state.half4 + this.state.full4 + "\nIndicative budget: " + this.state.budget4 + "\nSpecial remarks: " + this.state.remarks4
        }
        else if(this.props.index==4) {
            subj = "Form " + this.props.index
            message = "Name: " + this.state.name5 + "\nNationality: " + this.state.national5 + "\nTelephone: " + this.state.telp5 + "\nE-mail: " + this.state.email5 + "\nMessage: " + this.state.message5
        }

        this.props.receiveForm(subj,message)
        .then(() => {
            console.log('berhasil nih kak')
        })
        .catch(() => {
            console.log('yah gagal kak')
        })
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
                            <label htmlFor="name">Name :</label>
                            <input type="text" className="form-control" value={this.state.name1} onChange={(e) => this.handleChange(e,'name1')} id="name" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="comp-name">Company Name :</label>
                            <input type="text" className="form-control" value={this.state.compName1} onChange={(e) => this.handleChange(e,'compName1')} id="comp-name" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Telephone :</label>
                            <input type="number" className="form-control" value={this.state.telp1} onChange={(e) => this.handleChange(e,'telp1')} id="phone" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail :</label>{(e) => this.handleChange = e}
                            <input type="email" className="form-control" value={this.state.email1} onChange={(e) => this.handleChange(e,'email1')} id="email" required/>
                        </div>
                    </div>
                    <br/>
                    <h5>EVENT DETAILS</h5>
                    <div className="form-section">
                        <div className="form-group">
                            <label htmlFor="event-start">Starts from (Date) :</label>
                            <Datepicker value={this.state.startdate1} onChange={(e) => this.handleChange(e,'startdate1')} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="event-start">Starts from (Time) :</label>
                            <input type="text" className="form-control short-input" value={this.state.starttime1} onChange={(e) => this.handleChange(e,'starttime1')} id="type" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="event-end">Ends (Date) :</label>
                            <Datepicker value={this.state.enddate1} onChange={(e) => this.handleChange(e,'enddate1')} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="event-start">Ends (Time) :</label>
                            <input type="text" className="form-control short-input" value={this.state.endtime1} onChange={(e) => this.handleChange(e,'endtime1')} id="type" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="type">Event Type :</label>
                            <input type="text" className="form-control" value={this.state.type1} onChange={(e) => this.handleChange(e,'type1')} id="type" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Guest Gender of Attendees :</label>
                            <input type="text" className="form-control" value={this.state.gender1} onChange={(e) => this.handleChange(e,'gender1')} id="gender" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Age Profile of Attendees :</label>
                            <input type="number" className="form-control" value={this.state.age1} onChange={(e) => this.handleChange(e,'age1')} id="age" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="character">Special characteristics of Attendees :</label>
                            <input type="text" className="form-control" value={this.state.character1} onChange={(e) => this.handleChange(e,'character1')} id="character" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="num">Number of Attendees :</label>
                            <input type="number" className="form-control" value={this.state.num1} onChange={(e) => this.handleChange(e,'num1')} id="num" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="level">Managerial Level of Attendees :</label>
                            <input type="text" className="form-control" value={this.state.level1} onChange={(e) => this.handleChange(e,'level1')} id="level" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="theme">Theme :</label>
                            <input type="text" className="form-control" value={this.state.theme1} onChange={(e) => this.handleChange(e,'theme1')} id="theme" />
                        </div>
                    </div>
                    <br/>
                    <h5>ACCOMMODATION</h5>
                    <div className="form-section">
                        <div className="form-group">
                            <label htmlFor="name">Venue/Hotel :</label>
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
                            <label htmlFor="numad">Number of Adult :</label>
                            <input type="number" className="form-control" value={this.state.numad1} onChange={(e) => this.handleChange(e,'numad1')} id="numad" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="numkid">Number of Kids (if there are any) : </label>
                            <input type="number" className="form-control" value={this.state.numkid1} onChange={(e) => this.handleChange(e,'numkid1')} id="numkid" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="esti">Estimation accommodation budget (per-night, per-room) in IDR :</label>
                            <input type="number" className="form-control" value={this.state.esti1} onChange={(e) => this.handleChange(e,'esti1')} id="esti" />
                        </div>
                        <h5>REQUEST :</h5>
                        <div className="form-section">
                            <div className="form-group">
                                <label htmlFor="bed">Bedding type :</label>
                                <input type="text" className="form-control" value={this.state.bed1} onChange={(e) => this.handleChange(e,'bed1')} id="bed" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="area">Hotel Area or Desirable Atmosphere :</label>
                                <input type="text" className="form-control" value={this.state.area1} onChange={(e) => this.handleChange(e,'area1')} id="area" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fac">Hotel Facility :</label>
                                <input type="text" className="form-control" value={this.state.fac1} onChange={(e) => this.handleChange(e,'fac1')} id="fac" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="other">Others :</label>
                                <input type="text" className="form-control" value={this.state.otherrequest1} onChange={(e) => this.handleChange(e,'otherrequest1')} id="other" />
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="name">MEETING/SEMINAR :</label>
                        <div className="radio-inline">
                            <label><input name="meeting1" type="radio" value={this.state.meetingy1} onChange={(e) => this.handleChange(e,'meetingy1')}/>Yes</label>
                        </div>
                        <div className="radio-inline">
                            <label><input name="meeting1" type="radio" value={this.state.meetingn1} onChange={(e) => this.handleChange(e,'meetingn1')}/>No</label>
                        </div>
                    </div>
                    <div className="form-group">
                            <p htmlFor="comp-name">Details :</p>
                            <input type="text" className="form-control" value={this.state.detmeeting1} onChange={(e) => this.handleChange(e,'detmeeting1')} id="details" />
                        </div>
                    <div className="form-group">
                        <label htmlFor="comp-name">OUTING :</label>
                        <div className="radio-inline">
                            <label><input name="outing1" type="radio" value={this.state.outingy1} onChange={(e) => this.handleChange(e,'outingy1')}/>Yes</label>
                        </div>
                        <div className="radio-inline">
                            <label><input name="outing1" type="radio" value={this.state.outingn1} onChange={(e) => this.handleChange(e,'outingn1')}/>No</label>
                        </div>
                    </div>
                    <div className="form-group">
                            <p htmlFor="comp-name">Details :</p>
                            <input type="text" className="form-control" value={this.state.detouting1} onChange={(e) => this.handleChange(e,'detouting1')} id="comp-name" />
                        </div>
                    <div className="form-group">
                        <label htmlFor="phone">TOURS :</label>
                        <div className="radio-inline">
                            <label><input name="tours1" type="radio" value={this.state.toursy1} onChange={(e) => this.handleChange(e,'toursy1')}/>Yes</label>
                        </div>
                        <div className="radio-inline">
                            <label><input name="tours1" type="radio" value={this.state.toursn1} onChange={(e) => this.handleChange(e,'toursn1')}/>No</label>
                        </div>
                    </div>
                    <div className="form-group">
                            <p htmlFor="comp-name">Details :</p>
                            <input type="text" className="form-control" value={this.state.dettours1} onChange={(e) => this.handleChange(e,'dettours1')} id="comp-name" />
                        </div>
                    <div className="form-group">
                        <label htmlFor="email">TRANSPORTATION :</label>
                        <div className="radio-inline">
                            <label><input name="transporty1" type="radio" value={this.state.transporty1} onChange={(e) => this.handleChange(e,'transporty1')}/>Yes</label>
                        </div>
                        <div className="radio-inline">
                            <label><input name="transportn1" type="radio" value={this.state.transportn1} onChange={(e) => this.handleChange(e,'transportn1')}/>No</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <p htmlFor="comp-name">Details :</p>
                        <input type="text" className="form-control" value={this.state.dettransport1} onChange={(e) => this.handleChange(e,'dettransport1')} id="comp-name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">EVENT :</label>
                        <div className="radio-inline">
                            <label><input name="event1" type="radio" value={this.state.eventy1} onChange={(e) => this.handleChange(e,'eventy1')}/>Yes</label>
                        </div>
                        <div className="radio-inline">
                            <label><input name="event1" type="radio" value={this.state.eventn1} onChange={(e) => this.handleChange(e,'eventn1')}/>No</label>
                        </div>
                    </div>
                    <div className="form-group">
                            <p htmlFor="comp-name">Details :</p>
                            <input type="text" className="form-control" type="input" value={this.state.detevent1} onChange={(e) => this.handleChange(e,'detevent1')} id="comp-name" />
                        </div>
                    <div className="form-group">
                        <label htmlFor="email">Talent or Entertainment Need :</label>
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
                        <p htmlFor="comp-name">Others :</p>
                        <input type="text" className="form-control" value={this.state.othertalent1} onChange={(e) => this.handleChange(e,'othertalent1')} id="comp-name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Technical Support Need :</label>
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
                            <p htmlFor="comp-name">Others :</p>
                            <input type="text" className="form-control" value={this.state.otherTech1} onChange={(e) => this.handleChange(e,'otherTech1')} id="comp-name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="budget">Indicative Budget :</label>
                        <input type="number" className="form-control" value={this.state.budget1} onChange={(e) => this.handleChange(e,'budget1')} id="budget" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="remarks">Special Remarks :</label>
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
                            <label htmlFor="name">Name :</label>
                            <input type="text" className="form-control" value={this.state.name2} onChange={(e) => this.handleChange(e,'name2')} id="name" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Nationality :</label>
                            <input type="text" className="form-control" value={this.state.national2} onChange={(e) => this.handleChange(e,'national2')} id="name" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Telephone :</label>
                            <input type="number" className="form-control" value={this.state.telp2} onChange={(e) => this.handleChange(e,'telp2')} id="phone" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail :</label>
                            <input type="email" className="form-control" value={this.state.email2} onChange={(e) => this.handleChange(e,'email2')} id="email" required/>
                        </div>
                    </div>
                    <br/>
                    <h5>TRIP DETAILS</h5>
                    <div className="form-section">
                        <div className="form-group">
                            <label htmlFor="event-start">Starts from (Date) :</label>
                            <Datepicker value={this.state.startdate2} onChange={(e) => this.handleChange(e,'startdate2')} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="event-start">Starts from (Time) :</label>
                            <input type="text" className="form-control short-input" value={this.state.starttime2} onChange={(e) => this.handleChange(e,'starttime2')} id="type" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="event-end">Ends (Date) :</label>
                            <Datepicker value={this.state.enddate2} onChange={(e) => this.handleChange(e,'enddate2')} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="event-start">Ends (Time) :</label>
                            <input type="text" className="form-control short-input" value={this.state.endtime2} onChange={(e) => this.handleChange(e,'endtime2')} id="type" />
                        </div>
                        <div className="checkbox-inline">
                            <label><input type="checkbox" value={this.state.tentative2} onChange={(e) => this.handleChange(e,'tentative2')}/>Still Tentative</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Event Type :</label>
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
                            <label htmlFor="name">Venue/Hotel :</label>
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
                            <label htmlFor="comp-name">Number of Adult :</label>
                            <input type="number" className="form-control" value={this.state.numad2} onChange={(e) => this.handleChange(e,'numad2')} id="comp-name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Number of Kids (if there are any) : </label>
                            <input type="number" className="form-control" value={this.state.numkid2} onChange={(e) => this.handleChange(e,'numkid2')} id="phone" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Estimation accommodation budget (per-night, per-room) in IDR :</label>
                            <input type="number" className="form-control" value={this.state.esti2} onChange={(e) => this.handleChange(e,'esti2')} id="email" />
                        </div>
                        <h5>REQUEST :</h5>
                        <div className="form-section">
                            <div className="form-group">
                                <label htmlFor="name">Bedding type :</label>
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
                                <label htmlFor="comp-name">Hotel Area :</label>
                                <input type="text" className="form-control" value={this.state.area2} onChange={(e) => this.handleChange(e,'area2')} id="comp-name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Hotel Preference :</label>
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
                                <label htmlFor="comp-name">Hotel Facility :</label>
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
                                <label htmlFor="email">Others :</label>
                                <input type="text" className="form-control" value={this.state.otherrequest2} onChange={(e) => this.handleChange(e,'otherrequest2')} id="email" />
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="name">TRANPORTATION :</label>
                        <div className="radio-inline">
                            <label><input type="radio" name="trans" value={this.state.transporty2} onChange={(e) => this.handleChange(e,'transporty2')}/>Yes</label>
                        </div>
                        <div className="radio-inline">
                            <label><input type="radio" name="trans" value={this.state.transportn2} onChange={(e) => this.handleChange(e,'transportn2')}/>No</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <p htmlFor="comp-name">Details :</p>
                        <input type="text" className="form-control" value={this.state.dettransport2} onChange={(e) => this.handleChange(e,'dettransport2')} id="comp-name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comp-name">TOURS / SIGHTSEEING :</label>
                        <div className="radio-inline">
                            <label><input name="tours" type="radio" value={this.state.toursy2} onChange={(e) => this.handleChange(e,'toursy2')}/>Yes</label>
                        </div>
                        <div className="radio-inline">
                            <label><input name="tours" type="radio" value={this.state.toursn2} onChange={(e) => this.handleChange(e,'toursn2')}/>No</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <p htmlFor="comp-name">Details :</p>
                        <input type="text" className="form-control" value={this.state.dettours2} onChange={(e) => this.handleChange(e,'dettours2')} id="comp-name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comp-name">ACTIVITIES :</label>
                        <div className="radio-inline">
                            <label><input name="act" type="radio" value={this.state.acty2} onChange={(e) => this.handleChange(e,'acty2')}/>Yes</label>
                        </div>
                        <div className="radio-inline">
                            <label><input name="act" type="radio" value={this.state.actn2} onChange={(e) => this.handleChange(e,'actn2')}/>No</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <p htmlFor="comp-name">Details :</p>
                        <input type="text" className="form-control" value={this.state.detact2} onChange={(e) => this.handleChange(e,'detact2')} id="comp-name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comp-name">MEALS :</label>
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
                        <label htmlFor="email">Indicative Budget :</label>
                        <input type="number" className="form-control" value={this.state.budget2} onChange={(e) => this.handleChange(e,'budget2')}id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Special Remarks :</label>
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
                            <label htmlFor="name">Name :</label>
                            <input type="text" className="form-control" value={this.state.name3} onChange={(e) => this.handleChange(e,'name3')} id="name" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Nationality :</label>
                            <input type="text" className="form-control" value={this.state.national3} onChange={(e) => this.handleChange(e,'national3')} id="name" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Telephone :</label>
                            <input type="number" className="form-control" value={this.state.telp3} onChange={(e) => this.handleChange(e,'telp3')} id="phone" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail :</label>
                            <input type="email" className="form-control" value={this.state.email3} onChange={(e) => this.handleChange(e,'email3')} id="email" required/>
                        </div>
                    </div>
                    <br/>
                    <h5>TRIP DETAILS</h5>
                    <div className="form-section">
                        <div className="form-group">
                            <label htmlFor="event-start">Starts from (Date) :</label>
                            <Datepicker value={this.state.startdate3} onChange={(e) => this.handleChange(e,'startdate3')} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="event-start">Starts from (Time) :</label>
                            <input type="text" className="form-control short-input" value={this.state.starttime3} onChange={(e) => this.handleChange(e,'starttime3')} id="type" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="event-end">Ends (Date) :</label>
                            <Datepicker value={this.state.enddate3} onChange={(e) => this.handleChange(e,'enddate3')} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="event-start">Ends (Time) :</label>
                            <input type="text" className="form-control short-input" value={this.state.endtime3} onChange={(e) => this.handleChange(e,'endtime3')} id="type" />
                        </div>
                        <div className="checkbox-inline">
                            <label><input type="checkbox" value={this.state.tentative3} onChange={(e) => this.handleChange(e,'tentative3')} />Still Tentative</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Number of Rooms :</label>
                            <input type="number" className="form-control" value={this.state.numroom3} onChange={(e) => this.handleChange(e,'numroom3')}  id="phone" />
                        </div>
                    </div>
                    <br/>
                    <h5>ACCOMMODATION</h5>
                    <div className="form-section">
                        <div className="form-group">
                            <label htmlFor="name">Venue/Hotel :</label>
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
                            <label htmlFor="comp-name">Number of Adult :</label>
                            <input type="number" className="form-control" value={this.state.numad3} onChange={(e) => this.handleChange(e,'numad3')} id="comp-name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Number of Kids (if there are any) : </label>
                            <input type="number" className="form-control" value={this.state.numkid3} onChange={(e) => this.handleChange(e,'numkid3')} id="phone" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Estimation accommodation budget (per-night, per-room) in IDR :</label>
                            <input type="number" className="form-control" value={this.state.esti3} onChange={(e) => this.handleChange(e,'esti3')} id="email" />
                        </div>
                        <h5>REQUEST :</h5>
                        <div className="form-section">
                            <div className="form-group">
                                <label htmlFor="comp-name">Hotel Area :</label>
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
                                    <label><input type="checkbox" value={this.state.tulamben3} onChange={(e) => this.handleChange(e,'tulamben3')}/>Tulamben</label>
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
                                <label htmlFor="phone">Hotel Preference :</label>
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
                                <label htmlFor="comp-name">Hotel Facility :</label>
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
                                <label htmlFor="email">Others :</label>
                                <input type="text" className="form-control" value={this.state.otherrequest3} onChange={(e) => this.handleChange(e,'otherrequest3')} id="email" />
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="name">TRANPORTATION :</label>
                        <div className="radio-inline">
                            <label><input name="transport3" type="radio" value={this.state.transporty3} onChange={(e) => this.handleChange(e,'transporty3')}/>Yes</label>
                        </div>
                        <div className="radio-inline">
                            <label><input name="transport3" type="radio" value={this.state.transportn3} onChange={(e) => this.handleChange(e,'transportn3')}/>No</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <p htmlFor="comp-name">Details :</p>
                        <input type="text" className="form-control" value={this.state.dettransport3} onChange={(e) => this.handleChange(e,'dettransport3')} id="comp-name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Special Remarks :</label>
                        <input type="text" className="form-control" value={this.state.remarks3} onChange={(e) => this.handleChange(e,'remarks3')} id="email" />
                    </div>
                    <br/>
                    <button type="submit" onClick={(e) => this.handleSubmit(e)} className="btn btn-default">Submit</button>
                </form>
            </div>
        )
    }

    form3() {
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
                            <input type="text" className="form-control" value={this.state.name4} onChange={(e) => this.handleChange(e,'name4')} id="name" required/>
                        </div>
                        <div className="form-group">
                            <label for="name">Nationality :</label>
                            <input type="text" className="form-control" value={this.state.national4} onChange={(e) => this.handleChange(e,'national4')} id="name" required/>
                        </div>
                        <div className="form-group">
                            <label for="phone">Telephone :</label>
                            <input type="number" className="form-control" value={this.state.telp4} onChange={(e) => this.handleChange(e,'telp4')} id="phone" required/>
                        </div>
                        <div className="form-group">
                            <label for="email">E-mail :</label>
                            <input type="email" className="form-control" value={this.state.email4} onChange={(e) => this.handleChange(e,'email4')} id="email" required/>
                        </div>
                    </div>
                    <br/>
                    <h5>TRIP DETAILS</h5>
                    <div className="form-section">
                        <div className="form-group">
                            <label for="event-start">Starts from (Date) :</label>
                            <Datepicker value={this.state.startdate4} onChange={(e) => this.handleChange(e,'startdate4')} />
                        </div>
                        <div className="form-group">
                            <label for="event-start">Starts from (Time) :</label>
                            <input type="text" className="form-control short-input" value={this.state.starttime4} onChange={(e) => this.handleChange(e,'starttime4')} id="type" />
                        </div>
                        <div className="form-group">
                            <label for="event-end">Ends (Date) :</label>
                            <Datepicker value={this.state.enddate4} onChange={(e) => this.handleChange(e,'enddate4')} />    
                        </div>
                        <div className="form-group">
                            <label for="event-start">Ends (Time) :</label>
                            <input type="text" className="form-control short-input" value={this.state.endtime4} onChange={(e) => this.handleChange(e,'endtime4')} id="type" />
                        </div>
                        <div className="checkbox-inline">
                            <label><input type="checkbox" value={this.state.tentative4} onChange={(e) => this.handleChange(e,'tentative4')} />Still Tentative</label>
                        </div>
                        <div className="form-group">
                            <label for="phone">Number of Rooms :</label>
                            <input type="number" className="form-control" value={this.state.numroom4} onChange={(e) => this.handleChange(e,'numroom4')}  id="phone" />
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label for="email">Estimation accommodation budget (per-night, per-room) in IDR :</label>
                        <input type="number" className="form-control" value={this.state.esti4} onChange={(e) => this.handleChange(e,'esti4')} id="email" />
                    </div>
                    <br/>
                    <h5>REQUEST :</h5>
                    <div className="form-section">
                        <div className="form-group">
                            <div className="form-group">
                                <label for="phone">Hotel area :</label>
                                <input type="text" className="form-control" value={this.state.area4} onChange={(e) => this.handleChange(e,'area4')}  id="phone" />
                            </div>
                            <label for="phone">Hotel Preference :</label>
                            <div className="checkbox">
                                <label><input type="checkbox" value={this.state.beachfront4} onChange={(e) => this.handleChange(e,'beachfront4')}/>Beachfront</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value={this.state.business4} onChange={(e) => this.handleChange(e,'business4')}/>Business facilities</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value={this.state.golfcourse4} onChange={(e) => this.handleChange(e,'golfcourse4')}/>Golf Course</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value={this.state.kidsfam4} onChange={(e) => this.handleChange(e,'kidsfam4')}/>Kids/Family Friendly</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value={this.state.nearthebeach4} onChange={(e) => this.handleChange(e,'nearthebeach4')}/>Near The Beach</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value={this.state.nearmountain4} onChange={(e) => this.handleChange(e,'nearmountain4')}/>Near Mountain</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value={this.state.nearrestaurant4} onChange={(e) => this.handleChange(e,'nearrestaurant4')}/>Near Restaurant</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value={this.state.heart4} onChange={(e) => this.handleChange(e,'heart4')}/>Heart of the City</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value={this.state.tranquil4} onChange={(e) => this.handleChange(e,'tranquil4')}/>Tranquil Area</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value={this.state.nearnight4} onChange={(e) => this.handleChange(e,'nearnight4')}/>Near Nightclub</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="comp-name">Hotel Facility :</label>
                            <div className="checkbox">
                                <label><input type="checkbox" value={this.state.family4} onChange={(e) => this.handleChange(e,'family4')}/>Family Room</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value={this.state.fitness4} onChange={(e) => this.handleChange(e,'fitness4')}/>Fitness Centre</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value={this.state.pool4} onChange={(e) => this.handleChange(e,'pool4')}/>Pool</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value={this.state.private4} onChange={(e) => this.handleChange(e,'private4')}/>Private Pool</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value={this.state.wifi4} onChange={(e) => this.handleChange(e,'wifi4')}/>WIFI</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value={this.state.nonsmoking4} onChange={(e) => this.handleChange(e,'nonsmoking4')}/>Non-smoking room</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value={this.state.smoking4} onChange={(e) => this.handleChange(e,'smoking4')}/>Smoking room</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value={this.state.spa4} onChange={(e) => this.handleChange(e,'spa4')}/>Spa & Wellness Center</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value={this.state.rest4} onChange={(e) => this.handleChange(e,'rest4')}/>Restaurant</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="email">Others :</label>
                            <input type="text" className="form-control" value={this.state.otherrequest4} onChange={(e) => this.handleChange(e,'otherrequest4')} id="email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="name">TRANPORTATION :</label>
                        <div className="radio-inline">
                            <label><input type="radio" name="trans" value={this.state.transporty4} onChange={(e) => this.handleChange(e,'transporty4')}/>Yes</label>
                        </div>
                        <div className="radio-inline">
                            <label><input type="radio" name="trans" value={this.state.transportn4} onChange={(e) => this.handleChange(e,'transportn4')}/>No</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <p for="comp-name">Details :</p>
                        <input type="text" className="form-control" value={this.state.dettransport4} onChange={(e) => this.handleChange(e,'dettransport4')} id="comp-name" />
                    </div>
                    <div className="form-group">
                        <label for="comp-name">TOURS / SIGHTSEEING :</label>
                        <div className="radio-inline">
                            <label><input name="tours" type="radio" value={this.state.toursy4} onChange={(e) => this.handleChange(e,'toursy4')}/>Yes</label>
                        </div>
                        <div className="radio-inline">
                            <label><input name="tours" type="radio" value={this.state.toursn4} onChange={(e) => this.handleChange(e,'toursn4')}/>No</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <p for="comp-name">Details :</p>
                        <input type="text" className="form-control" value={this.state.dettours4} onChange={(e) => this.handleChange(e,'dettours4')} id="comp-name" />
                    </div>
                    <div className="form-group">
                        <label for="comp-name">ACTIVITIES :</label>
                        <div className="radio-inline">
                            <label><input name="act" type="radio" value={this.state.acty4} onChange={(e) => this.handleChange(e,'acty4')}/>Yes</label>
                        </div>
                        <div className="radio-inline">
                            <label><input name="act" type="radio" value={this.state.actn4} onChange={(e) => this.handleChange(e,'actn4')}/>No</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <p for="comp-name">Details :</p>
                        <input type="text" className="form-control" value={this.state.detact4} onChange={(e) => this.handleChange(e,'detact4')} id="comp-name" />
                    </div>
                    <div className="form-group">
                        <label for="comp-name">MEALS :</label>
                        <div className="radio-inline">
                            <label><input name="meals" type="radio" value={this.state.mealsy4} onChange={(e) => this.handleChange(e,'mealsy4')}/>Yes</label>
                        </div>
                        <div className="radio-inline">
                            <label><input name="meals" type="radio" value={this.state.mealsn4} onChange={(e) => this.handleChange(e,'mealsn4')}/>No</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value={this.state.breakfast4} onChange={(e) => this.handleChange(e,'breakfast4')}/>Breakfast Included</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value={this.state.half4} onChange={(e) => this.handleChange(e,'half4')}/>Halfboard (B&L)</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value={this.state.full4} onChange={(e) => this.handleChange(e,'full4')}/>Fullboard (B,L&D)</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="email">Indicative Budget :</label>
                        <input type="number" className="form-control" value={this.state.budget4} onChange={(e) => this.handleChange(e,'budget4')}id="email" />
                    </div>
                    <div className="form-group">
                        <label for="email">Special Remarks :</label>
                        <input type="text" className="form-control" value={this.state.remarks4} onChange={(e) => this.handleChange(e,'remarks4')} id="email" />
                    </div>
                    <br/>
                    <button type="submit" onClick={(e) => this.handleSubmit(e)} className="btn btn-default">Submit</button>
                </form>
            </div>
        )
    }

    form4() {
        return(
            <div className="col-md-offset-1 col-md-10 form">
                <div className="form-group">
                    <h5>We will assist you in designing your vacation Bali. Please fill in this event brief form.</h5>
                </div>
                <br/>
                <form className="form-div">
                    <div className="form-section">
                        <div className="form-group">
                            <label for="name">Name :</label>
                            <input type="text" className="form-control" value={this.state.name5} onChange={(e) => this.handleChange(e,'name5')} id="name" required/>
                        </div>
                        <div className="form-group">
                            <label for="name">Nationality :</label>
                            <input type="text" className="form-control" value={this.state.national5} onChange={(e) => this.handleChange(e,'national5')} id="name" required/>
                        </div>
                        <div className="form-group">
                            <label for="phone">Telephone :</label>
                            <input type="number" className="form-control" value={this.state.telp5} onChange={(e) => this.handleChange(e,'telp5')} id="phone" required/>
                        </div>
                        <div className="form-group">
                            <label for="email">E-mail :</label>
                            <input type="email" className="form-control" value={this.state.email5} onChange={(e) => this.handleChange(e,'email5')} id="email" required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="email">Your Message :</label>
                        <input type="text" className="form-control" value={this.state.message5} onChange={(e) => this.handleChange(e,'message5')} id="email" required/>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
  return{
    receiveForm:(data1, data2) => receiveForm(data1, data2)
  }
}

export default connect(null, mapDispatchToProps) (Form)
