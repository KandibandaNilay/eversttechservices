import React from 'react';
import PageBanner from '../../components/common/PageBanner';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/common/Card';

const Cookies = () => {
  const sections = [
    {
      title: 'What Are Cookies',
      content: 'Cookies are small text files that are placed on your device when you visit a website. They help us provide you with a better experience by remembering your preferences and analyzing site usage.'
    },
    {
      title: 'How We Use Cookies',
      content: 'We use cookies for essential functionality, performance monitoring, analytics, and personalization. They help us understand how users interact with our site and improve our services.'
    },
    {
      title: 'Types of Cookies We Use',
      content: 'Essential cookies are necessary for basic site functionality. Analytics cookies help us understand user behavior. Functional cookies remember your preferences. Advertising cookies are used for relevant content delivery.'
    },
    {
      title: 'Managing Your Cookie Preferences',
      content: 'You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies. However, blocking certain cookies may affect your experience on our site.'
    },
    {
      title: 'Third-Party Cookies',
      content: 'Some cookies may be placed by third-party services we use, such as analytics providers or social media platforms. These are governed by the respective third-party privacy policies.'
    },
    {
      title: 'Policy Updates',
      content: 'We may update this cookies policy from time to time. Changes will be posted on this page with an updated effective date.'
    },
    {
      title: 'Contact Us',
      content: 'If you have questions about our use of cookies, please contact us at info@eversttechservices.com.'
    }
  ];

  return (
    <>
      <PageBanner 
        title="Cookies Policy"
        subtitle="How we use cookies and similar technologies"
        breadcrumbs={[{ label: 'Cookies Policy' }]}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Cookies Policy"
            subtitle="Last updated: January 2026"
            badge="Cookies"
          />

          <div className="max-w-3xl mx-auto mt-12 space-y-4">
            {sections.map((section, index) => (
              <Card key={index} className="hover:border-royalBlue/20">
                <h3 className="text-lg font-bold text-darkBlue mb-2">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cookies;