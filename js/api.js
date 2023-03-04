const loadApiData = (datalimit) => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
        .then(res => res.json())
        .then(data => displayApiData(data.data.tools.slice(0,6)))
     
        toggleSpinner(true)
}



const displayApiData = (tools) => {
   
    const dataContainer = document.getElementById('data-container')
    dataContainer.innerHTML="";
    
       

    tools.forEach(tools => {

        const dataDiv = document.createElement('div')
        dataDiv.classList.add('col')
        dataDiv.innerHTML = `
            <div class="card h-100">
                <img src="${tools.image}" style ="height:200px" class="card-img-top img-fluid" alt="...">
                
                <div class="ps-3 pt-2">
                    <h5 class="card-title">Features</h5>
                    <p class="card-text">1.${tools.features[0]}</p>
                    <p class="card-text">2.${tools.features[1]}</p>
                    <p class="card-text">3.${tools.features[2] ? tools.features[2]:'Data not found'}</p>
                    
                    <hr class="mx-3">
                   
                </div>
               
                <div class="mt-0 px-3 d-flex align-items-center justify-content-between">
               <div> 
               <h4>${tools.name}</h4>
               <p><i class="fa-solid fa-calendar-days mx-1"></i>${tools.published_in}</P>
               </div>
               <div>
               <button onclick ="apiDetails('${tools.id}')" id="details-btn" class ="bg-warning-subtle text-danger fs-2 px-2 border-0 rounded-circle" type="button" data-bs-toggle="modal" data-bs-target="#apiDetailsModal">&#8594;</button>
               </div>
              </div>
            </div>

`
        dataContainer.appendChild(dataDiv)

    });
    toggleSpinner(false)
}



const apiDetails = id => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySingleApiData(data))
}

const displaySingleApiData = (data) => {
    const modalBodyDetails = document.getElementById('modal-body')
    const modalLeftDetails = document.getElementById('modal-left-details')
    modalLeftDetails.innerHTML = `
        <p class="fw-bold">${data.data.description}</p>
        <div class="container row flex-nowrap column-gap-2 lg-mx-1 align-items-center" style ="font-size:14px">
           <div class ="col bg-light-subtle rounded py-2 text-success fw-semibold" >
           <p>${data.data.pricing[0].price} <br>${data.data.pricing[0].plan}</p>
           </div>
           <div class ="col bg-light-subtle rounded py-2 text-info fw-semibold">
           <p>${data.data.pricing[1].price} <br>${data.data.pricing[1].plan}</p>
           </div>
           <div class ="col bg-light-subtle rounded  text-danger-emphasis fw-semibold">
           <p>${data.data.pricing[2].price} <br>${data.data.pricing[2].plan}</p>
           </div>
        </div>
        <div class="row mt-3">
             <div class ="col">
                 <h4>Features</h4>
                 <ul type="radio" class="text-dark-emphasis" style="font-size:14px" >
                  <li >${data.data.features[1].feature_name}</li>
                  <li>${data.data.features[2].feature_name}</li>
                  <li>${data.data.features[3].feature_name}</li>
                  </ul>
             </div>
             <div class="col">
             <h4>Integrations</h4>
                 
            <ul type="radio" class="text-dark-emphasis" style="font-size:14px">
              <li>${data.data.integrations[0]?data.data.integrations[0]:'No data found'}</li>
              <li>${data.data.integrations[1]?data.data.integrations[1]:'No data found'}</li>
              <li>${data.data.integrations[2]?data.data.integrations[2]:'No data found'}</li>
            </ul>
             
             </div>
        </div>
   
   `
    const modalRightDetails = document.getElementById('modal-right-details')
    modalRightDetails.innerHTML = `
   <div class="card p-3">
          <div class="d-flex"> 
         <div>
          <img src="${data.data.image_link[0]}" class="card-img-top image-fluid " alt="...">
         </div>
         <div> 
         <p id ="accuracy" class="d-none text-white bg-danger text-center rounded" style="font-size:14px; margin: 4px 6px 0px -135px;">${data.data.accuracy.score*100}% accuracy</p>
        
         </div>
          
          </div>
      <div class="card-body">
        <h4>${data.data.input_output_examples[0].input}</h4>
        <p class="card-text">${data.data.input_output_examples[0].input ? data.data.input_output_examples[0].input:'No! Not Yet!Take a break!!!'}</p>
      </div>
  </div>
   
   `
}


// loading spinner
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader')
    if (isLoading) {
        loaderSection.classList.remove('d-none')
    }
    else {
        loaderSection.classList.add('d-none')
    }
}

// button see more
const seeMoreDisplayNone =()=>{
    document.getElementById('see-more').style.display ='none';
}

loadApiData()

const showAllData = () =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
        .then(res => res.json())
        .then(data => displayApiData(data.data.tools))
}







