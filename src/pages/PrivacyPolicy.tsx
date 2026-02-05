 import React from 'react';
 import { VeiraNavbar } from '@/components/veira/VeiraNavbar';
 import { FooterSection } from '@/components/veira/FooterSection';
 import { SEOHead } from '@/components/SEOHead';
 
 const PrivacyPolicy: React.FC = () => {
   return (
     <>
       <SEOHead 
         title="Privacy Policy | Veira - Best POS System Kenya"
         description="Privacy Policy for Veira POS System. Learn how we protect your data and privacy when using our cloud POS system in Kenya."
       />
       <div className="min-h-screen bg-background">
         <VeiraNavbar />
         <main className="pt-24 pb-16">
           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
             <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8">
               Privacy Policy
             </h1>
             
             <div className="prose prose-lg max-w-none text-muted-foreground">
               <p className="text-lg mb-6">
                 <strong>Effective Date:</strong> February 2025
               </p>
               
               <p className="mb-6">
                 Veira ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our POS system and related services in Kenya.
               </p>
 
               <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                 1. Information We Collect
               </h2>
               <p className="mb-4">We collect information you provide directly to us, including:</p>
               <ul className="list-disc pl-6 mb-6 space-y-2">
                 <li>Business name, address, and contact information</li>
                 <li>Account credentials and login information</li>
                 <li>Transaction and sales data processed through our POS system</li>
                 <li>Inventory and product information</li>
                 <li>M-Pesa and payment integration data</li>
                 <li>ETIMS compliance-related tax information</li>
               </ul>
 
               <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                 2. How We Use Your Information
               </h2>
               <p className="mb-4">We use the information we collect to:</p>
               <ul className="list-disc pl-6 mb-6 space-y-2">
                 <li>Provide, maintain, and improve our cloud POS system</li>
                 <li>Process transactions and manage your inventory</li>
                 <li>Generate sales reports and business analytics</li>
                 <li>Ensure ETIMS compliance with KRA requirements</li>
                 <li>Facilitate M-Pesa payment integrations</li>
                 <li>Send you technical notices and support messages</li>
                 <li>Respond to your inquiries and customer service requests</li>
               </ul>
 
               <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                 3. Data Security
               </h2>
               <p className="mb-6">
                 We implement industry-standard security measures to protect your data. Our cloud-based POS system uses encryption for data transmission and storage. We maintain secure servers and regularly update our security protocols to safeguard your business information.
               </p>
 
               <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                 4. Data Sharing
               </h2>
               <p className="mb-4">We may share your information with:</p>
               <ul className="list-disc pl-6 mb-6 space-y-2">
                 <li>Kenya Revenue Authority (KRA) for ETIMS compliance requirements</li>
                 <li>Payment processors including M-Pesa/Safaricom for transaction processing</li>
                 <li>Service providers who assist in operating our POS system</li>
                 <li>Legal authorities when required by Kenyan law</li>
               </ul>
 
               <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                 5. Data Retention
               </h2>
               <p className="mb-6">
                 We retain your business and transaction data for as long as your account is active or as needed to provide you services. We also retain data as necessary to comply with Kenyan tax laws and ETIMS requirements, which typically require records to be kept for a minimum of 5 years.
               </p>
 
               <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                 6. Your Rights
               </h2>
               <p className="mb-4">You have the right to:</p>
               <ul className="list-disc pl-6 mb-6 space-y-2">
                 <li>Access your personal and business data</li>
                 <li>Request correction of inaccurate data</li>
                 <li>Export your sales and inventory data</li>
                 <li>Request deletion of your account (subject to legal retention requirements)</li>
               </ul>
 
               <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                 7. Cookies and Tracking
               </h2>
               <p className="mb-6">
                 Our website and POS system may use cookies and similar technologies to enhance your experience, analyze usage patterns, and improve our services. You can control cookie preferences through your browser settings.
               </p>
 
               <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                 8. Changes to This Policy
               </h2>
               <p className="mb-6">
                 We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date.
               </p>
 
               <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                 9. Contact Us
               </h2>
               <p className="mb-6">
                 If you have questions about this Privacy Policy or our data practices, please contact us:
               </p>
               <ul className="list-none mb-6 space-y-2">
                 <li><strong>Email:</strong> hello@veirahq.com</li>
                 <li><strong>Phone:</strong> +254 755 792 377</li>
                 <li><strong>Address:</strong> Ruprani House, 3rd Floor, Moktar Daddah St, Nairobi, Kenya</li>
               </ul>
             </div>
           </div>
         </main>
         <FooterSection />
       </div>
     </>
   );
 };
 
 export default PrivacyPolicy;