//  let courses_list = document.querySelector(".courses__list");
const allCourseTags = data
  ? [...data.reduce((acc, course) => (acc = [...acc, ...course.tags]), [])]
  : [];
const uniqueCourseTags = Array.from(new Set(allCourseTags));

// determine if we're filtering by tag
const  courseTagFilterVal = getParameterByName('courseTag');

const isValidTag = uniqueCourseTags.includes(courseTagFilterVal);
const coursesFilteredByTag = isValidTag
  ? data.filter(
      (course) => course.tags && course.tags.includes(courseTagFilterVal)
    )
  : data;

// If we have a valid tag, display a message to clear it
if (isValidTag) {
  const message = `
  <h3 class="filter__message">
  Filtering by tag <span class="filter__message--tagname">${courseTagFilterVal}</span> &mdash;
  <a class="filter__clear" href="index.html">&cross; Clear</a>
  </h3>`;
  $(".courses__list").append(message);
}

  coursesFilteredByTag.forEach((course) => {
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
 //to remove current contents on div class courses__card
function remove(){
  $("div").remove(".courses__card");
}

  

 

