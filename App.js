fetch('https://fakestoreapi.com/products').then((data)=>{
    return data.json();
}).then((objectData)=>{
    let tableData=""
    objectData.map((product)=>{
         tableData=tableData+`<tr id="tablerow">
         <th scope="row">${product.id}</th>
         <td class="title">${product.title}</td>
         <td>${product.description}</td>
         <td>${product.price}</td>
         <td><img src="${product.image}"></td>
       </tr>`
    });
    document.getElementById("table_body").innerHTML=tableData;
})