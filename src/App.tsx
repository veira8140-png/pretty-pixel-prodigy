import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import POSPage from "./pages/POS";
import ETIMSPage from "./pages/ETIMS";
import AgentsPage from "./pages/Agents";
import CloudPage from "./pages/Cloud";
import WebsitesPage from "./pages/Websites";
import UseCases from "./pages/UseCases";
import OurStory from "./pages/OurStory";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* POS Routes */}
        <Route path="/pos" element={<POSPage />} />
        <Route path="/pos/pricing" element={<POSPage variant="pricing" />} />
        <Route path="/pos/free-pos" element={<POSPage variant="free" />} />
        <Route path="/pos/etims" element={<POSPage variant="compliance" />} />
        <Route path="/pos/:city" element={<POSPage />} />
        <Route path="/pos/:city/:industry" element={<POSPage />} />
        <Route path="/pos/for/:industry" element={<POSPage />} />
        
        {/* Other Product Pages */}
        <Route path="/etims" element={<ETIMSPage />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/cloud/hosting" element={<CloudPage variant="hosting" />} />
        <Route path="/cloud/maintenance" element={<CloudPage variant="maintenance" />} />
        <Route path="/websites" element={<WebsitesPage />} />
        <Route path="/websites/:city" element={<WebsitesPage />} />
        
        {/* Content Pages */}
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/testimonials" element={<Testimonials />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </TooltipProvider>
);

export default App;
