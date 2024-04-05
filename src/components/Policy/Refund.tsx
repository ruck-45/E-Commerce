// Dependencies
import { useDispatch } from "react-redux";

// Local Files

import { scrollTop } from "../../utils/controllers";
import { updateTab } from "../../Redux/Slices/curTabSlice";

const Refund = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Policy"));
  scrollTop();
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center px-[5rem] py-[1.5rem] text-black bg-[#f4f4f4]">
        <h1 className="text-lg font-bold">REFUND & CANCELLATION</h1>
        <p className="text-sm">Home / Refund & Cancellation</p>
      </div>
      <div className="h-auto md:p-[5rem] p-[2rem] flex flex-col items-start justify-between text-justify text-sm">
        <h3 className="font-bold text-xl py-[0.5rem]">Refund and Cancellation Policy for ShopNest Ecommerce App</h3>
        <p className="text-gray-600 py-[0.5rem]">
          At ShopNest, we strive to provide a seamless shopping experience for our customers. However, we understand
          that there may be occasions when you need to cancel an order or request a refund. Please review our Refund and
          Cancellation Policy below:
        </p>
        <div className="py-[0.5rem]">
          <h3 className="font-bold text-lg">1. Cancellation Policy:</h3>
          <div className="py-[0rem]">
            <ul className="text-gray-600 list-disc px-[2rem]">
              <li className="py-[0.1rem]">
                Cancellation by Customer: You may cancel your order within a specified timeframe after placing it,
                typically within 24 hours, depending on the products and sellers involved. To cancel an order, please
                log in to your account and follow the cancellation process outlined in your order details. Once an order
                has been processed or shipped, it may not be possible to cancel it.
              </li>
              <li className="py-[0.1rem]">
                Cancellation by ShopNest: We reserve the right to cancel any order for reasons including, but not
                limited to, unavailability of products, pricing errors, or suspicion of fraudulent activity. If we
                cancel your order, we will notify you promptly and provide a full refund.
              </li>
            </ul>
          </div>
        </div>
        <div className="py-[0rem]">
          <h3 className="font-bold text-lg">2. Refund Policy:</h3>
          <div className="py-[0.5rem]">
            <ul className="text-gray-600 list-disc px-[2rem]">
              <li className="py-[0.1rem]">
                Eligibility for Refund: Refunds may be issued for eligible orders in accordance with the terms and
                conditions set forth in this policy. To be eligible for a refund, the item(s) must be returned in their
                original condition, unused, and with all original packaging intact.
              </li>
              <li className="py-[0.1rem]">
                Refund Process: Once your return is received and inspected, we will send you an email notification to
                confirm the approval or rejection of your refund. If approved, your refund will be processed, and a
                credit will automatically be applied to your original method of payment within a certain number of days,
                depending on your payment provider's policies..
              </li>
              <li className="py-[0.1rem]">
                Non-Refundable Items: Certain items may not be eligible for refunds, including but not limited to
                personalized or customized products, perishable goods, and digital downloads. Please review the product
                description and terms provided by the seller for specific refund eligibility.
              </li>
            </ul>
          </div>
        </div>
        <div className="py-[0rem]">
          <h3 className="font-bold text-lg">3. Return Shipping:</h3>
          <div className="py-[0.5rem]">
            <ul className="text-gray-600 list-disc px-[2rem]">
              <li className="py-[0.1rem]">
                Return Shipping Costs: Customers are responsible for the cost of return shipping unless otherwise
                specified by the seller or in the event of an error on our part. We recommend using a trackable shipping
                service and purchasing shipping insurance for high-value items, as we cannot guarantee that we will
                receive your returned item.
              </li>
              <li className="py-[0.1rem]">
                Damaged or Defective Items: If you receive a damaged or defective item, please contact us immediately
                with details and photographic evidence. We will work with you to resolve the issue promptly, which may
                include providing a replacement item or issuing a refund.
              </li>
            </ul>
          </div>
        </div>
        <div className="py-[0rem]">
          <h3 className="font-bold text-lg">4. Contact Us:</h3>
          <div className="py-[0.5rem]">
            <ul className="text-gray-600 list-disc px-[2rem]">
              <li className="py-[0.1rem]">
                If you have any questions or concerns about our Refund and Cancellation Policy, or if you need
                assistance with a return or refund, please contact us at contact@email.com. Our customer service team is
                available to assist you during business hours.
              </li>
            </ul>
          </div>
        </div>
        <div className="py-[0rem]">
          <h3 className="font-bold text-lg">5. Changes to This Policy:</h3>
          <div className="py-[0.5rem]">
            <ul className="text-gray-600 list-disc px-[2rem]">
              <li className="py-[0.1rem]">
                We reserve the right to modify or revise this Refund and Cancellation Policy at any time, in our sole
                discretion. Any changes will be effective immediately upon posting on the ShopNest app. We encourage you
                to review this policy periodically for updates.
              </li>
            </ul>
            <p className="p-[2rem] text-sm font-semibold italic">
              ** By using the ShopNest Ecommerce App and making purchases through our platform, you agree to comply with
              the terms and conditions of this Refund and Cancellation Policy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Refund;
