import React from 'react'
import { Switch, Route } from 'react-router'
import TuftsHome from '../Components/TuftsHome'
import PenroseHome from '../Components/PenroseHome'
import WinonaHome from '../Components/WinonaHome'
import AdmissionInfo from '../Components/AdmissionInfo'
import Community from '../Components/Community'

function Admissions() {
    return (
        <div className="admissions">
            <Switch>
                <Route path="/admissions/community">
                    <Community />
                </Route >
                <Route path="/admissions/tufts-home">
                    <TuftsHome />
                </Route>
                <Route path="/admissions/penrose-home">
                    <PenroseHome />
                </Route>
                <Route path="/admissions/winona-home">
                    <WinonaHome />
                </Route>
                <Route path="/admissions/admission-info">
                    <AdmissionInfo />
                </Route>
            </Switch>
        </div>
    )
}

export default Admissions
