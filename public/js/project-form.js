const data={};
let form = null;
const init = () =>{
    console.log('init form');
    form = document.getElementById('project-id');
    document.getElementById('tag_add').addEventListener('click', addValuesToData);
    document.getElementById('technology_add').addEventListener('click', addValuesToData);
    form.addEventListener('submit', createProject);
    data.tags=[];
    data.technologys=[];
};

const createProject = async (event)=>{
    event.preventDefault();
    const form_data = new FormData();
    form_data.append('name', event.target.elements.name.value);
    form_data.append('description', event.target.elements.description.value);
    form_data.append('tags', JSON.stringify(data.tags));
    form_data.append('technologys', JSON.stringify(data.technologys));
    form_data.append('image', form.elements.image.files[0]);
    
    const submission = await fetch('http://localhost:3000/projects/create', {
        method:'POST',
        body:form_data
        }
    );
    if(submission.status === 400){
        window.location.href ='/projects/add';
    } else {
        window.location.href ='/projects';
    }
};


const addValuesToData = (e)=>{
    e.preventDefault();
    let elBase = 'tag';
    if(e.currentTarget.id !=='tag_add'){
        elBase='technology';
    }
    const elData = form.elements[elBase].value;
    if(elData !== ''){
        data[`${elBase}s`].push(elData);
        const el = document.getElementById(`${elBase}s`);
        el.innerHTML= data[`${elBase}s`].reduce((prev, next)=>{
         return `${prev}\n<li class="px-2 border-b-2">${next}</li>`; 
         }, '');
         form.elements[elBase].value='';
    }
};
// eslint-disable-next-line no-undef
window.addEventListener('load', init);