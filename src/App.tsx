import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import Programs from "@/pages/Programs";
import Impact from "@/pages/Impact";
import Resources from "@/pages/Resources";
import Contact from "@/pages/Contact";
import { ROUTE_PATHS } from "@/lib/index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <MotionConfig reducedMotion="user">
        <Toaster />
        <Sonner />
        <HashRouter>
          <Layout>
            <Routes>
              <Route path={ROUTE_PATHS.HOME} element={<Home />} />
              <Route path={ROUTE_PATHS.PROGRAMS} element={<Programs />} />
              <Route path={ROUTE_PATHS.IMPACT} element={<Impact />} />
              <Route path={ROUTE_PATHS.RESOURCES} element={<Resources />} />
              <Route path={ROUTE_PATHS.CONTACT} element={<Contact />} />
            </Routes>
          </Layout>
        </HashRouter>
      </MotionConfig>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;