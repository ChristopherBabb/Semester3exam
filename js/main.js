const doc = document;

doc.addEventListener("DOMContentLoaded", function() {
  // the DOM is fully loaded
  console.log("Document ready!");

  fetch('json/data.json')
    .then(function(response) {
      return response.json();
    })
    .then(json => {
      appendData(json);
    });

  function appendData(json) {
    console.log(json);
    for (key in json) {
      console.log(key);
    let data = json[key];
      console.log(data);
      if(data['jcr:content']){
        let title = data['jcr:content']['jcr:title'];
        console.log(`title: ${title}`);

        let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
        console.log(`active: ${isActive}`);

        if(isActive === "Activate"){
      doc.querySelector("#country").innerHTML += `
      <article class="activate">
      <h4>${title}</h4>
      </article>
      `;
    } else if(isActive === "Deactivate"){
  doc.querySelector("#country").innerHTML += `
  <article class="deactivate">
  <h4>${title}</h4>
  </article>
  `;
    } else{
      doc.querySelector("#country").innerHTML += `
      <article class="other">
      <h4>${title}</h4>
      </article>
      `;

    }
  }
    }
  }



  // DOMContentLoaded event listener end //
});
