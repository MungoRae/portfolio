import Head from "next/head";
import Me from "../sections/1_Me";
import PortfolioAppBar from "../components/PortfolioAppBar";
import Portfolio from "../sections/2_Portfolio";
import AlwaysLearning from "../sections/3_AlwaysLearning";
import About from "../sections/4_About";
import Contact from "../sections/5_ContactUs";
import Footer from "../sections/6_Footer";
import Copyright from "../sections/7_Copyright";
import DetailPages from "../sections/0_DetailPages";
import { useState } from "react";

const items = [
    {
        id: "clydesdale",
        title: "Clydesdale Bank",
        summary: "Financial app for customers of the bank",
        description: [
            "Led the Android team at Clydesdale bank while developing features myself such as the future clearing model, recurring payments, and savings pots.",
            "As the lead developer I organised and ran meetings to improve team cohesion across feature teams and keep stakeholders up to date on progress.",
        ],
        image: "/img/portfolio/clydesdale.png",
        detailImages: [],
    },
    {
        id: "healthcare",
        title: "Healthcare",
        summary:
            "Built apps around helping to learn more about conditions including autism and MS",
        description: [
            "I engineered parts of healthcare apps by building an audio module to allow autistic children to discuss their day, and sending sensor data to a wearable device with a binary channel.",
            "Worked to improve a large legacy code base by converting it to kotlin, adding Rx, MVVM, Dagger and many unit tests.",
        ],
        image: "/img/portfolio/floodlight.png",
        detailImages: [],
    },
    {
        id: "debenhams",
        title: "Debenhams",
        summary: "Department store app containing over 2000 products",
        description: [
            "The Debenhams retail app was very complex due to its large number of products on sale. The app had to successfully navigate the user through over 2000 products of various categories.",
            "The app allows customers to browse their large range of products and then buy any items they liked using an in app checkout and payment process. I built the payment process against their payment API and worked on displaying correct and well laid out stores information for each of the 240 Debenhams stores.",
        ],
        image: "/img/portfolio/debenhams.jpg",
        detailImages: [
            {
                src: "/img/portfolio/detail/debenhams_home.jpg",
                alt: "Debenhams home page",
            },
            {
                src: "/img/portfolio/detail/debenhams_product.jpg",
                alt: "Debenhams product page",
            },
        ],
    },
    {
        id: "mothercare",
        title: "Mothercare",
        summary: "Retail app for mothers and babies",
        description: [
            "Mothercare's app has a much bigger feature set than Debenhams. It focused a lot on extra features that allowed the user to record tunes for their child, save images, watch information videos and play white noise.",
            "All these features made it quite a long project with a team of three people. I built the entire checkout, main navigation, features wheel and the home screen. I found that Android is very hard to do complex things with if you have to target an SDK before 14, but I managed to find solutions for everything and it was a great success in the end.",
            "Mothercare was the first app I had worked on from beginning to end and I took a lead role in building it and managing the times and objectives of deadlines which was very cool.",
        ],
        image: "/img/portfolio/mothercare_2.png",
        detailImages: [
            {
                src: "/img/portfolio/detail/mothercare_shop.png",
                alt: "Mothercare shop page",
            },
            {
                src: "/img/portfolio/detail/mothercare_wheel.png",
                alt: "A dynamic wheel I made based off the BBC app",
            },
        ],
    },
    {
        id: "desana",
        title: "Desana",
        summary: "Tool for finding co-working spaces and booking them",
        description: [
            "Worked freelance for a friend to build up the Android app for his startup. Built an app from scratch using Kotlin, MVVM, gRPC, material design components, and Dagger.",
        ],
        image: "/img/portfolio/desanalogo.png",
        detailImages: [],
    },
    {
        id: "wts",
        title: "Welcome to Scotland",
        summary: "A tourism app for Scotland",
        description: [
            "I have built a tourism app for Scotland covering all the accommodation, events, restaurants, activities and places to go in the country. Information contains the details, location, distance, reviews and booking availability.",
            "This app was complex to build given the amount of data being at about 20,000 attractions. I switched the app from using ActiveAndroid to Realm and learned a lot about optimising data for limited resources on mobile.",
        ],
        image: "/img/portfolio/wts_3.png",
        detailImages: [
            {
                src: "/img/portfolio/detail/wts_accommodation.jpg",
                alt: "Accomodation page of Welcome to Scotland",
            },
            {
                src: "/img/portfolio/detail/wts_map.jpg",
                alt: "Map page",
            },
        ],
    },
];

export default function Home() {
    const [modal, setModal] = useState(null);

    const onPortfolioItemClicked = (id) => {
        setModal(id);
    };

    return (
        <div>
            <Head>
                <title>Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <PortfolioAppBar
                menuItems={["Portfolio", "Always Learning", "About", "Contact"]}
            />
            <Me />
            <Portfolio
                items={items}
                id="portfolio"
                onPortfolioItemClicked={(id) => onPortfolioItemClicked(id)}
            />
            <AlwaysLearning id="alwayslearning" />
            <About id="about" />
            <Contact id="contact" />
            <Footer />
            <Copyright />
            <DetailPages
                items={items}
                current={modal}
                onClose={() => setModal(null)}
            />
        </div>
    );
}
