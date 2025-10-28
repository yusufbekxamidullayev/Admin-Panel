let tbody = document.getElementById("tbody");
let formModal = document.getElementById("form");
let outerModal = document.getElementById("outer-modal");
let innerModal = document.getElementById("inner-modal")
let addStudentBtn = document.getElementById("add-student-btn")

let students = JSON.parse(localStorage.getItem("students") || "[]");

localStorage.setItem("students" , JSON.stringify(students));

function getStudents(content , data){
    content.innerHTML ="";
    data.map((el) => {
        content.innerHTML += `
           <tr
                                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    ${el.id}
                                </th>
                                <td class="px-6 py-4">
                                    ${el.firstName}
                                </td>
                                <td class="px-6 py-4">
                                    ${el.lastName}
                                </td>
                                <td class="px-6 py-4">
                                    ${el.addres}
                                </td>
                                <td class="px-6 py-4">
                                    ${el.group}
                                </td>
                                <td class="px-6 py-4">
                                    ${el.isWork ? "Ishlaydi" : "Ishlamaydi"}
                                </td>
                                <td class="px-6 py-4 flex items-center gap-[5px]">
                                    <button href="#" class="w-[50px] py-[7px] rounded-[10px] bg-[blue] font-medium text-white hover:underline">Edit</button>
                                    <button onClick="deleteStudent(${el.id})" href="#" class="w-[70px] py-[7px] rounded-[10px] bg-[red] font-medium text-white hover:underline">Delete</button>
                                </td>
                            </tr>
        `
    })
}

getStudents(tbody , students);

formModal.addEventListener("submit" , function(e){
    e.preventDefault();
    let obj = {};
    obj.id = students.length + 1;
    obj.firstName = e.target[0].value;
    obj.lastName = e.target[1].value;
    obj.addres = e.target[2].value;
    obj.group = e.target[3].value;
    obj.isWork = e.target[4].checked;
    

    students.push(obj);
    localStorage.setItem("students", JSON.stringify(students));
    getStudents(tbody, students);
    outerModal.classList.add("hidden")
})

outerModal.addEventListener("click" , function(){
    outerModal.classList.add("hidden")
})

innerModal.addEventListener("click" , function(e){
    e.stopPropagation();
})

addStudentBtn.addEventListener("click" , function(){
    outerModal.classList.remove("hidden")
})

function deleteStudent(id){
    students = students.filter((el) => el.id !== id);
    localStorage.setItem("students" , JSON.stringify(students));
    getStudents(tbody, students);
}