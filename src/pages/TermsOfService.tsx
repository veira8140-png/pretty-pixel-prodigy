 import React from 'react';
 import { VeiraNavbar } from '@/components/veira/VeiraNavbar';
 import { FooterSection } from '@/components/veira/FooterSection';
 import { SEOHead } from '@/components/SEOHead';
 
 const TermsOfService: React.FC = () => {
   return (
     <>
       <SEOHead 
         title="Terms of Service | Veira - Best POS System Kenya"
         description="Terms of Service for Veira POS System. Read our terms and conditions for using our cloud POS software in Kenya."
       />
       <div className="min-h-screen bg-background">
         <VeiraNavbar />
         <main className="pt-24 pb-16">
           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
             <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8">
               Terms of Service
             </h1>
             
             <div className="prose prose-lg max-w-none text-muted-foreground">
               <p className="text-lg mb-6">
                 <strong>Effective Date:</strong> February 2025
               </p>
               
               <p className="mb-6">
                 Welcome to Veira. These Terms of Service ("Terms") govern your use of our POS system, cloud software, and related services. By using our services, you agree to these Terms.
               </p>
 
               <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                 1. Services
               </h2>
               <p className="mb-6">
                 Veira provides cloud-based point of sale (POS) systems for businesses in Kenya, including inventory management, sales tracking, M-Pesa integration, ETIMS compliance, and business analytics tools.
               </p>
 
               <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                 2. Account Registration
               </h2>
               <p className="mb-6">
                 To use our POS system, you must create an account with accurate business information. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
               </p>
 
               <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                 3. Acceptable Use
               </h2>
               <p className="mb-4">You agree not to:</p>
               <ul className="list-disc pl-6 mb-6 space-y-2">
                 <li>Use our services for any unlawful purpose</li>
                 <li>Attempt to gain unauthorized access to our systems</li>
                 <li>Transmit malicious code or interfere with our services</li>
                 <li>Resell or redistribute our services without authorization</li>
                 <li>Use the system to process fraudulent transactions</li>
               </ul>
 
               <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                 4. Payment Terms
               </h2>
               <p className="mb-6">
                 Subscription fees and pricing are as displayed on our website or as agreed upon with our sales team. Payment is due according to your chosen billing cycle. Late payments may result in service suspension.
               </p>
 
               <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                 5. ETIMS Compliance
               </h2>
               <p className="mb-6">
                 Our POS system supports ETIMS integration with KRA. While we provide the technical infrastructure for compliance, you remain responsible for ensuring your business meets all Kenya Revenue Authority requirements and for the accuracy of tax-related data.
               </p>
 
               <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                 6. Data Ownership
               </h2>
               <p className="mb-6">
                 You retain ownership of your business data, including sales records, inventory information, and customer data. You grant us a limited license to process this data to provide our services.
               </p>
 
               <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                 7. Service Availability
               </h2>
               <p className="mb-6">
                 We strive to maintain high availability of our cloud POS system. However, we do not guarantee uninterrupted service and may perform maintenance as needed. Our offline mode ensures you can continue operations during internet outages.
               </p>
 
               <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                 8. Limitation of Liability
               </h2>
               <p className="mb-6">
                 To the maximum extent permitted by Kenyan law, Veira shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.
               </p>
 
               <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                 9. Termination
               </h2>
               <p className="mb-6">
                 Either party may terminate this agreement with 30 days written notice. We may suspend or terminate your account immediately for violation of these Terms. Upon termination, you may request export of your data.
               </p>
 
               <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                 10. Governing Law
               </h2>
               <p className="mb-6">
                 These Terms are governed by the laws of Kenya. Any disputes shall be resolved in the courts of Nairobi, Kenya.
               </p>
 
               <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
                 11. Contact
               </h2>
               <p className="mb-6">
                 For questions about these Terms, contact us:
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
 
 export default TermsOfService;