import HomeLayout from "@/Layouts/HomeLayout";
import { Link, Head } from "@inertiajs/react";
import React from "react";
import Hero from "./Homepage/Hero";
import Sponsorship from "./Homepage/Sponsorship";
import About from "./Homepage/About";
import CallToAction from "./Homepage/CallToAction";
import Event from "./Homepage/Event";

export default function Homepage() {
    return (
        <HomeLayout>
            <Hero />
            <About />
            <Event />
            <Sponsorship />
            <CallToAction />
        </HomeLayout>
    );
}
