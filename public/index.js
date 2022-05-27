function createLecture() {
        console.log(localStorage)
        const courseTitle = document.getElementById('courseTitle').value;
        const department = document.getElementById('department').value;
        const lectureTim = document.getElementById('lectureTime').value;
        console.log(courseTitle);
            localStorage.setItem("Cousertitle", courseTitle);
            localStorage.setItem("department", department);
            localStorage.setItem("lectureTim", lectureTim);
    return;
}
function joinLecture() {
    console.log(localStorage)
    const REG = document.getElementById('reg').value;
    const joinID = document.getElementById('joinID').value;
        localStorage.setItem("number", REG);
        localStorage.setItem("meeting", joinID);
        
return;
}
window.addEventListener("load", () => {
    const cNAME = localStorage.getItem("Cousertitle");
    const cdep = localStorage.getItem("department");
    const ctime = localStorage.getItem("lectureTim");
           

        document.getElementById('couresname').innerHTML=  cNAME
        document.getElementById('dep').innerHTML= " | " + cdep
        document.getElementById('time').innerHTML= " | " + ctime
           
})
