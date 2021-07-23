function updateMap() {

    fetch("mandir.json")
        .then(res => res.json())
        .then(rsp => {
            console.log(rsp)
            var x=0;
            rsp.data.forEach(e=> {

                 loc="";
                
               e.address.forEach(line=>{
                   loc=loc+line +"<br>";
               })
                console.log(x);
                lat = e.lat;
                long = e.long;
                console.log(e);
                const marker=  new mapboxgl.Marker({ draggable: false });
                const minPopup= new mapboxgl.Popup();
                minPopup.setHTML(
                    `<body style="background-color:LightBlue;">
                     <h2  style="color:blue;">${e.name} </h2> <br> ${loc} <br> <img src=${e.image} " onerror="this.src='https://www.logolynx.com/images/logolynx/7c/7cf4fed31fdbd15fc49e24d68602f161.jpeg'"  width="200" height="180">
                     </body>
                     `)
                marker.setPopup(minPopup)
                marker.setLngLat([long, lat]).addTo(map);
            x++;
            })

        })

}

updateMap();