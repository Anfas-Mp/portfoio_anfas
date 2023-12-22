const data = [
    {
        title: "Bachelor's degree - Bvoc software development",
        date: "Mar,01,2020 - Apr,01,2023",
        desc: "Done a 3-year bachelor's degree in bvoc software development at farook college , calicut",
    },
    {
        title: "Internship - python django at (Codeme Hub , Calicut)",
        date: "jan,01,2023 - march,28,2023",
        desc: "made an office management website using python django & got a chance to work with the group",
    },
    {
        title: "Internship - python django at (Inmakes Hub , Kochi)",
        date: "Apr,01,2023 - sep,14,2023",
        desc: "completed 4 project using python django & got an basic konwledge on Machine Learnig,flask",
    },

];

const timelinecontainer = document.getElementById("timelinecontainer");
const timelines = data.map((timeline, i) => {

    return (
        `
        <div class="row content" key='${i}'>
            <div class="col-lg-1 ">
                <div class="verticalline"></div>
                <div class="badgetle mt-2 mb-2"></div>
                <div class="verticalline"></div>
            </div>
            <div class="col-lg-11">
                <div class="card shadow">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h5>${timeline.title}</h5>
                            <h4>${timeline.date}</h4>
                        </div>
                        <p class="mt-3">${timeline.desc}</p>
                    </div>
                </div>
            </div>
        </div>
        `
    )
}).join('');


timelinecontainer.innerHTML = timelines;