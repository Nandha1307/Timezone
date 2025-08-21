// ====== Cluster Data ======
const clusters = [
    { name: "NAM Cluster", countries: [
        { name: "United States of America", tz: "America/New_York", flag: "us" },
        { name: "Canada", tz: "America/Toronto", flag: "ca" }
    ]},
  
   { name: "Mexico & CAM Cluster", countries: [
       { name: "Mexico", tz: "America/Mexico_City", flag: "mx" },
       { name: "Guatemala", tz: "America/Guatemala", flag: "gt" },
       { name: "Honduras", tz: "America/Tegucigalpa", flag: "hn" },
       { name: "El Salvador", tz: "America/El_Salvador", flag: "sv" },
       { name: "Nicaragua", tz: "America/Managua", flag: "ni" },
       { name: "Panama", tz: "America/Panama", flag: "pa" }
   ]},
    { name: "DACH Region", countries: [
        { name: "Germany", tz: "Europe/Berlin", flag: "de" },
        { name: "Austria", tz: "Europe/Vienna", flag: "at" },
        { name: "Switzerland", tz: "Europe/Zurich", flag: "ch" }
    ]},
    { name: "Central Asia(Sub-Cluster)", countries: [
        { name: "Kazakhstan", tz: "Asia/Almaty", flag: "kz" },
        { name: "Kyrgyzstan", tz: "Asia/Bishkek", flag: "kg" },
        { name: "Uzbekistan", tz: "Asia/Tashkent", flag: "uz" }
    ]},
    { name: "Belgium/Luxembourg", countries: [
    { name: "Belgium", tz: "Europe/Brussels", flag: "be" },
    { name: "Netherlands", tz: "Europe/Amsterdam", flag: "nl" },
    { name: "Luxembourg", tz: "Europe/Luxembourg", flag: "lu" }
]},
    { name: "Gulf Cluster", countries: [
        { name: "Kuwait", tz: "Asia/Kuwait", flag: "kw" },
        { name: "Oman", tz: "Asia/Muscat", flag: "om" },
        { name: "Qatar", tz: "Asia/Qatar", flag: "qa" },
        { name: "UAE", tz: "Asia/Dubai", flag: "ae" }
    ]},
    { name: "Hongkong & Macao", countries: [
        { name: "Hongkong", tz: "Asia/Hong_Kong", flag: "hk" },
        { name: "Macao", tz: "Asia/Macau", flag: "mo" }
    ]},
    { name: "Iberia Region", countries: [
        { name: "Andorra", tz: "Europe/Andorra", flag: "ad" },
        { name: "Gibraltar", tz: "Europe/Gibraltar", flag: "gi" },
        { name: "Spain", tz: "Europe/Madrid", flag: "es" },
        { name: "Portugal", tz: "Europe/Lisbon", flag: "pt" }
    ]},
    {name: "Brazil", countries: 
        [{  name: "Brazil", tz: "America/Sao_Paulo", flag: "br"}
    ]},
    { name: "India", countries: [
        { name: "India", tz: "Asia/Kolkata", flag: "in" }
    ]},
    
    { name: "NEA Cluster", countries: [
        { name: "Egypt", tz: "Africa/Cairo", flag: "eg" },
        { name: "Iraq", tz: "Asia/Baghdad", flag: "iq" },
        { name: "Jordan", tz: "Asia/Amman", flag: "jo" },
        { name: "Lebanon", tz: "Asia/Beirut", flag: "lb" },
        { name: "Libya", tz: "Africa/Tripoli", flag: "ly" },
        { name: "Sudan", tz: "Africa/Khartoum", flag: "sd" },
        { name: "Syria", tz: "Asia/Damascus", flag: "sy" }
    ]},
   
    { name: "Pacific Cluster", countries: [
        { name: "Australia", tz: "Australia/Sydney", flag: "au" },
        { name: "Papua New Guinea", tz: "Pacific/Port_Moresby", flag: "pg" },
        { name: "New Zealand", tz: "Pacific/Auckland", flag: "nz" }
    ]},
    { name: "SAM Cluster", countries: [
        { name: "Argentina", tz: "America/Argentina/Buenos_Aires", flag: "ar" },
        { name: "Bolivia", tz: "America/La_Paz", flag: "bo" },
        { name: "Chile", tz: "America/Santiago", flag: "cl" },
        { name: "Colombia", tz: "America/Bogota", flag: "co" },
        { name: "Ecuador", tz: "America/Guayaquil", flag: "ec" },
        { name: "Paraguay", tz: "America/Asuncion", flag: "py" },
        { name: "Peru", tz: "America/Lima", flag: "pe" },
        { name: "Uruguay", tz: "America/Montevideo", flag: "uy" },
        { name: "Venezuela", tz: "America/Caracas", flag: "ve" }
    ]},
    { name: "Saudi Arabia", countries: [
        { name: "Saudi Arabia", tz: "Asia/Riyadh", flag: "sa" },
        { name: "Bahrain", tz: "Asia/Bahrain", flag: "bh" }
    ]},

    { name: "France & Italy Cluster", countries: [
        { name: "Italy", tz: "Europe/Rome", flag: "it" },
        { name: "San Marino", tz: "Europe/San_Marino", flag: "sm" },
        { name: "Vatican City", tz: "Europe/Vatican", flag: "va" },
        { name: "France", tz: "Europe/Paris", flag: "fr" }
    ]},
    { name: "Nordics", countries: [
        { name: "Denmark", tz: "Europe/Copenhagen", flag: "dk" },
        { name: "Finland", tz: "Europe/Helsinki", flag: "fi" },
        { name: "Iceland", tz: "Atlantic/Reykjavik", flag: "is" },
        { name: "Norway", tz: "Europe/Oslo", flag: "no" },
        { name: "Sweden", tz: "Europe/Stockholm", flag: "se" }
    ]},
    { name: "Baltics", countries: [
        { name: "Estonia", tz: "Europe/Tallinn", flag: "ee" },
        { name: "Latvia", tz: "Europe/Riga", flag: "lv" },
        { name: "Lithuania", tz: "Europe/Vilnius", flag: "lt" }
    ]},
    { name: "SEE Region", countries: [
        { name: "Bulgaria", tz: "Europe/Sofia", flag: "bg" },
        { name: "Greece", tz: "Europe/Athens", flag: "gr" },
        { name: "Hungary", tz: "Europe/Budapest", flag: "hu" },
        { name: "Romania", tz: "Europe/Bucharest", flag: "ro" }
    ]},
    { name: "UKI", countries: [
        { name: "United Kingdom", tz: "Europe/London", flag: "gb" },
        { name: "Isle of Man", tz: "Europe/Isle_of_Man", flag: "im" },
        { name: "Ireland", tz: "Europe/Dublin", flag: "ie" }
    ]},
    { name: "Indonesia, Thailand, Vietnam", countries: [
        { name: "Indonesia", tz: "Asia/Jakarta", flag: "id" },
        { name: "Thailand", tz: "Asia/Bangkok", flag: "th" },
        { name: "Vietnam", tz: "Asia/Ho_Chi_Minh", flag: "vn" }
    ]},
    { name: "East Asian Countries", countries: [
        { name: "Malaysia", tz: "Asia/Kuala_Lumpur", flag: "my" },
        { name: "Singapore", tz: "Asia/Singapore", flag: "sg" },
        { name: "Taiwan", tz: "Asia/Taipei", flag: "tw" },
        { name: "Philippines", tz: "Asia/Manila", flag: "ph" }
        
    ]},

    { name: "Japan & Korea", countries: [
        { name: "Japan", tz: "Asia/Tokyo", flag: "jp" },
        { name: "South Korea", tz: "Asia/Seoul", flag: "kr" }
    ]},
];

       // ====== Time Zone Normalization ======
