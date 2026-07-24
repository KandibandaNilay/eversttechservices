import React from 'react';
import PageBanner from '../../components/common/PageBanner';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/common/Card';

const Terms = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By using our website and services, you agree to comply with and be bound by these terms and conditions. If you do not agree, please do not use our services.'
    },
    {
      title: 'Services Description',
      content: 'Everst Tech Services provides IT consulting, software development, and related technology services. We reserve the right to modify, suspend, or discontinue any service at any time.'
    },
    {
      title: 'User Obligations',
      content: 'You agree to use our services only for lawful purposes and in accordance with these terms. You are responsible for maintaining the confidentiality of your account credentials.'
    },
    {
      title: 'Intellectual Property',
      content: 'All content, materials, and intellectual property on our website and services are owned by Everst Tech Services. You may not reproduce, distribute, or create derivative works without our express permission.'
    },
    {
      title: 'Payment Terms',
      content: 'Payment terms for our services are defined in individual service agreements. All fees are payable in the currency specified and are subject to applicable taxes.'
    },
    {
      title: 'Disclaimer of Warranties',
      content: 'Our services are provided "as is" without warranties of any kind. We do not guarantee that our services will be uninterrupted, error-free, or secure.'
    },
    {
      title: 'Limitation of Liability',
      content: 'Everst Tech Services shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of our services.'
    },
    {
      title: 'Indemnification',
      content: 'You agree to indemnify and hold Everst Tech Services harmless from any claims, damages, or expenses arising from your use of our services or violation of these terms.'
    },
    {
      title: 'Governing Law',
      content: 'These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad.'
    }
  ];

  return (
    <>
      <PageBanner 
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our services"
        breadcrumbs={[{ label: 'Terms & Conditions' }]}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Terms & Conditions"
            subtitle="Last updated: January 2026"
            badge="Legal"
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

export default Terms;