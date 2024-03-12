import React, {  useState } from 'react'


export const productContextData = React.createContext()
function Productcontext({ children }) {
    const [product, Setproduct] = useState([
        {
            name: "Kashmir Saffron",
            img: "https://c1.wallpaperflare.com/preview/768/879/589/saffron-red-real-real-saffron.jpg",
            price: "1916",
            oprice: "1341",
            quality:"Grade A++",
            origin:"Kashmir",
            gram:"5.0",
            option : "Add cart"

        },
        {
            name: "Spain Saffron",
            img: "https://w0.peakpx.com/wallpaper/670/97/HD-wallpaper-saffron-crocus-freshness-flowers-beautiful-spring.jpg",
            price: "2700",
            oprice: "2025",
            quality:"Grade A++",
            origin:"Spain",
            gram:"5.0 ",
            option : "Add cart"

        },
        {
            name: "Iran Saffron",
            img: "https://cdn.shopify.com/s/files/1/0269/8258/0311/files/Untitled_900_x_600_px_2_1_480x480.png?v=1679477361",
            price: "2700",
            oprice: "2025",
            quality:"Grade A++",
            origin:"Iran",
            gram:"5.0 GRAM",
            option : "Add cart"

        },        {
            name: "Kashmir Saffron",
            img: "https://c1.wallpaperflare.com/preview/768/879/589/saffron-red-real-real-saffron.jpg",
            price: "1916",
            oprice: "1341",
            quality:"Grade A++",
            origin:"Kashmir",
            gram:"2.0 GRAM",
            option : "Add cart"

        },        {
            name: "Spain Saffron",
            img: "https://w0.peakpx.com/wallpaper/670/97/HD-wallpaper-saffron-crocus-freshness-flowers-beautiful-spring.jpg",
            price: "2700",
            oprice: "2025",
            quality:"Grade A++",
            origin:"Spain",
            gram:" 2.0 GRAM",
            option : "Add cart"

        }]
    )
    return <>
        <productContextData.Provider value={{ product, Setproduct }}>{children}</productContextData.Provider>
    </>
}

export default Productcontext