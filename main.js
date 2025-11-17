const medicineData = {
  'Daraprin': {
    name: 'Daraprin',
    price: 'Rs. 250',
    image: 'https://dwaey.com/medrg/upload/1723992724.png',
    Alternative: {
      "Daramin": {
        name: 'Daramin',
        manufacturer: 'Indica Laboratories Pvt Ltd',
        price: 'Rs. 15',
        image: 'https://www.netmeds.com/images/product-v1/600x600/1136339/daramin_25mg_tablet_10s_742022_0_0.jpg',
        link: 'https://www.1mg.com/drugs/daramin-25mg-tablet-201707'
      }
    }
  },
  
  'Zytiga': {
    name: 'Zytiga',
    price: 'Rs. 75000',
    image: 'https://assets.mrmed.in/product-images/product-images-1719919503102-367500702-Zytiga%20250mg%20Tablet_103434.jpg',
    Alternative: {
      "Mytera": {
        name: 'Mytera',
        manufacturer: 'Mylan Pharma',
        price: 'Rs. 15000',
        image: 'https://onemg.gumlet.io/l_watermark_346,w_480,h_480,c_fit,q_auto,f_auto/cx456kwzkuscoxk4bl4d.jpg?format=auto',
        link: 'https://www.apollopharmacy.in/medicine/mytera-250mg-tablet-120-s'
      },
      "Abitate": {
        name: 'Abitate',
        manufacturer: 'RPG Life Sciences',
        price: 'Rs. 29000',
        image: 'https://assets.mrmed.in/product-images/product-images-1632405352428-700552497-100012_1.jpg',
        link: 'https://www.apollopharmacy.in/medicine/abitate-250mg-tab-120-s'
      }
    }
  },
  
  
  'Glivec': {
    name: 'Glivec',
    price: 'Rs. 6600',
    image: 'https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/a0f76dfdb04146cfb0ec1f5099800eb6.jpg',
    link: 'https://www.1mg.com/drugs/glivec-400mg-tablet-236606?srsltid=AfmBOornCUHbHOOOrbzDerFlKlCNwkmwUZQQ-SVLiJocqFiRtcstyCwq&wpsrc=Google+Organic+Search',
    Alternative: {
      "Veenat": {
        name: 'Veenat',
        manufacturer: 'Natco Pharma',
        price: 'Rs. 1500',
        image: 'https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/a5f53d8d234d45a695d7c6f59707c652.jpg',
        link: 'https://www.1mg.com/drugs/veenat-400-tablet-14360?srsltid=AfmBOoozkKt5QjS2GyIzsogcO_R2FtOGzBoVQFn3fwsoCUwofa590wBc&wpsrc=Google+Organic+Search'
      }
    }
  },
  'Paracetamol': {
    name: 'Paracetamol',
    price: 'Rs. 20-30 per 10 tablets',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/QR/AF/MV/69966959/paracip-paracetamol-650-tablet.jpg',
    link: 'https://www.1mg.com/search/all?filter=true&name=Paracetamol',
    Alternative: {
      "Crocin": {
        name: 'Crocin',
        price: 'Rs. 20-30 per 10 tablets',
        manufacturer: 'GlaxoSmithKline',
        image: 'https://cdn01.pharmeasy.in/dam/products_otc/H45820/crocin-650-tablet-15-nos-3-1689759566.jpg',
        link: 'https://www.1mg.com/search/all?name=crocin'
      },
      "Dolo 65": {
        name: 'Dolo 65',
        price: 'Rs. 20-30 per 10 tablets',
        manufacturer: 'Micro Labs',
        image: 'https://assets.truemeds.in/Images/ProductImage/TM-TACR1-011691/dolo-650-tablet-15_dolo-650-tablet-15--TM-TACR1-011691_1.png',
        link: 'https://www.1mg.com/search/all?name=dolo%2065'
      },
      "Calpol": {
        name: 'Calpol',
        price: 'Rs. 20-30 per 10 tablets',
        manufacturer: "GSK",
        image: "https://drugstreet.in/wp-content/uploads/2023/12/1000046750.jpg",
        link: 'https://www.1mg.com/search/all?name=calpol'
      }
    }
  },
  
  'Combiflam': {
    name: 'Combiflam',
    manufacturer: 'Sanofi',
    price: 'Rs. 20-30 per 10 tablets',
    image: 'https://images.apollo247.in/pub/media/catalog/product/c/o/combiflam_tablet_20_s-1.png',
    link: 'https://www.1mg.com/search/all?filter=true&name=Combiflam',
    Alternative: {
      'Ibuprofen': {
        name: 'Ibuprofen',
        price: 'Rs. 20-30 per 10 tablets',
        manufacturer: 'Abbott',
        image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/344827499/TG/YT/FY/192270567/ibuprofen-tablet-400mg.png',
        link: 'https://www.1mg.com/search/all?filter=true&name=Ibuprofen'
      },
      "Brufen": {
        name: 'Brufen',
        price: 'Rs. 20-30 per 10 tablets',
        manufacturer: 'Abbott',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUmWwHGkFj5M1SKY0GM-af-pHOyLMcLqRdQ&s',
        link: 'https://www.1mg.com/search/all?name=brufen'
      }
    }
  },
  
  'Disprin': {
    name: 'Disprin',
    manufacturer: 'Reckitt Benckiser',
    price: 'Rs. 10-20 for 10 tablets',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfABbWyZY3yywBJtf60mpv4GyfpwTHVj5yGA&s',
    link: 'https://www.1mg.com/otc/disprin-regular-325mg-effervescent-tablet-for-fast-relief-from-pain-headaches-migraines-otc543020',
    Alternative: {
      "Ecosprin": {
        name: 'Ecosprin',
        price: 'Rs. 10-20 for 10 tablets',
        manufacturer: 'USV Ltd.',
        image: 'https://assets.truemeds.in/Images/ProductImage/TM-TACR1-012745/ecosprin-75-tablet-14_ecosprin-75-tablet-14--TM-TACR1-012745_1.png',
        link: 'https://www.1mg.com/search/all?filter=true&name=Ecosprin'
      },
      "Aspirin": {
        name: 'Aspirin',
        price: 'Rs. 10-20 for 10 tablets',
        manufacturer: 'Bayer',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCeIfr0UEUuInFvEhsJRyF3aVQKXuaMSIalA&s',
        link: 'https://www.1mg.com/search/all?filter=true&name=Aspirin'
      },
      "Aspro": {
        name: 'Aspro',
        price: 'Rs. 10-20 for 10 tablets',
        manufacturer: 'Nicholas Healthcare Limited',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SvOcNgxiuLa4yDomGtmGL5e22x6BHuX5qQ&s',
        link: 'Aspro'
      }
    }
  },
  
  'ORS': {
    name: 'ORS',
    price: 'Rs. 15-25 per sachet',
    image: 'https://cdn01.pharmeasy.in/dam/products_otc/W81928/prolyte-ors-orange-drink-sachet-21-gm-2-1654249497.jpg',
    link: 'https://www.1mg.com/search/all?name=ors',
    Alternative: {
      "Electral": {
        name: 'Electral',
        price: 'Rs. 15-25 per sachet',
        manufacturer: 'FDC Ltd',
        image: 'https://m.media-amazon.com/images/I/81jrDrIJoNL.jpg',
        link: 'https://www.1mg.com/search/all?name=ors'
      },
      "ORSL": {
        name: 'ORSL',
        price: 'Rs. 15-25 per sachet',
        manufacturer: 'Dabur',
        image: 'https://images.apollo247.in/pub/media/catalog/product/o/r/ors0011_1-1-_1_.jpg',
        link: 'https://www.1mg.com/search/all?name=ors'
      },
      "Peditral": {
        name: 'Peditral',
        price: 'Rs. 15-25 per sachet',
        manufacturer: 'Cipla',
        image: 'https://images.apollo247.in/pub/media/catalog/product/P/E/PED0040_1_1.jpg',
        link: 'https://www.1mg.com/search/all?name=ors'
      }
    }
  },
  
  'Vicks Vaporub': {
    name: 'Vicks Vaporub',
    price: 'Rs. 40-60 for 25g',
    manufacturer: 'Procter & Gamble	',
    
    image: 'https://cdn01.pharmeasy.in/dam/products_otc/181140/vicks-vaporub-50ml-relief-from-cold-cough-headache-and-body-pain-2-1677525570.jpg',
    link: 'https://www.1mg.com/search/all?name=Vicks%20Vaporub&st=vivks%20vaporup&sl=Vicks%20Vapor,Vicks%20Vaporub&s=Vicks%20Vaporub',
    Alternative: {
      "Zandu Balm": {
        name: 'Zandu Balm',
        price: 'Rs. 40-60 for 25g',
        manufacturer: 'Emami',
        image: 'https://m.media-amazon.com/images/I/617dG3SoVKL.jpg',
        link: 'https://www.1mg.com/search/all?filter=true&name=Zandu%20balm'
      },
      "Amrutanjan": {
        name: 'Amrutanjan',
        price: 'Rs. 40-60 for 25g',
        manufacturer: 'Amrutanjan Healthcare',
        image: 'https://cdn01.pharmeasy.in/dam/products_otc/010715/amrutanjan-strong-doub-50-ml-2-1674209955.jpg',
        link: 'https://www.1mg.com/search/all?filter=true&name=Amrutanjan%20balm'
      },
      "Tiger Balm": {
        name: 'Tiger Balm',
        price: 'Rs. 40-60 for 25g',
        manufacturer: 'Haw Par Healthcare',
        image: 'https://rukminim2.flixcart.com/image/850/1000/jd1z9u80/body-pain-relief/v/n/b/30-red-ointment-30g-tiger-balm-original-imaf224hjngnfmhs.jpeg?q=90&crop=false',
        link: 'https://www.1mg.com/search/all?name=tiger%20balm'
      }
    }
  },
  
  'Digene': {
    name: 'Digene',
    price: 'Rs. 20-40 for 10 tablets or Rs. 60-80 for 200 ml bottle',
    manufacturer: 'Abbott',
    image: 'https://cdn01.pharmeasy.in/dam/products_otc/255390/digene-gel-acidity-gas-relief-200ml-mint-flavour-sugar-free-2-1710939921.jpg',
    link: 'https://www.1mg.com/search/all?name=digene',
    Alternative: {
      "ENO": {
        name: 'ENO',
        price: 'Rs. 20-40 for 10 tablets or Rs. 60-80 for 200 ml bottle',
        manufacturer: 'GlaxoSmithKline',
        image: 'https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/home/mobile/homepage-header-carousal-1-v3_mobile.jpg',
        link: 'https://www.1mg.com/search/all?name=eno'
      },
      "Gelusil": {
        name: 'Gelusil',
        price: 'Rs. 20-40 for 10 tablets or Rs. 60-80 for 200 ml bottle',
        manufacturer: 'Pfizer',
        image: 'https://images.apollo247.in/pub/media/catalog/product/G/E/GEL0002_3_1.jpg',
        link: 'https://www.1mg.com/search/all?name=gelusil'
      }
    }
  },
  
  'Strepsils': {
    name: "Strepsils",
    price: "Rs. 30-50 for a pack of 8-10 tablets",
    manufacturer: "Reckitt Benckiser",
    
    image: "https://5.imimg.com/data5/SELLER/Default/2023/2/RX/ZI/IF/81505918/strepsils-blister.jpg",
    link:'https://www.1mg.com/categories/featured/top-brands/strepsils-884',
    Alternative: {
      'Vicks': {
        name: "Vicks",
        price: "Rs. 30-50 for a pack of 8-10 tablets",
        manufacturer: "Procter & Gamble",
        image: "https://images.ctfassets.net/umpxkz97ty8t/4tjmmu8xgFdItABWjhpWTA/88afdcd6055df8b4fac3fdea0098dfa5/VCD4-Packs.png",
        link:'https://www.1mg.com/search/all?name=vicks&filter=true&state=1&scroll_id=Rre-0688yDrQYBn-2UkFiY-vOvNzHZ9Vlp5wJSeiWio='
      },
      'Dabur Honitus': {
        name: "Dabur Honitus",
        price: "Rs. 30-50 for a pack of 8-10 tablets",
        manufacturer: "Dabur India Ltd",
        
        image: "https://5.imimg.com/data5/UF/HY/GLADMIN-43545561/dabur-honitus-cough-drops.png",
        link:'https://www.1mg.com/search/all?name=dabur%20honitus'
      },
      'Cofsils': {
        name: "Cofsils",
        price: "Rs. 30-50 for a pack of 8-10 tablets",
        manufacturer: "Cipla Healthcare",
        
        image: "https://5.imimg.com/data5/SELLER/Default/2020/9/HW/ZE/YJ/14356045/cosils-orange.jpg",
        link:'https://www.1mg.com/search/all?name=cofsils'
        
      }
    }
  },
  
  "Benadryl": {
    name: "Benadryl",
    price: "Rs. 50-80 per bottle (100 ml)",
    manufacturer: 'Johnson & Johnson',
    
    image: "https://images.apollo247.in/pub/media/catalog/product/b/e/ben0053_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w",
    link: 'https://www.1mg.com/search/all?filter=true&name=Benadryl',
    "Alternative": {
      "Corex": {
        name: "Corex",
        price: "Rs. 50-80 per bottle (100 ml)",
        manufacturer: "Pfizer",
        image: "https://shreedashrath.com/wp-content/uploads/2021/06/corex-600x600.jpg",
        link: 'https://www.1mg.com/search/all?name=corex'
      },
      "Ascoril-D": {
        name: "Ascoril-D",
        price: "Rs. 50-80 per bottle (100 ml)",
        manufacturer: "Glenmark",
        image: "https://images.apollo247.in/pub/media/catalog/product/a/s/asc0019.jpg",
        link: "https://www.1mg.com/search/all?filter=true&name=Ascoril"
      }
    }
  },
  "Augmentin 1000 Duo Tablet": {
    name: "Augmentin 1000 Duo Tablet",
    price: "Rs. 1000",
    image: "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/bodminug3xmfcubbrdix.jpg?format=auto",
    link: "https://www.1mg.com/drugs/augmentin-1000-duo-tablet-163191",
    "Alternative": {
      "Clavam": {
        name: "Clavam",
        price: "Rs. 193",
        manufacturer: "Alkem Laboratories",
        
        image: "https://images.apollo247.in/pub/media/catalog/product/c/l/cla0004.jpg",
        link: "https://www.1mg.com/drugs/clavam-625-tablet-63841"
      }
    }
  },
  "Crestor": {
    name: "Crestor",
    price: "Rs. 732",
    manufacturer: "AstraZeneca",
    
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Jd-k1uea3upVeTJNmtS8y9ASkNOwsxN8Uw&s",
    link: "https://www.1mg.com/drugs/crestor-40mg-tablet-932668",
    "Alternative": {
      "Rosuvas": {
        name: "Rosuvas",
        price: "Rs. 277",
        manufacturer: "Sun Pharmaceutical Industries Ltd",
        
        image: "https://5.imimg.com/data5/SELLER/Default/2024/6/425035920/PX/LR/WN/147700842/rosuvas-10-mg-tablet1-500x500.jpg",
        link: "https://www.1mg.com/drugs/rosuvas-10-tablet-113791"
      }
    }
  },
  "Lantus": {
    name: "Lantus",
    price: "Rs. 634",
    manufacturer: "Sanofi India Ltd",
    
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3pt0WVYQOROwvBFQi4lo5Fy0HvifJla0VUw&s",
    link: "https://www.1mg.com/drugs/lantus-solostar-100iu-ml-solution-for-injection-69758",
    "Alternative": {
      "Basalog": {
        name: "Basalog",
        price: "Rs. 481",
        manufacturer: "Biocon",
        
        image: "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/0c379a5816da4e63b74cd6889b2d382a.jpg?format=auto",
        link: "https://www.1mg.com/drugs/basalog-100iu-ml-refill-cartridge-164232"
      }
    }
  },
  "Tamiflu": {
    name: "Tamiflu",
    price: "Rs. 1238",
    manufacturer: "Roche Products India Pvt Ltd",
    
    image: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/4/shutterstock_170422580.jpg",
    link: "https://www.1mg.com/drugs/tamiflu-75mg-capsule-682558",
    "Alternative": {
      "Fluvir": {
        name: "Fluvir",
        price: "Rs. 447",
        manufacturer: "Hetero Drugs Ltd",
        
        image: "https://images.apollo247.in/pub/media/catalog/product/f/l/flu0174.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w",
        link: "https://www.1mg.com/drugs/fluvir-75mg-capsule-25088"
      }
    }
  },
  "Eliquis": {
    name: "Eliquis",
    price: "Rs. 1086",
    manufacturer: "Pfizer Ltd",
    
    image: "https://5.imimg.com/data5/SELLER/Default/2022/9/KS/UI/TA/136059498/eliquis-5mg-tablet.jpg",
    link: "https://www.1mg.com/drugs/eliquis-5mg-tablet-172700",
    "Alternative": {
      "Apigat": {
        name: "Apigat",
        price: "Rs. 533",
        manufacturer: "Natco Pharma Ltd",
        
        image: "https://www.practostatic.com/practopedia-images/v3/res-750/apigat-2-5-mg-tablet-30-s_15fa3947-9fad-47f2-bbed-8d5f500e66e9.JPG",
        link: "https://www.1mg.com/drugs/apigat-5-tablet-540276"
      }
    }
  }
}



