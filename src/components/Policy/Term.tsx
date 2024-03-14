// Dependencies
import { useDispatch } from "react-redux";

// Local Files

import { scrollTop } from "../../utils/controllers";
import { updateTab } from "../../Redux/Slices/curTabSlice";

const Term = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Policy"));
  scrollTop();
  return (
    <>
      <div
        className="h-[12rem] w-full flex justify-center items-center p-[5rem] text-black bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <h1 className="text-4xl font-bold ">Term & Condition</h1>
      </div>
      <div className="h-auto md:p-[5rem] p-[2rem] flex flex-col items-start justify-between text-justify">
        <h3 className="text-2xl font-bold py-[0.5rem]">Terms and Conditions for ShopNest Ecommerce App:</h3>
        <p className="text-gray-600 py-[0.5rem]">
          These Terms and Conditions govern your use of the ShopNest Ecommerce App. By accessing or using the app, you
          agree to be bound by these Terms and Conditions. If you do not agree with any part of these Terms and
          Conditions, you may not use the app.
        </p>
        <div className="py-[1rem]">
          <h3 className="text-2xl font-bold">1. Account Registration:</h3>
          <div className="py-[0rem]">
            <ul className="text-gray-600 list-disc px-[2rem]">
              <li className="py-[0.1rem]">
                To use certain features of the app, you may be required to register for an account. You agree to provide
                accurate, current, and complete information during the registration process and to update such
                information to keep it accurate, current, and complete.
              </li>
              <li className="py-[0.1rem]">
                You are responsible for maintaining the confidentiality of your account credentials and for all
                activities that occur under your account.
              </li>
            </ul>
          </div>
        </div>
        <div className="py-[0rem]">
          <h3 className="text-2xl font-bold">2. Use of the App:</h3>
          <div className="py-[1rem]">
            <ul className="text-gray-600 list-disc px-[2rem]">
              <li className="py-[0.1rem]">
                You may use the app only for lawful purposes and in accordance with these Terms and Conditions.
              </li>
              <li className="py-[0.1rem]">
                We reserve the right to terminate or suspend your access to the app at any time, without prior notice,
                for any reason or no reason.
              </li>
            </ul>
          </div>
        </div>
        <div className="py-[0rem]">
          <h3 className="text-2xl font-bold">3.Product Listings and Purchases:</h3>
          <div className="py-[1rem]">
            <ul className="text-gray-600 list-disc px-[2rem]">
              <li className="py-[0.1rem]">
                We do not guarantee the availability, accuracy, or quality of any products listed on the app, and we are
                not responsible for any transactions between you and third-party sellers.
              </li>
              <li className="py-[0.1rem]">
                All purchases made through the app are subject to the terms and conditions of sale provided by the
                seller.
              </li>
              <li className="py-[0.1rem]">
                The app may allow you to browse, view, and purchase products from third-party sellers.
              </li>
            </ul>
          </div>
        </div>
        <div className="py-[0rem]">
          <h3 className="text-2xl font-bold">4. Intellectual Property:</h3>
          <div className="py-[1rem]">
            <ul className="text-gray-600 list-disc px-[2rem]">
              <li className="py-[0.1rem]">
                All content and materials available on the app, including text, graphics, logos, images, and software,
                are the property of ShopNest or its licensors and are protected by copyright, trademark, and other
                intellectual property laws.
              </li>
              <li className="py-[0.1rem]">
                You may not modify, reproduce, distribute, transmit, display, or create derivative works of any content
                or materials from the app without our prior written consent.
              </li>
            </ul>
          </div>
        </div>
        <div className="py-[0rem]">
          <h3 className="text-2xl font-bold">5. Privacy Policy:</h3>
          <div className="py-[1rem]">
            <ul className="text-gray-600 list-disc px-[2rem]">
              <li className="py-[0.1rem]">
                Your use of the app is subject to our Privacy Policy, which explains how we collect, use, and disclose
                your personal information. By using the app, you consent to the collection and use of your information
                as described in the Privacy Policy.
              </li>
            </ul>
          </div>
        </div>
        <div className="py-[0rem]">
          <h3 className="text-2xl font-bold">6. Disclaimer of Warranties:</h3>
          <div className="py-[1rem]">
            <ul className="text-gray-600 list-disc px-[2rem]">
              <li className="py-[0.1rem]">
                The app is provided on an "as is" and "as available" basis, without any warranties of any kind, either
                express or implied.
              </li>
              <li className="py-[0.1rem]">
                We do not warrant that the app will be uninterrupted or error-free, or that any defects will be
                corrected.
              </li>
              <li className="py-[0.1rem]">
                We disclaim all warranties, express or implied, including but not limited to warranties of
                merchantability, fitness for a particular purpose, and non-infringement.
              </li>
            </ul>
          </div>
        </div>
        <div className="py-[0rem]">
          <h3 className="text-2xl font-bold">7. Limitation of Liability:</h3>
          <div className="py-[1rem]">
            <ul className="text-gray-600 list-disc px-[2rem]">
              <li className="py-[0.1rem]">
                In no event shall ShopNest, its affiliates, or their respective officers, directors, employees, or
                agents be liable for any indirect, incidental, special, consequential, or punitive damages arising out
                of or in connection with your use of the app or these Terms and Conditions.
              </li>
              <li className="py-[0.1rem]">
                Our total liability to you for all claims arising out of or in connection with the app or these Terms
                and Conditions shall not exceed the amount you paid to us, if any, for access to or use of the app.
              </li>
            </ul>
          </div>
        </div>
        <div className="py-[0rem]">
          <h3 className="text-2xl font-bold">8. Governing Law:</h3>
          <div className="py-[1rem]">
            <ul className="text-gray-600 list-disc px-[2rem]">
              <li className="py-[0.1rem]">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your
                Country/State], without regard to its conflicts of law principles.
              </li>
            </ul>
          </div>
        </div>
        <div className="py-[0rem]">
          <h3 className="text-2xl font-bold">9. Changes to These Terms and Conditions:</h3>
          <div className="py-[1rem]">
            <ul className="text-gray-600 list-disc px-[2rem]">
              <li className="py-[0.1rem]">
                We reserve the right to modify or revise these Terms and Conditions at any time, in our sole discretion.
                If we make material changes to these Terms and Conditions, we will notify you by posting a notice on the
                app or by sending you an email.
              </li>
            </ul>
          </div>
        </div>
        <div className="py-[0rem]">
          <h3 className="text-2xl font-bold">10. Contact Us:</h3>
          <div className="py-[1rem]">
            <ul className="text-gray-600 list-disc px-[2rem]">
              <li className="py-[0.1rem]">
                If you have any questions or concerns about these Terms and Conditions or the app, you may contact us at
                contact@email.com.
              </li>
            </ul>
            <p className="p-[2rem] text-xl font-semibold italic">
              ** By using the ShopNest Ecommerce App, you agree to be bound by these Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Term;
