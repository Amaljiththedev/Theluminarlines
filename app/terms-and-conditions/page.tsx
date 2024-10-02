import Link from 'next/link';
import React from "react";

const TermsConditions = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white p-4">
      <div className="max-w-3xl p-8 bg-gray-800 rounded-lg shadow-lg">
        {/* Centered Heading */}
        <h1 className="text-4xl font-bold mb-2 text-center">Luminary Lines</h1>
        <h2 className="text-2xl font-semibold mb-6 text-center">Terms & Conditions</h2>

        <p className="mb-2">
          <strong>Effective Date:</strong> 01/08/2024
        </p>

        <p className="mb-4">
          By accessing or using the services provided by Luminary Lines, you agree to comply with and be bound by the following terms and conditions.
        </p>

        <h3 className="text-xl font-semibold mb-2">Services and Payments</h3>
        <p className="mb-4">
          To engage our services, you must complete the service agreement and pay the required fees. All fees are non-refundable unless otherwise specified in the agreement.
        </p>

        <h3 className="text-xl font-semibold mb-2">Service Delivery</h3>
        <p className="mb-4">
          We provide services as outlined in the service agreement, tailored to help you grow your social media presence. The scope and duration of services will be specified in the service agreement. Any additional services outside the scope will require a separate agreement and fee.
        </p>

        <h3 className="text-xl font-semibold mb-2">Client Responsibilities</h3>
        <p className="mb-4">
          You agree to provide all necessary materials, information, and access required for us to perform our services. Failure to provide required resources in a timely manner may result in delays or the inability to deliver services, without liability to Luminary Lines.
        </p>

        <h3 className="text-xl font-semibold mb-2">Code of Conduct</h3>
        <p className="mb-4">
          Professional and respectful communication is expected throughout the engagement. We reserve the right to terminate services in the event of harassment, abusive behavior, or any breach of professionalism without a refund.
        </p>

        <h3 className="text-xl font-semibold mb-2">Intellectual Property</h3>
        <p className="mb-4">
          All content, strategies, and materials developed during the service period are the intellectual property of Luminary Lines, unless otherwise agreed upon in writing. You may not reproduce, distribute, or create derivative works from our materials without prior written permission.
        </p>

        <h3 className="text-xl font-semibold mb-2">Privacy</h3>
        <p className="mb-4">
          We are committed to protecting your privacy. Please refer to our Privacy Policy for details on how we collect, use, and protect your personal information.
        </p>

        <h3 className="text-xl font-semibold mb-2">Limitation of Liability and Disclaimer of Warranties</h3>
        <p className="mb-4">
          Luminary Lines is not responsible for any technical issues or external factors that may affect your social media platforms. We are not liable for any indirect, incidental, or consequential damages arising from the use of our services or the failure to achieve desired results.
        </p>

        <h3 className="text-xl font-semibold mb-2">Amendments</h3>
        <p className="mb-4">
          We reserve the right to update or modify these terms and conditions at any time. Changes will be effective immediately upon posting on our website.
        </p>

        <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
        <p className="mb-4">
          For any questions or concerns regarding these terms and conditions, please contact us at 
          <a href="mailto:hello@luminarylines.com" className="text-blue-300 underline"> hello@luminarylines.com</a>.
        </p>

        <div className="flex justify-center">
          <Link href="/" passHref>
            <button className="inline-block mt-8 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
