import Header from './Header.js';
import Banner from './Banner.js';
import Values from './Values.js';
import Technologies from './Technologies.js';
import Team from './Team.js';
// import Project from './Project.js';
import Testimonials from './Testimonials.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import Login from './admin/Login.js';
import Admin from './admin/Admin.js';
import {BrowserRouter , Switch , Route} from 'react-router-dom';
import BlogForm from './admin/BlogForm.js';
import Blog from './Blog.js';
import WhyChooseUs from './WhyChooseUs';
import MetaTags from 'react-meta-tags';
import MoveToTop from './MoveToTop';
import img from './assets/images/favicon.png'; 
import CaseStudy from './CaseStudy.js';
import CaseStudySingle from './casestudy/CaseStudySingle.js';
import CaseStudies from './casestudy/CaseStudies.js';
import NotFound from './NotFound.js';

require('dotenv').config();

function App() {
  return (
    <div className="App">
      <MetaTags>
        <meta name="description" content="DIGITAL SOLUTION PROVIDER -Transforming the way businesses work, DIGITALLY! Our services: Product management consulting, mobile apps, web apps, hybrid apps, website, UI/UX, cloud solutions, digital partnership" />
        <meta name="robots" content="index,follow"/>
        <link rel="canonical" href={window.location.href} />
        <meta name="og:title" content="3E Digital Solutions" />
        <meta name="og:description" content="DIGITAL SOLUTION PROVIDER -Transforming the way businesses work, DIGITALLY! Our services: Product management consulting, mobile apps, web apps, hybrid apps, website, UI/UX, cloud solutions, digital partnership" />
        <meta name="og:type" content="website" />
        <meta name="og:image" content={img} />
        <meta name="og:url" content={window.location.href} />
        <meta name="og:site_name" content="3E Digital Solutions" />
      </MetaTags>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header/>
            <Banner />
            <WhyChooseUs />
            <Values/>
            <Technologies/>
            <Team/>
            {/* <Project/> */}
            <CaseStudy/>
            <Testimonials/>
            <Contact/>
            <Footer/>
            <MoveToTop />
          </Route>
          <Route exact path="/casestudies">
            <Header newClass="casestudies__header" />
            <CaseStudies/>
            <Footer/>
          </Route>
          <Route path="/casestudies/:casestudyId">
            <CaseStudySingle/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/admin">
            <Header newClass="new__blog__header"/>
            <BlogForm/>
            <Admin/>
            <Footer/>
          </Route>
          <Route exact path="/blogs">
            <Header newClass="new__blog__header"/>
            <Blog/>
            <Footer/>
          </Route>
          <Route path="/blog/:blogId">
            <Header newClass="new__blog__header"/>
            <Blog/>
            <Footer/>
          </Route>
          <Route>
            <NotFound/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;