import { motion } from "framer-motion"

function Home(){

return(

<section className="hero text-center text-white d-flex align-items-center" id="home">

<div className="container">

<motion.h1
initial={{opacity:0,y:-50}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>
Hi, I'm Vishal Jangir
</motion.h1>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.5}}
className="lead"
>
Frontend Developer | React Developer
</motion.p>

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:1}}
>

<a href="#projects" className="btn btn-light me-3">View Projects</a>
<a href="#contact" className="btn btn-outline-light">Contact</a>

</motion.div>

</div>

</section>

)

}

export default Home;