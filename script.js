// Wait until HTML loads
document.addEventListener("DOMContentLoaded", function () {

    // Travel Packages Data
    const packages = [
        {
            name: "Goa Getaway",
            days: "3 Nights / 4 Days",
            price: 4999,
            img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        },
        {
            name: "Manali Adventure",
            days: "4 Nights / 5 Days",
            price: 6999,
            img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
        },
        {
            name: "Kerala Backwaters",
            days: "2 Nights / 3 Days",
            price: 3499,
            img: "/images/kerala image.jpg"
        },
        {
            name: "Jaipur Heritage",
            days: "3 Nights / 4 Days",
            price: 5999,
            img: "https://images.unsplash.com/photo-1548013146-72479768bada"
        }
    ];

    // Get Elements
    const list = document.getElementById("packages");
    const search = document.getElementById("search");
    const searchBtn = document.getElementById("searchBtn");

    // Render Function
    function render(data) {
        list.innerHTML = "";

        data.forEach(pkg => {
            list.innerHTML += `
                <div class="card">
                    <img src="${pkg.img}" alt="${pkg.name}">
                    <div class="card-content">
                        <h3>${pkg.name}</h3>
                        <p>${pkg.days}</p>
                        <p><strong>₹${pkg.price}</strong></p>
                        <button onclick="bookNow('${pkg.name}', ${pkg.price})">
                            Book Now
                        </button>
                    </div>
                </div>
            `;
        });
    }

    // Search Function
    function filterPackages() {
        const value = search.value.toLowerCase();

        const filtered = packages.filter(function (pkg) {
            return pkg.name.toLowerCase().includes(value);
        });

        render(filtered);
    }

    // Button click
    if (searchBtn) {
        searchBtn.addEventListener("click", filterPackages);
    }

    // Enter key
    if (search) {
        search.addEventListener("keyup", filterPackages);
    }

    // Initial Load
    render(packages);

});

// Book Now Function (Outside DOMContentLoaded)
function bookNow(packageName, price) {
    alert(`Package: ${packageName}
Price: ₹${price}
Booking Successful!`);
}