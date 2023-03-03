const loadApiData = () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
        .then(res => res.json())
        .then(data => displayApiData(data.data.tools))

}

const displayApiData = (tools) => {
    // console.log(data.tools[0].image)
    const dataContainer = document.getElementById('data-container')

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
                    <p class="card-text">3.${tools.features[2]}</p>
                    
                    <hr class="mx-3">
                   
                </div>
               
                <div class="mt-0 px-3 d-flex align-items-center justify-content-between">
               <div> 
               <h4>${tools.name}</h4>
               <p>${tools.published_in}</P>
               </div>
               <div>
               <button onclick ="apiDetails('${tools.id}')"  id="details-btn" class ="bg-warning-subtle text-danger fs-2 px-2 border-0 rounded-circle" type="button" data-bs-toggle="modal" data-bs-target="#apiDetailsModal">&#8594;</button>
               </div>
              </div>
            </div>

`
        dataContainer.appendChild(dataDiv)

    });
}

const apiDetails = id => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySingleApiData (data))
}
 const displaySingleApiData = (data) =>{
   const modalBodyDetails =document.getElementById('modal-body')
   const modalLeftDetails =document.getElementById('modal-left-details')
   modalLeftDetails.innerHTML =`
        <p>${data.data.description}</p>
        <div class="row column-gap-3 px-3">
           <div class ="col bg-light-subtle">
           <p>${data.data.pricing[0].price} <br>${data.data.pricing[0].plan}</p>
           </div>
           <div class ="col bg-light-subtle">
           <p>${data.data.pricing[1].price} <br>${data.data.pricing[1].plan}</p>
           </div>
           <div class ="col bg-light-subtle">
           <p>${data.data.pricing[2].price} <br>${data.data.pricing[2].plan}</p>
           </div>
        </div>
        <div>
             <div>
                 <h3>Features</h3>
                 
                  <p>2.${data.data.features[1].feature_name}</p>
                  <p>3.${data.data.features[2].feature_name}</p>
                  <p>1.${data.data.features[3].feature_name}</p>
                  
             </div>
             <div>
             
             </div>
        </div>
   
   `
   const modalRightDetails =document.getElementById('modal-right-details')
   modalRightDetails.innerHTML =`
   <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
   
   `
 }

loadApiData()

