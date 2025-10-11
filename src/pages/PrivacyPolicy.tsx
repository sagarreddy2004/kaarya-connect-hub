import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardContent className="p-8">
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-8">
                  <strong>Last updated:</strong> September 19, 2025
                </p>

                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                <p className="mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us. This may include:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Name and contact information</li>
                  <li>Profile information and photos</li>
                  <li>Payment and billing information</li>
                  <li>Service requests and communications</li>
                  <li>Reviews and ratings</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Usage Information</h3>
                <p className="mb-6">
                  We automatically collect certain information about your use of our platform, including:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Device and browser information</li>
                  <li>IP address and location data</li>
                  <li>Usage patterns and preferences</li>
                  <li>Log files and analytics data</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Monitor and analyze trends and usage</li>
                  <li>Detect and prevent fraudulent activities</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
                <p className="mb-4">
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li><strong>Service Providers:</strong> With third-party vendors who provide services on our behalf</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>With Consent:</strong> When you give us explicit permission</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                <p className="mb-6">
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. However, 
                  no method of transmission over the internet is 100% secure.
                </p>

                <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Access and update your personal information</li>
                  <li>Delete your account and personal data</li>
                  <li>Object to processing of your information</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent where applicable</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4">6. Cookies and Tracking</h2>
                <p className="mb-6">
                  We use cookies and similar tracking technologies to collect and use information about you. 
                  You can control cookies through your browser settings, but this may affect your ability to use our services.
                </p>

                <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
                <p className="mb-6">
                  Our services are not intended for children under 18 years of age. We do not knowingly collect 
                  personal information from children under 18.
                </p>

                <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>
                <p className="mb-6">
                  We may update this privacy policy from time to time. We will notify you of any changes by 
                  posting the new policy on this page and updating the "Last updated" date.
                </p>

                <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this privacy policy, please contact us at:
                </p>
                <ul className="list-none mb-6">
                  <li><strong>Email:</strong> privacy@kaaryaconnecthub.com</li>
                  <li><strong>Phone:</strong> +91 98765 43210</li>
                  <li><strong>Address:</strong> 123 Business Street, Tech City, TC 12345, India</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