function normalizeTZ(tz) {
    const map = {
        // Previous mappings
        "Europe/Vienna": "Europe/Berlin",
        "Europe/Zurich": "Europe/Berlin",
        "Asia/Macau": "Asia/Hong_Kong",
        "Asia/Kuwait": "Asia/Dubai",
        "Asia/Muscat": "Asia/Dubai",
        "Asia/Qatar": "Asia/Dubai",
        "Europe/San_Marino": "Europe/Rome",
        "Europe/Vatican": "Europe/Rome",
        "Europe/Isle_of_Man": "Europe/London",
        "Europe/Copenhagen": "Europe/Stockholm",
        "Europe/Oslo": "Europe/Stockholm",
        "America/Tegucigalpa": "America/Guatemala",
        "America/El_Salvador": "America/Guatemala",
        "America/Managua": "America/Guatemala",
        "America/Panama": "America/Panama",

        // USA & Canada
        "America/Toronto": "America/New_York",


        // Kazakhstan & Uzbekistan
        "Asia/Tashkent": "Asia/Almaty",

        // Belgium, Netherlands, Luxembourg (keep in Brussels zone)
        "Europe/Amsterdam" : "Europe/Brussels",
        "Europe/Luxembourg": "Europe/Brussels",

        // Andorra, Gibraltar, Spain
        "Europe/Andorra": "Europe/Madrid",
        "Europe/Gibraltar": "Europe/Madrid",

        // Egypt, Jordan, Lebanon, Syria, Iraq
        "Asia/Amman": "Africa/Cairo",
        "Asia/Beirut": "Africa/Cairo",
        "Asia/Damascus": "Africa/Cairo",
        "Asia/Baghdad": "Africa/Cairo",

        // Sudan & Libya
        "Africa/Khartoum": "Africa/Tripoli",

        // Australia & Papua New Guinea
        "Pacific/Port_Moresby": "Australia/Sydney",

        // Argentina, Paraguay, Uruguay
        "America/Asuncion": "America/Argentina/Buenos_Aires",
        "America/Montevideo": "America/Argentina/Buenos_Aires",

        // Chile, Bolivia, Venezuela
        "America/La_Paz": "America/Santiago",
        "America/Caracas": "America/Santiago",

        // Peru, Ecuador, Colombia
        "America/Guayaquil": "America/Lima",
        "America/Bogota": "America/Lima",

        // Saudi Arabia & Bahrain
        "Asia/Bahrain": "Asia/Riyadh",

        // All Baltics
        "Europe/Riga": "Europe/Tallinn",
        "Europe/Vilnius": "Europe/Tallinn",

        // Bulgaria, Greece, Romania
        "Europe/Athens": "Europe/Sofia",
        "Europe/Bucharest": "Europe/Sofia",

        // Ireland, UK, Isle of Man
        "Europe/Dublin": "Europe/London",
        "Europe/Isle_of_Man": "Europe/London",

        // ✅ New merges
        // Indonesia, Thailand, Vietnam → normalize to Bangkok
        "Asia/Jakarta": "Asia/Bangkok",
        "Asia/Ho_Chi_Minh": "Asia/Ho_Chi_Minh",

        // Malaysia, Singapore, Taiwan, Philippines → normalize to Singapore
        "Asia/Kuala_Lumpur": "Asia/Singapore",
        "Asia/Manila": "Asia/Taipei",

        // Japan & South Korea → normalize to Tokyo
        "Asia/Seoul": "Asia/Tokyo"
    };
    return map[tz] || tz;
}



