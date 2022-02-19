import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/me.jpeg" alt="An image showing Ahmet" width={300} height={300}/>
            </div>
            <h1>Hi, I am Ahmet</h1>
            <p>This is my first Blog I created with Next Js</p>
        </section>
    );
};

export default Hero;