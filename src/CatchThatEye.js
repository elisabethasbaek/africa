import React from "react";
import "./CatchThatEye.scss";
import Background from "./components/Background";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Text from "./components/Text";

export default function CatchThatEye(){
    return(
        <section className="catchThatEye">
            <Background />
            <Button text="Register Now" />

            <section className="catchThatEye__left">
                <img src="./logo.png" alt="Logo"/>

                <div>
                    <Heading highlight="Figma Africa " text="International Conference"/>
                    <Text text="December 6 - 8, 2018" />
                    <Text text="Kigali Conference Centre Kimihurura Roundabout" />
                    <div>
                        <Button text="Register Now"/>
                        <Text text="*Limited seats available" />
                    </div>
                </div>
            </section>
        </section>
    )
}