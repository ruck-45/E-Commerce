// Dependencies
import { useDispatch } from "react-redux";

// Local Files

import { scrollTop } from "../../utils/controllers";
import { updateTab } from "../../Redux/Slices/curTabSlice";

const Privacy = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Policy"));
  scrollTop();

  return (
    <>
      <div
        className="h-[12rem] w-full flex justify-center items-center p-[5rem] text-black bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <h1 className="text-4xl font-bold ">Privacy & Policy</h1>
      </div>
      <div className="h-auto md:p-[5rem] p-[2rem] flex flex-col items-start justify-between text-justify">
        <h3 className="text-2xl font-bold py-[0.5rem]">Privacy Policy for ShopNest Ecommerce App</h3>
        <p className="text-gray-600 py-[0.5rem]">
          At ShopNest, we are committed to protecting the privacy and security of our users' personal information. This
          Privacy Policy outlines the types of information we collect, how we use it, and the steps we take to safeguard
          it.
        </p>
        <div className="py-[1rem]">
          <h3 className="text-2xl font-bold">Information We Collect:</h3>
          <div className="py-[1rem]">
            <ul className="text-gray-600 list-disc px-[2rem]">
              <li className="py-[0.15rem]">
                Personal Information: When you register for an account on our app, we may collect personal information
                such as your name, email address, phone number, and shipping address.
              </li>
              <li className="py-[0.15rem]">
                Payment Information: If you make a purchase through our app, we will collect payment information such as
                credit card details or other payment method details.
              </li>
              <li className="py-[0.15rem]">
                Device Information: We may collect information about the device you use to access our app, including
                your device's unique identifier, IP address, and operating system.
              </li>
              <li className="py-[0.15rem]">
                Usage Information: We may collect information about how you use our app, including the pages you visit,
                the products you view, and your interactions with our features and advertisements.
              </li>
              <li className="py-[0.15rem]">
                Location Information: With your consent, we may collect your precise or approximate location information
                to provide you with location-based services, such as personalized recommendations or local store
                availability.
              </li>
            </ul>
          </div>
        </div>
        <div className="py-[1rem]">
          <h3 className="text-2xl font-bold">How We Use Your Information:</h3>
          <div className="py-[1rem]">
            <ul className="text-gray-600 list-disc px-[2rem]">
              <li className="py-[0.15rem]">
                To Provide Services: We use the information we collect to provide you with the services offered through
                our app, including processing orders, delivering products, and responding to customer inquiries.
              </li>
              <li className="py-[0.15rem]">
                To Improve Our App: We may use aggregated and anonymized data to analyze trends and user behavior, which
                helps us improve the functionality and user experience of our app.
              </li>
              <li className="py-[0.15rem]">
                To Personalize Your Experience: We may use your information to personalize your experience on our app,
                such as displaying personalized product recommendations or promotions based on your browsing history and
                preferences.
              </li>
              <li className="py-[0.15rem]">
                Usage Information: We may collect information about how you use our app, including the pages you visit,
                the products you view, and your interactions with our features and advertisements.
              </li>
              <li className="py-[0.15rem]">
                To Communicate with You: We may use your contact information to communicate with you about your account,
                orders, promotions, and updates to our Privacy Policy and Terms of Service.
              </li>
            </ul>
          </div>
        </div>
        <div className="py-[1rem]">
          <h3 className="text-2xl font-bold">How We Protect Your Information:</h3>
          <div className="py-[1rem]">
            <ul className="text-gray-600 list-disc px-[2rem]">
              <li className="py-[0.15rem]">
                Data Security: We implement reasonable security measures to protect the confidentiality and integrity of
                your personal information, including encryption, access controls, and regular security audits.
              </li>
              <li className="py-[0.15rem]">
                Third-Party Service Providers: We may engage third-party service providers to assist us in providing and
                improving our services. These service providers are contractually obligated to protect your information
                and only use it for the purposes specified by us.
              </li>
              <li className="py-[0.15rem]">
                Data Retention: We retain your personal information for as long as necessary to fulfill the purposes
                outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </li>
            </ul>
          </div>
        </div>
        <div className="py-[1rem]">
          <h3 className="text-2xl font-bold">Your Choices:</h3>
          <div className="py-[1rem]">
            <ul className="text-gray-600 list-disc px-[2rem]">
              <li className="py-[0.15rem]">
                Account Information: You can update or delete your account information at any time by accessing your
                account settings in the app.
              </li>
              <li className="py-[0.15rem]">
                Opt-Out: You can opt-out of receiving promotional emails or push notifications from us by adjusting your
                notification preferences in the app settings.
              </li>
            </ul>
          </div>
        </div>
        <div className="py-[1rem]">
          <h3 className="text-2xl font-bold">Changes to This Privacy Policy:</h3>
          <div className="py-[1rem]">
            <ul className="text-gray-600 list-disc px-[2rem]">
              <li className="py-[0.15rem]">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable
                laws. We will notify you of any material changes by posting the updated Privacy Policy on our website or
                app and updating the "Last Updated" date.
              </li>
            </ul>
          </div>
        </div>
        <div className="py-[1rem]">
          <h3 className="text-2xl font-bold">Contact Us:</h3>
          <div className="py-[1rem]">
            <ul className="text-gray-600 list-disc px-[2rem]">
              <li className="py-[0.15rem]">
                If you have any questions or concerns about our Privacy Policy or our privacy practices, you can contact
                us at contact@email.com.
              </li>
              <li className="py-[0.15rem]">
                By using our app, you agree to the collection and use of your information as outlined in this Privacy
                Policy.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
