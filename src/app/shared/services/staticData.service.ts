import { Injectable } from "@angular/core";
@Injectable({ providedIn: 'root' })
export class StaticDataService {

    getCountries(): { id: number; name: string; }[] {
        return this.countriesData
    }

    getCities(): { id: number; name: string; countryId: number; }[] {
        return this.citiesData;
    }
    getFilteredCities(id: number): { id: number; name: string; countryId: number; }[] {
        return this.citiesData.filter(c => c.countryId === id);
    }
    getFilteredCitiesByCountryName(countryName: string): { id: number; name: string; countryId: number; }[] {
        const countryId = this.getCountries().find(country => country.name.toLocaleLowerCase() === countryName.toLocaleLowerCase());
        return this.citiesData.filter(c => c.countryId === countryId?.id);
    }
    getCategories() {
        return [
            { name: 'Historical', iconName: '🏰' },  // Castles, ruins, ancient sites
            { name: 'Nature', iconName: '🌳' },     // Parks, forests, natural reserves
            { name: 'Modern', iconName: '🏙️' },    // Skyscrapers, urban landmarks
            { name: 'Religious', iconName: '⛪' },  // Churches, temples, mosques
            { name: 'Cultural', iconName: '🎭' },   // Theaters, art galleries, cultural centers
            { name: 'Architectural', iconName: '🏛️' },  // Famous buildings, monuments
            { name: 'Seaside', iconName: '🏖️' },   // Beaches, coastal landmarks
            { name: 'Mountain', iconName: '⛰️' },   // Famous peaks, hiking spots
            { name: 'Desert', iconName: '🏜️' },    // Sand dunes, desert wonders
            { name: 'Underground', iconName: '🕳️' }, // Caves, underground cities
            { name: 'Space & Science', iconName: '🔭' }, // Observatories, science museums
            { name: 'Industrial', iconName: '🏗️' }, // Factories, historical industries
            { name: 'Waterfalls', iconName: '🌊' }, // Famous waterfalls, rivers
            { name: 'Islands', iconName: '🏝️' },   // Tropical and historical islands
            { name: 'Adventure', iconName: '🎢' },  // Theme parks, extreme sports locations
        ];
    }
    citiesData=[
        { "id": 1, "name": "New York", "countryId": 103 },
        { "id": 2, "name": "Los Angeles", "countryId": 103 },
        { "id": 3, "name": "Chicago", "countryId": 103 },
        { "id": 4, "name": "Houston", "countryId": 103 },
        { "id": 5, "name": "London", "countryId": 102 },
        { "id": 6, "name": "Manchester", "countryId": 102 },
        { "id": 7, "name": "Birmingham", "countryId": 102 },
        { "id": 8, "name": "Edinburgh", "countryId": 102 },
        { "id": 9, "name": "Berlin", "countryId": 54 },
        { "id": 10, "name": "Munich", "countryId": 54 },
        { "id": 11, "name": "Hamburg", "countryId": 54 },
        { "id": 12, "name": "Frankfurt", "countryId": 54 },
        { "id": 13, "name": "Paris", "countryId": 53 },
        { "id": 14, "name": "Lyon", "countryId": 53 },
        { "id": 15, "name": "Marseille", "countryId": 53 },
        { "id": 16, "name": "Tokyo", "countryId": 63 },
        { "id": 17, "name": "Osaka", "countryId": 63 },
        { "id": 18, "name": "Nagoya", "countryId": 63 },
        { "id": 19, "name": "Kyoto", "countryId": 63 },
        { "id": 20, "name": "Beijing", "countryId": 34 },
        { "id": 21, "name": "Shanghai", "countryId": 34 },
        { "id": 22, "name": "Guangzhou", "countryId": 34 },
        { "id": 23, "name": "Shenzhen", "countryId": 34 },
        { "id": 24, "name": "Moscow", "countryId": 90 },
        { "id": 25, "name": "Saint Petersburg", "countryId": 90 },
        { "id": 26, "name": "Kazan", "countryId": 90 },
        { "id": 27, "name": "Novosibirsk", "countryId": 90 },
        { "id": 28, "name": "Dubai", "countryId": 101 },
        { "id": 29, "name": "Abu Dhabi", "countryId": 101 },
        { "id": 30, "name": "Sharjah", "countryId": 101 },
        { "id": 31, "name": "Istanbul", "countryId": 99 },
        { "id": 32, "name": "Ankara", "countryId": 99 },
        { "id": 33, "name": "Izmir", "countryId": 99 },
        { "id": 34, "name": "Bursa", "countryId": 99 },
        { "id": 35, "name": "Delhi", "countryId": 56 },
        { "id": 36, "name": "Mumbai", "countryId": 56 },
        { "id": 37, "name": "Bangalore", "countryId": 56 },
        { "id": 38, "name": "Hyderabad", "countryId": 56 },
        { "id": 39, "name": "Sydney", "countryId": 8 },
        { "id": 40, "name": "Melbourne", "countryId": 8 },
        { "id": 41, "name": "Brisbane", "countryId": 8 },
        { "id": 42, "name": "Perth", "countryId": 8 },
        { "id": 43, "name": "Cairo", "countryId": 47 },
        { "id": 44, "name": "Alexandria", "countryId": 47 },
        { "id": 45, "name": "Giza", "countryId": 47 },
        { "id": 46, "name": "Mexico City", "countryId": 74 },
        { "id": 47, "name": "Guadalajara", "countryId": 74 },
        { "id": 48, "name": "Monterrey", "countryId": 74 },
        { "id": 49, "name": "Sao Paulo", "countryId": 23 },
        { "id": 50, "name": "Rio de Janeiro", "countryId": 23 },
        { "id": 51, "name": "Tehran", "countryId": 58 },
        { "id": 52, "name": "Kish", "countryId": 58 },
        { "id": 53, "name": "Shiraz", "countryId": 58 },
        { "id": 54, "name": "Madrid", "countryId": 94 },
        { "id": 55, "name": "Lagos", "countryId": 78 },
        { "id": 55, "name": "Lagos", "countryId": 78 },
        { "id": 55, "name": "Lagos", "countryId": 78 },
        { "id": 55, "name": "Lagos", "countryId": 78 },
        { "id": 56, "name": "Barcelona", "countryId": 94 },
        { "id": 57, "name": "Valencia", "countryId": 94 },
        { "id": 58, "name": "Seville", "countryId": 94 },
        { "id": 59, "name": "Zaragoza", "countryId": 94 },
        { "id": 60, "name": "Lisbon", "countryId": 87 },
        { "id": 61, "name": "Porto", "countryId": 87 },
        { "id": 62, "name": "Braga", "countryId": 87 },
        { "id": 63, "name": "Coimbra", "countryId": 87 },
        { "id": 64, "name": "Athens", "countryId": 55 },
        { "id": 65, "name": "Thessaloniki", "countryId": 55 },
        { "id": 66, "name": "Patras", "countryId": 55 },
        { "id": 67, "name": "Heraklion", "countryId": 55 },
        { "id": 68, "name": "Vienna", "countryId": 9 },
        { "id": 69, "name": "Salzburg", "countryId": 9 },
        { "id": 70, "name": "Graz", "countryId": 9 },
        { "id": 71, "name": "Linz", "countryId": 9 },
        { "id": 72, "name": "Brussels", "countryId": 16 },
        { "id": 73, "name": "Antwerp", "countryId": 16 },
        { "id": 74, "name": "Ghent", "countryId": 16 },
        { "id": 75, "name": "Charleroi", "countryId": 16 },
        { "id": 76, "name": "Stockholm", "countryId": 95 },
        { "id": 77, "name": "Gothenburg", "countryId": 95 },
        { "id": 78, "name": "Malmö", "countryId": 95 },
        { "id": 79, "name": "Uppsala", "countryId": 95 },
        { "id": 80, "name": "Helsinki", "countryId": 52 },
        { "id": 81, "name": "Espoo", "countryId": 52 },
        { "id": 82, "name": "Tampere", "countryId": 52 },
        { "id": 83, "name": "Oulu", "countryId": 52 },
        { "id": 84, "name": "Oslo", "countryId": 80 },
        { "id": 85, "name": "Bergen", "countryId": 80 },
        { "id": 86, "name": "Trondheim", "countryId": 80 },
        { "id": 87, "name": "Stavanger", "countryId": 80 },
        { "id": 88, "name": "Warsaw", "countryId": 86 },
        { "id": 89, "name": "Kraków", "countryId": 86 },
        { "id": 90, "name": "Łódź", "countryId": 86 },
        { "id": 91, "name": "Wrocław", "countryId": 86 },
        { "id": 92, "name": "Bucharest", "countryId": 89 },
        { "id": 93, "name": "Cluj-Napoca", "countryId": 89 },
        { "id": 94, "name": "Timișoara", "countryId": 89 },
        { "id": 95, "name": "Iași", "countryId": 89 },
        { "id": 96, "name": "Belgrade", "countryId": 21 },
        { "id": 97, "name": "Novi Sad", "countryId": 21 },
        { "id": 98, "name": "Niš", "countryId": 21 },
        { "id": 99, "name": "Kragujevac", "countryId": 21 },
        { "id": 100, "name": "Sofia", "countryId": 25 },
        { "id": 101, "name": "Plovdiv", "countryId": 25 },
        { "id": 102, "name": "Varna", "countryId": 25 },
        { "id": 103, "name": "Burgas", "countryId": 25 },
        { "id": 104, "name": "Prague", "countryId": 42 },
        { "id": 105, "name": "Brno", "countryId": 42 },
        { "id": 106, "name": "Ostrava", "countryId": 42 },
        { "id": 107, "name": "Pilsen", "countryId": 42 },
        { "id": 108, "name": "Copenhagen", "countryId": 43 },
        { "id": 109, "name": "Aarhus", "countryId": 43 },
        { "id": 110, "name": "Odense", "countryId": 43 },
        { "id": 111, "name": "Aalborg", "countryId": 43 },
        { "id": 112, "name": "Dublin", "countryId": 60 },
        { "id": 113, "name": "Cork", "countryId": 60 },
        { "id": 114, "name": "Limerick", "countryId": 60 },
        { "id": 115, "name": "Galway", "countryId": 60 },
        { "id": 116, "name": "Budapest", "countryId": 26 },
        { "id": 117, "name": "Debrecen", "countryId": 26 },
        { "id": 118, "name": "Szeged", "countryId": 26 },
        { "id": 119, "name": "Miskolc", "countryId": 26 },
        { "id": 120, "name": "Riyadh", "countryId": 91 },
        { "id": 121, "name": "Jeddah", "countryId": 91 },
        { "id": 122, "name": "Mecca", "countryId": 91 },
        { "id": 123, "name": "Medina", "countryId": 91 },
        { "id": 124, "name": "Kuwait City", "countryId": 67 },
        { "id": 125, "name": "Ahmadi", "countryId": 67 },
        { "id": 126, "name": "Hawally", "countryId": 67 },
        { "id": 127, "name": "Al Jahra", "countryId": 67 },
        { "id": 128, "name": "Doha", "countryId": 88 },
        { "id": 129, "name": "Al Wakrah", "countryId": 88 },
        { "id": 130, "name": "Al Khor", "countryId": 88 },
        { "id": 131, "name": "Madinat ash Shamal", "countryId": 88 },
        { "id": 132, "name": "Manama", "countryId": 12 },
        { "id": 133, "name": "Muharraq", "countryId": 12 },
        { "id": 134, "name": "Riffa", "countryId": 12 },
        { "id": 135, "name": "Hamad Town", "countryId": 12 },
        { "id": 136, "name": "Tunis", "countryId": 99 },
        { "id": 137, "name": "Sfax", "countryId": 99 },
        { "id": 138, "name": "Sousse", "countryId": 99 },
        { "id": 139, "name": "Ettadhamen", "countryId": 99 },
        { "id": 140, "name": "Algiers", "countryId": 3 },
        { "id": 141, "name": "Oran", "countryId": 3 },
        { "id": 142, "name": "Constantine", "countryId": 3 },
        { "id": 143, "name": "Annaba", "countryId": 3 },
        { "id": 144, "name": "Casablanca", "countryId": 75 },
        { "id": 145, "name": "Rabat", "countryId": 75 },
        { "id": 146, "name": "Fes", "countryId": 75 },
        { "id": 147, "name": "Marrakech", "countryId": 75 },
        { "id": 148, "name": "Addis Ababa", "countryId": 50 },
        { "id": 149, "name": "Dire Dawa", "countryId": 50 },
        { "id": 150, "name": "Gondar", "countryId": 50 },
        { "id": 151, "name": "Mekelle", "countryId": 50 },
        { "id": 152, "name": "Nairobi", "countryId": 66 },
        { "id": 153, "name": "Mombasa", "countryId": 66 },
        { "id": 154, "name": "Kisumu", "countryId": 66 },
        { "id": 155, "name": "Nakuru", "countryId": 66 },
        { "id": 156, "name": "Accra", "countryId": 18 },
        { "id": 157, "name": "Kumasi", "countryId": 18 },
        { "id": 158, "name": "Tamale", "countryId": 18 },
        { "id": 159, "name": "Takoradi", "countryId": 18 },
        { "id": 160, "name": "Cape Town", "countryId": 92 },
        { "id": 161, "name": "Johannesburg", "countryId": 92 },
        { "id": 162, "name": "Pretoria", "countryId": 92 },
        { "id": 163, "name": "Durban", "countryId": 92 },
        { "id": 164, "name": "Luanda", "countryId": 5 },
        { "id": 165, "name": "Lobito", "countryId": 5 },
        { "id": 166, "name": "Benguela", "countryId": 5 },
        { "id": 167, "name": "Huambo", "countryId": 5 },
        { "id": 168, "name": "Dar es Salaam", "countryId": 99 },
        { "id": 169, "name": "Dodoma", "countryId": 99 },
        { "id": 170, "name": "Arusha", "countryId": 99 },
        { "id": 171, "name": "Mwanza", "countryId": 99 },
        { "id": 172, "name": "Kampala", "countryId": 100 },
        { "id": 173, "name": "Entebbe", "countryId": 100 },
        { "id": 174, "name": "Jinja", "countryId": 100 },
        { "id": 175, "name": "Gulu", "countryId": 100 },
        { "id": 176, "name": "Abuja", "countryId": 78 },
        { "id": 177, "name": "Ibadan", "countryId": 78 },
        { "id": 178, "name": "Kano", "countryId": 78 },
        { "id": 179, "name": "Port Harcourt", "countryId": 78 },
        { "id": 180, "name": "Dakar", "countryId": 90 },
        { "id": 181, "name": "Touba", "countryId": 90 },
        { "id": 182, "name": "Thies", "countryId": 90 },
        { "id": 183, "name": "Kaolack", "countryId": 90 },
        { "id": 184, "name": "Bamako", "countryId": 3 },
        { "id": 185, "name": "Sikasso", "countryId": 3 },
        { "id": 186, "name": "Mopti", "countryId": 3 },
        { "id": 187, "name": "Koutiala", "countryId": 3 },
        { "id": 188, "name": "Lima", "countryId": 84 },
        { "id": 189, "name": "Arequipa", "countryId": 84 },
        { "id": 190, "name": "Trujillo", "countryId": 84 },
        { "id": 191, "name": "Chiclayo", "countryId": 84 },
        { "id": 192, "name": "Bogotá", "countryId": 35 },
        { "id": 193, "name": "Medellín", "countryId": 35 },
        { "id": 194, "name": "Cali", "countryId": 35 },
        { "id": 195, "name": "Barranquilla", "countryId": 35 },
        { "id": 196, "name": "Santiago", "countryId": 33 },
        { "id": 197, "name": "Valparaíso", "countryId": 33 },
        { "id": 198, "name": "Concepción", "countryId": 33 },
        { "id": 199, "name": "La Serena", "countryId": 33 },
        { "id": 200, "name": "Buenos Aires", "countryId": 6 },
        { "id": 201, "name": "Córdoba", "countryId": 6 },
        { "id": 202, "name": "Rosario", "countryId": 6 },
        { "id": 203, "name": "Mendoza", "countryId": 6 },
        { "id": 204, "name": "Brasilia", "countryId": 23 },
        { "id": 205, "name": "Fortaleza", "countryId": 23 },
        { "id": 206, "name": "Recife", "countryId": 23 },
        { "id": 207, "name": "Porto Alegre", "countryId": 23 },
        { "id": 208, "name": "Caracas", "countryId": 104 },
        { "id": 209, "name": "Maracaibo", "countryId": 104 },
        { "id": 210, "name": "Valencia", "countryId": 104 },
        { "id": 211, "name": "Barquisimeto", "countryId": 104 },
        { "id": 212, "name": "Hanoi", "countryId": 105 },
        { "id": 213, "name": "Ho Chi Minh City", "countryId": 105 },
        { "id": 214, "name": "Da Nang", "countryId": 105 },
        { "id": 215, "name": "Hai Phong", "countryId": 105 },
        { "id": 216, "name": "Bangkok", "countryId": 98 },
        { "id": 217, "name": "Chiang Mai", "countryId": 98 },
        { "id": 218, "name": "Pattaya", "countryId": 98 },
        { "id": 219, "name": "Phuket", "countryId": 98 },
        { "id": 220, "name": "Seoul", "countryId": 93 },
        { "id": 221, "name": "Busan", "countryId": 93 },
        { "id": 222, "name": "Incheon", "countryId": 93 },
        { "id": 223, "name": "Daegu", "countryId": 93 },
        { "id": 224, "name": "Pyongyang", "countryId": 79 },
        { "id": 225, "name": "Hamhung", "countryId": 79 },
        { "id": 226, "name": "Chongjin", "countryId": 79 },
        { "id": 227, "name": "Nampo", "countryId": 79 },
        { "id": 228, "name": "Manila", "countryId": 85 },
        { "id": 229, "name": "Quezon City", "countryId": 85 },
        { "id": 230, "name": "Davao", "countryId": 85 },
        { "id": 231, "name": "Cebu", "countryId": 85 },
        { "id": 232, "name": "Jakarta", "countryId": 57 },
        { "id": 233, "name": "Surabaya", "countryId": 57 },
        { "id": 234, "name": "Bandung", "countryId": 57 },
        { "id": 235, "name": "Medan", "countryId": 57 },
        { "id": 236, "name": "Kuala Lumpur", "countryId": 73 },
        { "id": 237, "name": "George Town", "countryId": 73 },
        { "id": 238, "name": "Johor Bahru", "countryId": 73 },
        { "id": 239, "name": "Kota Kinabalu", "countryId": 73 },
        { "id": 240, "name": "Singapore", "countryId": 99 },
        { "id": 241, "name": "Brunei", "countryId": 24 },
        { "id": 242, "name": "Bandar Seri Begawan", "countryId": 24 },
        { "id": 243, "name": "New Delhi", "countryId": 56 },
        { "id": 244, "name": "Chennai", "countryId": 56 },
        { "id": 245, "name": "Kolkata", "countryId": 56 },
        { "id": 246, "name": "Pune", "countryId": 56 },
        { "id": 247, "name": "Kathmandu", "countryId": 97 },
        { "id": 248, "name": "Pokhara", "countryId": 97 },
        { "id": 249, "name": "Lalitpur", "countryId": 97 },
        { "id": 250, "name": "Biratnagar", "countryId": 97 },
        { "id": 251, "name": "Dhaka", "countryId": 13 },
        { "id": 252, "name": "Chittagong", "countryId": 13 },
        { "id": 253, "name": "Khulna", "countryId": 13 },
        { "id": 254, "name": "Sylhet", "countryId": 13 },
        { "id": 255, "name": "Islamabad", "countryId": 82 },
        { "id": 256, "name": "Karachi", "countryId": 82 },
        { "id": 257, "name": "Lahore", "countryId": 82 },
        { "id": 258, "name": "Peshawar", "countryId": 82 },
        { "id": 259, "name": "Baku", "countryId": 10 },
        { "id": 260, "name": "Ganja", "countryId": 10 },
        { "id": 261, "name": "Sumqayit", "countryId": 10 },
        { "id": 262, "name": "Mingachevir", "countryId": 10 },
        { "id": 263, "name": "Tbilisi", "countryId": 7 },
        { "id": 264, "name": "Batumi", "countryId": 7 },
        { "id": 265, "name": "Kutaisi", "countryId": 7 },
        { "id": 266, "name": "Rustavi", "countryId": 7 },
        { "id": 267, "name": "Yerevan", "countryId": 7 },
        { "id": 268, "name": "Gyumri", "countryId": 7 },
        { "id": 269, "name": "Vanadzor", "countryId": 7 },
        { "id": 270, "name": "Hrazdan", "countryId": 7 },
        { "id": 271, "name": "Beirut", "countryId": 69 },
        { "id": 272, "name": "Tripoli", "countryId": 69 },
        { "id": 273, "name": "Sidon", "countryId": 69 },
        { "id": 274, "name": "Tyre", "countryId": 69 },
        { "id": 275, "name": "Damascus", "countryId": 97 },
        { "id": 276, "name": "Aleppo", "countryId": 97 },
        { "id": 277, "name": "Homs", "countryId": 97 },
        { "id": 278, "name": "Latakia", "countryId": 97 },
        { "id": 279, "name": "Amman", "countryId": 64 },
        { "id": 280, "name": "Zarqa", "countryId": 64 },
        { "id": 281, "name": "Irbid", "countryId": 64 },
        { "id": 282, "name": "Aqaba", "countryId": 64 },
        { "id": 283, "name": "Baghdad", "countryId": 59 },
        { "id": 284, "name": "Basra", "countryId": 59 },
        { "id": 285, "name": "Mosul", "countryId": 59 },
        { "id": 286, "name": "Erbil", "countryId": 59 },
        { "id": 287, "name": "San'a", "countryId": 106 },
        { "id": 288, "name": "Aden", "countryId": 106 },
        { "id": 289, "name": "Taiz", "countryId": 106 },
        { "id": 290, "name": "Al Hudaydah", "countryId": 106 },
        { "id": 291, "name": "Riyadh", "countryId": 91 },
        { "id": 292, "name": "Jeddah", "countryId": 91 },
        { "id": 293, "name": "Mecca", "countryId": 91 },
        { "id": 294, "name": "Medina", "countryId": 91 },
        { "id": 295, "name": "Doha", "countryId": 88 },
        { "id": 296, "name": "Al Wakrah", "countryId": 88 },
        { "id": 297, "name": "Al Khor", "countryId": 88 },
        { "id": 298, "name": "Madinat ash Shamal", "countryId": 88 },
        { "id": 299, "name": "Manama", "countryId": 12 },
        { "id": 300, "name": "Muharraq", "countryId": 12 },
        { "id": 301, "name": "Riffa", "countryId": 12 },
        { "id": 302, "name": "Hamad Town", "countryId": 12 },
        { "id": 303, "name": "Nicosia", "countryId": 41 },
        { "id": 304, "name": "Limassol", "countryId": 41 },
        { "id": 305, "name": "Larnaca", "countryId": 41 },
        { "id": 306, "name": "Paphos", "countryId": 41 },
        { "id": 307, "name": "Valletta", "countryId": 102 },
        { "id": 308, "name": "Sliema", "countryId": 102 },
        { "id": 309, "name": "Birkirkara", "countryId": 102 },
        { "id": 310, "name": "Mosta", "countryId": 102 },
        { "id": 311, "name": "San Francisco", "countryId": 103 },
        { "id": 312, "name": "Boston", "countryId": 103 },
        { "id": 313, "name": "Seattle", "countryId": 103 },
        { "id": 314, "name": "Toronto", "countryId": 30 },
        { "id": 315, "name": "Vancouver", "countryId": 30 },
        { "id": 316, "name": "Montreal", "countryId": 30 },
        { "id": 317, "name": "Buenos Aires", "countryId": 6 },
        { "id": 318, "name": "Rio de Janeiro", "countryId": 23 },
        { "id": 319, "name": "Cape Town", "countryId": 92 },
        { "id": 320, "name": "Ho Chi Minh City", "countryId": 105 },
        { "id": 321, "name": "Shanghai", "countryId": 34 },
        { "id": 322, "name": "Jakarta", "countryId": 57 },
        { "id": 323, "name": "Mexico City", "countryId": 74 },
        { "id": 324, "name": "Cologne", "countryId": 54 },
        { "id": 325, "name": "Düsseldorf", "countryId": 54 },
        { "id": 326, "name": "Stuttgart", "countryId": 54 },
        { "id": 327, "name": "Dresden", "countryId": 54 },
        { "id": 328, "name": "Leipzig", "countryId": 54 },
        { "id": 329, "name": "Nuremberg", "countryId": 54 },
        { "id": 330, "name": "Novosibirsk", "countryId": 90 },
        { "id": 331, "name": "Yekaterinburg", "countryId": 90 },
        { "id": 332, "name": "Rostov-on-Don", "countryId": 90 },
        { "id": 333, "name": "Innsbruck", "countryId": 9 },
        { "id": 334, "name": "Bern", "countryId": 96 },
        { "id": 335, "name": "Nice", "countryId": 53 }
    ]
    countriesData = [
        { "id": 1, "name": "Afghanistan" },
        { "id": 2, "name": "Albania" },
        { "id": 3, "name": "Algeria" },
        { "id": 4, "name": "Andorra" },
        { "id": 5, "name": "Angola" },
        { "id": 6, "name": "Argentina" },
        { "id": 7, "name": "Armenia" },
        { "id": 8, "name": "Australia" },
        { "id": 9, "name": "Austria" },
        { "id": 10, "name": "Azerbaijan" },
        { "id": 11, "name": "Bahamas" },
        { "id": 12, "name": "Bahrain" },
        { "id": 13, "name": "Bangladesh" },
        { "id": 14, "name": "Barbados" },
        { "id": 15, "name": "Belarus" },
        { "id": 16, "name": "Belgium" },
        { "id": 17, "name": "Belize" },
        { "id": 18, "name": "Benin" },
        { "id": 19, "name": "Bhutan" },
        { "id": 20, "name": "Bolivia" },
        { "id": 21, "name": "Bosnia and Herzegovina" },
        { "id": 22, "name": "Botswana" },
        { "id": 23, "name": "Brazil" },
        { "id": 24, "name": "Brunei" },
        { "id": 25, "name": "Bulgaria" },
        { "id": 26, "name": "Burkina Faso" },
        { "id": 27, "name": "Burundi" },
        { "id": 28, "name": "Cambodia" },
        { "id": 29, "name": "Cameroon" },
        { "id": 30, "name": "Canada" },
        { "id": 31, "name": "Central African Republic" },
        { "id": 32, "name": "Chad" },
        { "id": 33, "name": "Chile" },
        { "id": 34, "name": "China" },
        { "id": 35, "name": "Colombia" },
        { "id": 36, "name": "Comoros" },
        { "id": 37, "name": "Congo" },
        { "id": 38, "name": "Costa Rica" },
        { "id": 39, "name": "Croatia" },
        { "id": 40, "name": "Cuba" },
        { "id": 41, "name": "Cyprus" },
        { "id": 42, "name": "Czech Republic" },
        { "id": 43, "name": "Denmark" },
        { "id": 44, "name": "Djibouti" },
        { "id": 45, "name": "Dominican Republic" },
        { "id": 46, "name": "Ecuador" },
        { "id": 47, "name": "Egypt" },
        { "id": 48, "name": "El Salvador" },
        { "id": 49, "name": "Estonia" },
        { "id": 50, "name": "Ethiopia" },
        { "id": 51, "name": "Fiji" },
        { "id": 52, "name": "Finland" },
        { "id": 53, "name": "France" },
        { "id": 54, "name": "Germany" },
        { "id": 55, "name": "Greece" },
        { "id": 56, "name": "India" },
        { "id": 57, "name": "Indonesia" },
        { "id": 58, "name": "Iran" },
        { "id": 59, "name": "Iraq" },
        { "id": 60, "name": "Ireland" },
        { "id": 61, "name": "Israel" },
        { "id": 62, "name": "Italy" },
        { "id": 63, "name": "Japan" },
        { "id": 64, "name": "Jordan" },
        { "id": 65, "name": "Kazakhstan" },
        { "id": 66, "name": "Kenya" },
        { "id": 67, "name": "Kuwait" },
        { "id": 68, "name": "Latvia" },
        { "id": 69, "name": "Lebanon" },
        { "id": 70, "name": "Libya" },
        { "id": 71, "name": "Lithuania" },
        { "id": 72, "name": "Luxembourg" },
        { "id": 73, "name": "Malaysia" },
        { "id": 74, "name": "Mexico" },
        { "id": 75, "name": "Morocco" },
        { "id": 76, "name": "Netherlands" },
        { "id": 77, "name": "New Zealand" },
        { "id": 78, "name": "Nigeria" },
        { "id": 79, "name": "North Korea" },
        { "id": 80, "name": "Norway" },
        { "id": 81, "name": "Oman" },
        { "id": 82, "name": "Pakistan" },
        { "id": 83, "name": "Palestine" },
        { "id": 84, "name": "Peru" },
        { "id": 85, "name": "Philippines" },
        { "id": 86, "name": "Poland" },
        { "id": 87, "name": "Portugal" },
        { "id": 88, "name": "Qatar" },
        { "id": 89, "name": "Romania" },
        { "id": 90, "name": "Russia" },
        { "id": 91, "name": "Saudi Arabia" },
        { "id": 92, "name": "South Africa" },
        { "id": 93, "name": "South Korea" },
        { "id": 94, "name": "Spain" },
        { "id": 95, "name": "Sweden" },
        { "id": 96, "name": "Switzerland" },
        { "id": 97, "name": "Syria" },
        { "id": 98, "name": "Thailand" },
        { "id": 99, "name": "Turkey" },
        { "id": 100, "name": "Ukraine" },
        { "id": 101, "name": "United Arab Emirates" },
        { "id": 102, "name": "United Kingdom" },
        { "id": 103, "name": "United States" },
        { "id": 104, "name": "Venezuela" },
        { "id": 105, "name": "Vietnam" },
        { "id": 106, "name": "Yemen" }
    ]
}