let greet = document.getElementById('greet')

function filterFunction(event) {
  let userInput = event.target.value.toLowerCase();
  let [mainMed, altMed, showMain] = filterMed(userInput, medicineData);
  
  function filterMed(userInput, object) {
    let main = {};
    let alt = {};
    let showMain = {};
    // Find main medicine 
    for (let key in object) {
      if (key.toLowerCase().includes(userInput)) {
        main[key] = object[key];
        
        
        if (object[key].Alternative) {
          for (let altKey in object[key].Alternative) {
            alt[altKey] = object[key].Alternative[altKey];
          }
        }
      }
    }
    
    //Alternative medicine 
    
    for (let key in object) {
      if (object[key].Alternative) {
        for (let altKey in object[key].Alternative) {
          if (altKey.toLowerCase().includes(userInput)) {
            alt[altKey] = object[key].Alternative[altKey];
            showMain[key] = object[key];
          }
        }
      }
    }
    
    return [Object.values(main), Object.values(alt), Object.values(showMain)];
    
  }
  showFilter(mainMed, altMed, showMain);
  
  
}

function showFilter(mainMed, altMed, showMain) {
  let data = document.getElementById('filter');
  let resultHTML = "";
  
  function ram(list, type) {
    
    let r = `<p class="tag">${type}</p>`;
    // Card data
    for (let items of list) {
      r += `<button onclick="window.open('${items.link}', '_blank')" class="card">  
<div id="img">  
    <img src="${items.image}" alt="${items.name} image"/>  
</div>  
<div class="text">  
    <h1><span> Name: </span> ${items.name}</h1>  
    ${items.manufacturer ? `<p><span> Manufacturer:</span> ${items.manufacturer}</p>` : ""}  
    <p><span> Price: </span>${items.price}</p>  
</div>  


                    
                    
                </div>  
            </button>  
        `;
    }
    return r;
    
  }
  
  //  CASE 1 → main मिला
  if (mainMed.length > 0) {
    
    // Pehle sirf main show karo  
    resultHTML = ram(mainMed, "Original");
    // Alt ko  hidden  krna
    resultHTML +=
      `<div id="altMedBox" style="display:none;">   
 ${ ram(altMed, "Alternative")}   
  </div>`;
    
    
    
  }
  //  CASE 2 → sirf alternative मिला
  else if (altMed.length > 0) {
   resultHTML =
      ram(altMed, "Alternative") +
      ram(showMain, "Original");
  }
  
  //  Not found
  else {
   resultHTML =
      "<p class='not-found'>Data Not Found</p>" +
      "<button onclick='resetSearch()'>Try again</button>";
    document.getElementById("ramaaa").style.display = "none";
  }
  
  
  if (document.getElementById("search").value === "") {
    resultHTML = ""
  }
  data.innerHTML=resultHTML;
}












document.addEventListener("DOMContentLoaded", function() {
  let btn = document.getElementById("ramaaa");
  if (btn) {
    btn.onclick = function() {
      let x = document.getElementById("altMedBox");
      if (x) {
        x.style.display = "block";
      }
    }
    
  }
});

function resetSearch(event) {
  document.getElementById('search').value = "";
  document.getElementById('filter').innerHTML = "";
  document.getElementById("aaa").value = "";
}

function saveName() {
  let userName = document.getElementById("input").value;
  localStorage.setItem("userName", userName);
}
if (document.getElementById("user")) {
  let savedName = localStorage.getItem("userName") || "Guest";
  document.getElementById("user").innerHTML = savedName;
}

function updateGreeting() {
  
  let hour = new Date().getHours();
  let greeting = "";
  if (hour >= 5 && hour < 12) {
    greeting = "Good morning 🌞 "
  } else if (hour >= 12 && hour < 17
    
  ) {
    greeting = "Good after noon"
  }
  
  else if (hour >= 17 && hour < 21) {
    greeting = " Good evening ✨ "
  }
  
  else {
    greeting = "Good night 😴 "
  }
  if (greet) {
    greet.innerHTML = greeting;
  }
  
}

updateGreeting();
