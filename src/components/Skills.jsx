import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa"

function Skills(){

return(

<section className="p-5 bg-light" id="skills">

<div className="container">

<h2 className="section-title text-center mb-4">My Skills</h2>

<div className="row text-center">

<div className="col-md-3 col-6 mb-4">
<FaHtml5 size={50} color="#e34c26"/>
<h5>HTML</h5>
</div>

<div className="col-md-3 col-6 mb-4">
<FaCss3Alt size={50} color="#264de4"/>
<h5>CSS</h5>
</div>

<div className="col-md-3 col-6 mb-4">
<FaJs size={50} color="#f7df1e"/>
<h5>JavaScript</h5>
</div>

<div className="col-md-3 col-6 mb-4">
<FaReact size={50} color="#61dbfb"/>
<h5>React</h5>
</div>

</div>

</div>

</section>

)

}

export default Skills