// ====== Rendering Logic ======
function updateTimes() {
    const grid = document.getElementById("timeGrid");
    grid.innerHTML = "";

    const indiaOffset = getOffsetMinutes("Asia/Kolkata");

    // Sort clusters by time difference from India
    const sortedClusters = [...clusters].sort((a, b) => {
        const aOffset = getOffsetMinutes(normalizeTZ(a.countries[0].tz));
        const bOffset = getOffsetMinutes(normalizeTZ(b.countries[0].tz));
        return (aOffset - indiaOffset) - (bOffset - indiaOffset);
    });

    sortedClusters.forEach(cluster => {
        const grouped = {};

        cluster.countries.forEach(c => {
            const tz = normalizeTZ(c.tz);
            if (!grouped[tz]) grouped[tz] = { tz, countries: [] };
            grouped[tz].countries.push(c);
        });

        let countryHTML = "";

        Object.values(grouped).forEach(group => {
            // combined country name
            let namesHTML;
            if (group.countries.length === 2) {
                namesHTML = `${group.countries[0].name} & ${group.countries[1].name}`;
            } else {
                namesHTML = group.countries.map(c => c.name).join(", ");
            }

            // time and date for the group's tz
           const now = new Date();
           const localTime = new Date(now.toLocaleString("en-US", { timeZone: group.tz }));

            // Extract hours & weekday
           const hour24 = localTime.getHours();  // 0–23 format
           const day = localTime.getDay();       // 0=Sun, 1=Mon ... 6=Sat

            // Check if weekday (Mon–Fri)
            // --- Weekday Logic ---
            // Default Mon–Fri; override to Sun–Thu for Saudi Arabia & Gulf Cluster
            const cname = (cluster.name || "").toLowerCase();
            const isSaudiOrGulf = cname === "saudi arabia" || cname === "gulf cluster";
            const isWeekday = isSaudiOrGulf ? (day >= 0 && day <= 4) : (day >= 1 && day <= 5);


            // Check working hours: 8 AM – 4:59 PM
            const isWorkingHour = hour24 >= 8 && hour24 < 17;

            let timeClass;
            if (!isWeekday) {
            // Weekend → always red
                timeClass = "time red-time";
            } else {
              // Weekday → red only if outside working hours
             timeClass = isWorkingHour ? "time" : "time red-time";
            }
    
            const time = localTime.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true
            });

            const date = new Date().toLocaleDateString("en-US", {
                timeZone: group.tz,
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric"
            });

            
            const dstHTML = isDST(group.tz)
                ? `<span class="dst-label">DST</span>`
                 : "";


            // UTC offset (minutes) — robust
            const offsetMin = getOffsetMinutes(group.tz); // already rounded in helper
            const sign = offsetMin >= 0 ? "+" : "-";
            const absMin = Math.abs(offsetMin);
            const hours = String(Math.floor(absMin / 60)).padStart(2, "0");
            const mins = String(absMin % 60).padStart(2, "0");
            const utcString = `UTC${sign}${hours}:${mins}`;

            const flagsHTML = group.countries.map(c =>
                `<img class="flag" src="https://flagcdn.com/w40/${c.flag}.png" alt="${c.name}" title="${c.name}">`
            ).join(" ");
            
            const hour = new Date().toLocaleString("en-US", { 
    timeZone: group.tz, 
    hour: "2-digit", 
    hour12: false 
});
const isDay = hour >= 6 && hour < 18;  // 6 AM – 6 PM is "day"

countryHTML += `
    <div class="sub-card ${isDay ? 'day-card' : 'night-card'}">
        
        <div class="flag-group">${flagsHTML}</div>
        <div class="country-name">${namesHTML}</div>
        <div class="${timeClass}">${time}${dstHTML}</div>
        <div class="utc-offset">${utcString}</div>
        <div class="date">${date}</div>
    </div>
`;

        });
        const isIndia = cluster.name.toLowerCase() === "india";
        grid.innerHTML += `
    <div class="card${isIndia ? ' india' : ''}">
        <div class="cluster">${cluster.name}</div>
        <div class="sub-grid">${countryHTML}</div>
    </div>
`;
        });
}



