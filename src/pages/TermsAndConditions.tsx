import { ArrowLeft, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-primary">
      <div className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Button 
            onClick={() => navigate('/')}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>

        {/* Terms Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 shadow-lg border border-gray-200 rounded-lg">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Terms & Conditions
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Please read these terms carefully before using our website
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                {/* Terms of Use */}
                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Terms of Use
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    By accessing or using this landing page, you acknowledge and agree to abide by the following terms and conditions.
                  </p>
                </section>

                {/* Intellectual Property Rights */}
                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Intellectual Property Rights
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    All content, images, logos, and materials displayed on this landing page are the exclusive property of the real estate company or its licensors and are safeguarded by intellectual property laws. Unauthorized copying, modification, distribution, or usage of any content is strictly prohibited without prior written consent.
                  </p>
                </section>

                {/* Property Information Disclaimer */}
                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Property Information Disclaimer
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    The information provided on this landing page, including property descriptions, prices, availability, and other details, is subject to change without prior notice. The real estate company shall not be held accountable for any inaccuracies or omissions in the information provided.
                  </p>
                </section>

                {/* User Responsibilities */}
                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    User Responsibilities
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Users are responsible for furnishing accurate and current information when submitting inquiries or requests through this landing page. Additionally, users agree not to engage in unlawful or detrimental activities, such as hacking, spamming, or transmitting malicious software.
                  </p>
                </section>

                {/* Privacy and Data Handling */}
                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Privacy and Data Handling
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    This real estate company collects, stores, and utilizes user data in compliance with applicable privacy laws. The landing page may employ third-party services or tracking technologies, like cookies or analytics tools, for which detailed information can be found in the privacy policy.
                  </p>
                </section>

                {/* Disclaimer of Liability */}
                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Disclaimer of Liability
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Under no circumstances shall the real estate company be liable for damages, losses, or injuries arising from the use of this landing page or reliance on the provided information. This includes, but is not limited to, financial losses, property damage, or any direct or indirect damages.
                  </p>
                </section>

                {/* Third-Party Website Links */}
                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Third-Party Website Links
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Links provided on this landing page to external websites or resources do not signify endorsement or assumption of responsibility for their content, privacy practices, or availability by the real estate company.
                  </p>
                </section>

                {/* Modification of Terms */}
                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Modification of Terms
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    The real estate company reserves the right to revise or modify these terms and conditions at any time without prior notice. Users are encouraged to periodically review the terms for updates.
                  </p>
                </section>

                {/* Governing Law and Jurisdiction */}
                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Governing Law and Jurisdiction
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Any legal disputes arising from the use of this landing page shall be resolved within the specified jurisdiction and governed by the applicable laws pertaining to that jurisdiction.
                  </p>
                </section>

                {/* Contact Information */}
                <section className="bg-gray-50 p-6 rounded-lg mt-12">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                    For any questions regarding these terms, please contact us:
                  </h2>
                  
                  <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <Button 
                      onClick={() => window.open('tel:+917303665082')}
                      className="bg-primary hover:bg-primary-dark text-white px-6 py-2 transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      +91 7303665082
                    </Button>
                    
                    <Button 
                      onClick={() => window.open('https://api.whatsapp.com/send?phone=+917303665082')}
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-primary px-6 py-2 transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
