const search = document.querySelector('.search-form');
let searchCourseName =[];
function searchByName(searchValue){
    data.forEach(data=>{
        let temp = data.name.split(" ");
        temp.forEach(text=>{
            if(searchValue.toLowerCase() == text.toLowerCase()){
              searchCourseName.push(data);  
            }
        }) 
    }); 
    show();
}
//to show the search result on the div courses__list    
function show(){
    if(searchCourseName.length>0){
    searchCourseName.forEach((course) => {
        console.log(course);
        $(".courses__list").append(`
        <div class="courses__card">
                <img
                  src="./courses/images/${course.image}"
                  alt="Course Image"
                  class="course__image"
                  onerror="this.onerror=null; this.src='./assets/images/default.png'"
                />
      
                <div class="course__info">
                  <div class="course__tags">
                  ${course.tags
                    .map((tag) => `<a href="?courseTag=${tag}"><div class="course__tag">${tag}</div></a>`)
                    .join("")}
                  </div>
                  <div class="course__name">${course.name}</div>
                  <div class="course__instructor">${course.instructor}</div>
                  <div class="course__description">
                    ${course.description.substring(0, 100)}..
                  </div>
                  <a target="_blank" class="course__call_to_action" href="${
                    course.url
                  }"> Learn More </a>
                </div>
                
              </div>
        `);
      });
    }else{
       const message =` <h3 class="no_result">No result found</h3>`;
       $(".search-courses").append(message);
    }
}
//input box for search
search.addEventListener('submit',event=>{
    event.preventDefault();
    $("h3").remove(".no_result");
    const formdata = new FormData(search);
    let searchValue = formdata.get('search-bar');
    remove();
    if(searchValue =='' || searchValue == ' '){
        searchCourseName = data;
        show();
    }else{
        while(searchCourseName.length>0){
            searchCourseName.pop();
        }
        searchByName(searchValue); 
    }
});


