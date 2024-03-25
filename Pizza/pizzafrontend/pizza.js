document.addEventListener("DOMContentLoaded", function() {
    const createButton = document.getElementById("create");
    const readButton = document.getElementById("read");
    const updateButton = document.getElementById("update");
    const deleteButton = document.getElementById("delete");
    
    createButton.addEventListener("click", async function(){
        let baseUrl="http://localhost/Pizza/index.php?vevo";
        const formdata= new FormData(document.getElementById("vevoForm")); 
        let options={
            method: "POST",
            mode: "cors",
            body: formdata
        };
        let response= await fetch(baseUrl, options);
    });
    readButton.addEventListener("click", async function(){
        let baseUrl="http://localhost/Pizza/index.php?vevo";
        let options={
            method: "GET",
            mode: "cors"
        };
        let response= await fetch(baseUrl, options);
        if(response.ok){
            let data= await response.json();
            dolgozokListazasa(data);
        }
        else{
            console.error("Hiba a szerver válaszában!");
        }
    });




    deleteButton.addEventListener("click" ,async function(){
        let vazon = document.getElementById("vazon").value;
        let baseUrl="http://localhost/Pizza/index.php?vevo/"+vazon;
        let options={
            method: "DELETE",
            mode: "cors"
        }
        let response= await fetch(baseUrl, options);
    });


    updateButton.addEventListener("click", async function(){
        let baseUrl="http://localhost/Pizza/index.php?vevo/" +vazon;
         let object ={
            vazon :   document.getElementById("vazon").value,
            vnev :  document.getElementById("vnev").value,
            vcim :   document.getElementById("vcim").value
        }
        let body=JSON.stringify(object)
        let options={
            method: "PUT",
            mode: "cors",
            body: body
        };
       
        
        let response= await fetch(baseUrl, options);
    });





    function dolgozokListazasa(dolgozok){
        let dolgozokDiv= document.getElementById("vevolista");
        let tablazat = dolgozokFejlec();
        for(let vevo of dolgozok){
            tablazat+= dolgozoSor(vevo);
        }
        dolgozokDiv.innerHTML = tablazat+"</tbody> </table>";
    }
    function dolgozoSor(vevo){
        let sor=`<tr>
                    <td>${vevo.vazon}</td>
                    <td>${vevo.vnev}</td>
                    <td>${vevo.vcim}</td>
                    <td>
                        <button type="button" class="btn btn-outline-success" onclick="adatBetoltes(${vevo.vazon})" id="select">Kiválaszt</button>
                    </td>
                </tr>`;
        return sor;
    }
    function dolgozokFejlec(){
        let fejlec=`<table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Azonosító</th>
                                <th>Név</th>
                                <th>Cím</th>
                            </tr>
                        </thead>
                        <tbody>`;
        return fejlec;
    }
});