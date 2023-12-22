const data = [
    {
        title: "blood bank management system",
        sorce: "https://github.com/Anfas-Mp/Fcbloodbank",
        desc: "a blood bank management website using Python django its a web-based system that allows blood banks to manage their inventory,donors,and recipients efficiently",
        tech:[{stack:"python"},  {stack:"django"},  {stack:"B ootstrap"},  {stack:"Html,Css,Jquery"}],
    },
    {
        title: "library management system",
        sorce: "https://github.com/Anfas-Mp",
        desc: "A library management website using Php is a web-based system that automates the library's daily operations, such as book cataloging, lending, fine calculation it is an admin based website.",
        tech:[{stack:"php"}, {stack:"mysql"},  {stack:"bootstrap"},  {stack:"html,css"}],
    },
    {
        title: "office management system",
        sorce: "https://github.com/Anfas-Mp/officeproject",
        desc: "office management website using Python django is a web-based system that streamlines employee and project management, task allocation, file sharing, communication tools.",
        tech:[{stack:"python"}, {stack:"django"},  {stack:"bootstrap"},  {stack:"html,css"}],
    },
    {
        title: "ecommerce website",
        sorce: "https://github.com/Anfas-Mp/ecommerceproject",
        desc: "ecommerce website is an online platform that enables businesses to sell products or services directly to customers over the internet . it offers an exceptional online shopping experience to the customers",
        tech:[{stack:"html,css"},  {stack:"javascript"},  {stack:"bootstrap"},  {stack:"jquery"}],
    },
   
];

const projectContainer = document.getElementById("projectContents");
const projects = data.map((project, i) => {

    return (
        `
        <div class="col-lg-6 mt-5" key=${i}>
                <div class="card shadow">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h5>Featured project</h5>
                            <div class="links">
                                <a href="${project.sorce}"><i class="fa fa-github" aria-hidden="true"></i></a>
                                <a href="${project.external}"><i class="fa fa-external-link" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <h3>${project.title}</h3>
                        <p class="mt-3">${project.desc}</p>
                        ${project.tech.map((stack, i) =>{
                            return`
                            <span class="badge rounded pill">${stack.stack}</span>
                            `
                        })}
                    </div>
                </div>
            </div>
        `
    )
}).join('');


projectContainer.innerHTML = projects;