
import Navbar from "../components/organisms/Navbar";
import Hero from "../components/organisms/Hero";
import FeaturedHomes from "../components/organisms/FeaturedHomes";
import Highlights from "../components/organisms/Highlights";
import About from "../components/organisms/About";
import Services from "../components/organisms/Services";
import Testimonials from "../components/organisms/Testimonials";
import Agents from "../components/organisms/Agents";
import Newsletter from "../components/organisms/Newsletter";
import Footer from "../components/organisms/Footer";

function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Highlights />
            <FeaturedHomes />
            <About />
            <Services />
            <Agents />
            <Testimonials />
            <Newsletter />
            <Footer />
        </main>
    );
}

export default Home;
