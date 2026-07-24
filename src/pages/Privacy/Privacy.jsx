import React from 'react';
import PageBanner from '../../components/common/PageBanner';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/common/Card';

const Privacy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: 'We collect information you provide directly to us, such as your name, email address, phone number, and any other information you choose to provide. We also collect information about your use of our website, including pages visited and actions taken.'
    },
    {
      title: 'How We Use Your Information',
      content: 'We use your information to provide and improve our services, communicate with you, respond to your inquiries, send you updates and marketing materials, and comply with legal obligations.'
    },
    {
      title: 'Information Sharing',
      content: 'We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our business, or when required by law.'
    },
    {
      title: 'Data Security',
      content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
    },
    {
      title: 'Your Rights',
      content: 'You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. Contact us to exercise these rights.'
    },
    {
      title: 'Cookies',
      content: 'We use cookies to enhance your experience on our website. You can control cookie preferences through your browser settings. For more details, please see our Cookies Policy.'
    },
    {
      title: 'Changes to This Policy',
      content: 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated date.'
    },
    {
      title: 'Contact Us',
      content: 'If you have any questions about this privacy policy, please contact us at info@eversttechservices.com or call +91-9948886996.'
    }
  ];

  return (
    <>
      <PageBanner 
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information"
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Privacy Policy"
            subtitle="Last updated: January 2026"
            badge="Privacy"
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

export default Privacy;