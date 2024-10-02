import Link from 'next/link';
import React from "react"; 
const RefundPolicy = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white p-4">
      <div className="max-w-3xl p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Cancellation/Refund Policy</h2>

        <h3 className="text-xl font-semibold mb-2">Payment Options</h3>
        <p className="mb-4">
          We support both full upfront payments and EMI options for our services.
        </p>

        <h3 className="text-xl font-semibold mb-2">Refund Eligibility</h3>
        <ul className="list-disc ml-5 mb-4">
          <li>
            Refunds are available only if you contact us at 
            <a href="mailto:hello@luminarylines.com" className="text-blue-300 underline"> hello@luminarylines.com</a> 
            within the first two days of the service commencement.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Payment Processing</h3>
        <p className="mb-4">
          Luminary Lines does not store any of your payment information (debit card, credit card, net banking, etc.) or any other information restricted by the Reserve Bank of India (RBI) for processing payments. We have partnered with payment gateways to securely process payments for our services.
        </p>

        <h3 className="text-xl font-semibold mb-2">Additional Information</h3>
        <p className="mb-4">
          In case of any other payment, refund, or cancellation issues, decisions will be made on a case-by-case basis, and the decision by Luminary Lines will be final and binding.
        </p>

        <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
        <p className="mb-4">
          For any concerns related to payment or refunds, kindly write to 
          <a href="mailto:hello@luminarylines.com" className="text-blue-300 underline"> hello@luminarylines.com</a>.
        </p>

        <div className="flex justify-center">
        <Link href="/" passHref>
          <button className="inline-block mt-8 bg-black text-white  px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
            Back to Home
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
