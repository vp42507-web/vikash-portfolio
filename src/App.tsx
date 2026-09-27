/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { FeaturedProject } from './components/FeaturedProject';
import { Process } from './components/Process';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { PORTFOLIO_ITEMS, PortfolioItem, FEATURED_PROJECT } from './data/portfolioConfig';

export default function App() {
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string | undefined>(undefined);
  const [selectedPlanForInquiry, setSelectedPlanForInquiry] = useState<string | undefined>(undefined);

  const handleOpenModal = (itemOrId: PortfolioItem | string | undefined) => {
    if (!itemOrId) {
      setActiveModalItem(PORTFOLIO_ITEMS[0]);
      return;
    }

    if (typeof itemOrId === 'string') {
      const found = PORTFOLIO_ITEMS.find((p) => p.id === itemOrId);
      if (found) {
        setActiveModalItem(found);
      } else {
        // Build fallback representation
        setActiveModalItem({
          id: 'featured-master',
          title: FEATURED_PROJECT.title,
          category: 'ADS',
          description: FEATURED_PROJECT.description,
          aspectRatio: '16:9',
          thumbnailUrl: FEATURED_PROJECT.thumbnailUrl,
          videoType: 'demo',
          tags: ['Master Render', 'Color', 'Sound Design'],
        });
      }
    } else {
      setActiveModalItem(itemOrId);
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForInquiry(serviceTitle);
    const el = document.getElementById('inquiry');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectPlan = (planTitle: string) => {
    setSelectedPlanForInquiry(planTitle);
    const el = document.getElementById('inquiry');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#070709] text-[#f4f4f5] selection:bg-amber-500 selection:text-black">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenVideoModal={handleOpenModal} />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 4. Portfolio Section */}
        <Portfolio onWatchVideo={handleOpenModal} />

        {/* 5. Featured Project Section */}
        <FeaturedProject onOpenModal={handleOpenModal} />

        {/* 6. Editing Process Timeline */}
        <Process />

        {/* 7. Why Work With Me */}
        <WhyWorkWithMe />

        {/* 8. Pricing Packages */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* 9. Client Testimonials */}
        <Testimonials />

        {/* 10. Contact & Client Inquiry Form */}
        <ContactSection
          initialService={selectedServiceForInquiry}
          initialPlan={selectedPlanForInquiry}
        />

        {/* 11. Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cinematic Video Lightbox Modal */}
      <VideoModal
        item={activeModalItem}
        onClose={() => setActiveModalItem(null)}
      />
    </div>
  );
}
