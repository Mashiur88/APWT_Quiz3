import React from "react";
import Home from './Home/home';
import Clients from "./Clients/clients";
import About from "./About/about";
import Count from "./Count/count";
import Services from './Services/services';
import CallAction from "./CallAction/callaction";
import Testtimonial from  './Testimonial/testimonial';
import Portfolio from './Portfolio/portfolio';
import Team from './Team/team';
import Pricing from './Pricing/pricing';
import FAQ from './FAQ/faq';
import Contact from './Contact/contact';
const Content = () =>{
    return(
        <div>
            <Home/>
            <Clients/>
            <About/>
            <Count/>
            <Services/>
            <CallAction/>
            <Testtimonial/>
            <Portfolio/>
            <Team/>
            <Pricing/>
            <FAQ/>
            <Contact/>
        </div>
    );
}
export default Content;