// Helper: robustly compute offset in minutes for any IANA timezone
function getOffsetMinutes(tz) {
    const now = new Date();

    // Use Intl to get the exact wall-clock parts in that timezone
    const dtf = new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    const parts = dtf.formatToParts(now);
    const map = {};
    parts.forEach(p => { if (p.type !== 'literal') map[p.type] = p.value; });

    const y = Number(map.year);
    const mo = Number(map.month); // 1-12
    const d = Number(map.day);
    const hh = Number(map.hour);
    const mm = Number(map.minute);
    const ss = Number(map.second);

    // UTC milliseconds corresponding to the wall-clock in that timezone
    const tzWallUtc = Date.UTC(y, mo - 1, d, hh, mm, ss);

    // now in UTC milliseconds
    const nowUtc = now.getTime();

    // offset in minutes (tz wall-clock expressed as UTC - actual UTC)
    const offsetMin = Math.round((tzWallUtc - nowUtc) / 60000);

    return offsetMin; // integer minutes, positive means ahead of UTC
}

function isDST(tz) {
  const now = new Date();
  const stdOffset = getOffsetMinutesForDate(tz, new Date(now.getFullYear(), 0, 1));
  const curOffset = getOffsetMinutesForDate(tz, now);
  return curOffset !== stdOffset;
}

function getOffsetMinutesForDate(tz, date) {
  const dtf = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false
  });
  const parts = dtf.formatToParts(date);
  const map = {};
  parts.forEach(p => { if (p.type !== 'literal') map[p.type] = p.value; });
  const y = Number(map.year);
  const mo = Number(map.month);
  const d = Number(map.day);
  const hh = Number(map.hour);
  const mm = Number(map.minute);
  const ss = Number(map.second);
  const tzWallUtc = Date.UTC(y, mo - 1, d, hh, mm, ss);
  const utc = date.getTime();
  return Math.round((tzWallUtc - utc) / 60000);
}

setInterval(updateTimes, 10000);
updateTimes();



