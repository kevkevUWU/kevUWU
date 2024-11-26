function findCity() {
    const cities = [
        { name: "London", offset: 0, image: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/640px-London_Skyline_%28125508655%29.jpeg')", food: "Fish and Chips" },
        { name: "Azores", offset: -1, image: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Fogo_lake_-_S.Miguel_island_-_Azores_%2839000072215%29_%28cropped%29.jpg/220px-Fogo_lake_-_S.Miguel_island_-_Azores_%2839000072215%29_%28cropped%29.jpg')", food: "Cozido das Furnas" },
        { name: "South Georgia", offset: -2, image: "url('https://adventuresmithexplorations.com/wp-content/uploads/2023/12/how-to-visit-south-georgia-antarctica-1440-600x375.jpg.webp')", food: "Reindeer Meat" },
        { name: "Buenos Aires", offset: -3, image: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Puerto_Madero%2C_Buenos_Aires_%2840689219792%29_%28cropped%29.jpg/800px-Puerto_Madero%2C_Buenos_Aires_%2840689219792%29_%28cropped%29.jpg')", food: "Empanadas" },
        { name: "Santiago", offset: -4, image: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Santiago_de_Chile%2C_Desde_Cerro_San_Cristóbal.jpg/1030px-Santiago_de_Chile%2C_Desde_Cerro_San_Cristóbal.jpg')", food: "Chilean Sea Bass" },
        { name: "New York", offset: -5, image: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/288px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg')", food: "Bagels" },
        { name: "Chicago", offset: -6, image: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Chicago_city_view.jpg/800px-Chicago_city_view.jpg')", food: "Deep Dish Pizza" },
        { name: "Denver", offset: -7, image: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Denver_Skyline_in_Winter.JPG/800px-Denver_Skyline_in_Winter.JPG')", food: "Rocky Mountain Oysters" },
        { name: "Los Angeles", offset: -8, image: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/278px-Los_Angeles_with_Mount_Baldy.jpg')", food: "Street Tacos" },
        { name: "Anchorage", offset: -9, image: "url('https://upload.wikimedia.org/wikipedia/commons/4/4a/Anchorage_on_an_April_evening.jpg')", food: "Salmon" },
        { name: "Honolulu", offset: -10, image: "url('https://upload.wikimedia.org/wikipedia/commons/6/64/Downtown_Honolulu_from_Pūowaina_%28Punchbowl_Crater%29.jpg')", food: "Poke" },
        { name: "Baker Island", offset: -12, image: "url('https://upload.wikimedia.org/wikipedia/commons/7/71/Nwrbakerisle_a320.gif')", food: "Canned Rations" },
        { name: "Berlin", offset: 1, image: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg/800px-Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg')", food: "Currywurst" },
        { name: "Cairo", offset: 2, image: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Cairo_From_Tower_%28cropped%29.jpg/640px-Cairo_From_Tower_%28cropped%29.jpg')", food: "Koshari" },
        { name: "Moscow", offset: 3, image: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg/800px-Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg')", food: "Borscht" },
        { name: "Dubai", offset: 4, image: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Dubai_skyline_2015_%28crop%29.jpg/220px-Dubai_skyline_2015_%28crop%29.jpg')", food: "Shawarma" },
        { name: "Karachi", offset: 5, image: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Karachi_Municipal_Corporation_%28KMC%29_Head_Office_at_M.A_Jinnah_Road_-_Photo_By_Aliraza_Khatri.jpg/220px-Karachi_Municipal_Corporation_%28KMC%29_Head_Office_at_M.A_Jinnah_Road_-_Photo_By_Aliraza_Khatri.jpg')", food: "Biryani" },
        { name: "Dhaka", offset: 6, image: "url('https://upload.wikimedia.org/wikipedia/commons/5/5f/Bangladesh_Bank_%2833398162476%29.jpg')", food: "Hilsa Fish" },
        { name: "Bangkok", offset: 7, image: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/4Y1A1159_Bangkok_%2833536795515%29.jpg/220px-4Y1A1159_Bangkok_%2833536795515%29.jpg')", food: "Pad Thai" },
        { name: "Beijing", offset: 8, image: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Parkview_Green_and_CBD_skyline_%2820210927131419%29.jpg/220px-Parkview_Green_and_CBD_skyline_%2820210927131419%29.jpg')", food: "Peking Duck" },
        { name: "Tokyo", offset: 9, image: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/288px-Skyscrapers_of_Shinjuku_2009_January.jpg')", food: "Sushi" },
        { name: "Sydney", offset: 11, image: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Sydney_Harbour_welcomes_Jessica_Watson.jpg/220px-Sydney_Harbour_welcomes_Jessica_Watson.jpg')", food: "Meat Pie" },
        { name: "Fiji", offset: 12, image: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/BureNavala2.jpg/220px-BureNavala2.jpg')", food: "Kokoda" }
        
    ];

    const currentTime = new Date();
    const utcHour = currentTime.getUTCHours();

    const matchingCity = cities.find(city => {
        let cityHour = (utcHour + city.offset + 24) % 24;
        return cityHour >= 1 && cityHour < 2;
    });

    const cityElement = document.getElementById("city");
    const foodElement = document.getElementById("food");
    if (matchingCity) {
        cityElement.innerText = `It's currently between 8 AM and 9 AM in ${matchingCity.name}`;
        document.body.style.backgroundImage = matchingCity.image;
        foodElement.innerText = `A popular food in ${matchingCity.name} is ${matchingCity.food}.`;
    } else {
        cityElement.innerText = "No major city in the list is currently between 8 AM and 9 AM :(";
        foodElement.innerText = "";
    }
}