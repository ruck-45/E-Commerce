// Dependencies
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { scrollTop } from "../../../utils/controllers";

// Local Files

const IndividualBlog = () => {
  scrollTop();
  const location = useLocation();

  let thumbnail = "";
  let summary = "";
  let blogId = "";
  let title = "";

  if (location.state) {
    thumbnail = location.state.thumbnail;
    summary = location.state.summary;
    title = location.state.title;
    blogId = location.state.blogId;
  }

  return (
    <div className="px-[5%] py-[5rem] bg-[#e9ecef]">
      <Link
        to="../All"
        className="ml-[4rem] mb-[1rem] flex items-center gap-[0.5rem] hover:gap-[1rem] duration-100 text-[#006FEE]"
      >
        <FaArrowRightLong />
        <p>Blogs</p>
      </Link>
      <div className="bg-[white] rounded-3xl md:p-[4rem] flex flex-col">
        <div className="sm:px-[1rem] md:px-[2rem] py-[2rem] bg-[#e9ecef] rounded-3xl flex flex-col gap-[1rem]">
          <div
            className="h-[30rem] rounded-3xl bg-no-repeat bg-cover bg-center flex flex-col p-[3rem] justify-between"
            style={{
              backgroundImage: `url(${thumbnail})`,
            }}
          ></div>

          <div className="p-[2rem] flex flex-col gap-[2rem]">
            <div className="flex justify-between items-end">
              <h1 className="text-xl font-bold">{title}</h1>
            </div>
            <div className="flex flex-col gap-[1rem]">
              <p className="text-default-500">
                Introduction Social media has revolutionized the way businesses connect with their audience, providing a
                dynamic platform for engagement, communication, and brand promotion. In the realm of digital marketing,
                devising effective social media marketing strategies is paramount to building a strong online presence.
                One of the key objectives of these strategies is to engage the audience in a meaningful way, fostering
                lasting relationships and driving business success. This essay delves into the importance of engaging
                social media marketing strategies and explores various approaches that can captivate and retain an
                audience effectively.
              </p>
              <p className="text-default-500">
                Understanding Audience Engagement Audience engagement goes beyond mere likes, shares, or comments. It
                involves creating a two-way communication channel that encourages interaction and participation. A truly
                engaged audience is more likely to become loyal customers, brand advocates, and contributors to the
                overall success of a business. To achieve this, marketers need to understand their target audience's
                preferences, behaviors, and interests. Through this understanding, they can tailor their social media
                content and strategies to resonate with the audience on a deeper level.
              </p>
              <p className="text-default-500">
                Content is King One of the fundamental pillars of engaging social media marketing is the creation of
                compelling and relevant content. Content serves as the bridge between a brand and its audience,
                providing valuable information, entertainment, or inspiration. Whether it's blog posts, images, videos,
                or infographics, diverse and high-quality content keeps the audience interested and encourages them to
                stay connected. Regularly updating content also signals to algorithms that a brand is active, increasing
                visibility on social media platforms.
              </p>
              <p className="text-default-500">
                Storytelling as a Powerful Tool Humans are inherently drawn to stories. Incorporating storytelling into
                social media marketing can be a potent strategy to captivate an audience. Brands can share their
                journey, highlight customer success stories, or showcase behind-the-scenes content. Storytelling adds a
                personal touch, making the brand more relatable and memorable. By weaving narratives that resonate with
                the audience's emotions, marketers can forge a stronger connection and leave a lasting impression.
              </p>
              <p className="text-default-500">
                Interactive Content and User Participation Engagement thrives on interaction. Social media platforms
                offer various features, such as polls, quizzes, and live videos, that invite user participation.
                Encouraging followers to share their opinions, experiences, or creations fosters a sense of community
                and involvement. Contests and giveaways are also effective tools to generate excitement and incentivize
                audience engagement. When users actively participate in a brand's content, they become more invested in
                its success.
              </p>
              <p className="text-default-500">
                Interactive Content and User Participation Engagement thrives on interaction. Social media platforms
                offer various features, such as polls, quizzes, and live videos, that invite user participation.
                Encouraging followers to share their opinions, experiences, or creations fosters a sense of community
                and involvement. Contests and giveaways are also effective tools to generate excitement and incentivize
                audience engagement. When users actively participate in a brand's content, they become more invested in
                its success.
              </p>
              <p className="text-default-500">
                Consistent Brand Persona Maintaining a consistent brand persona across social media channels is
                essential for building trust and recognition. A cohesive visual identity, tone of voice, and messaging
                create a sense of reliability and familiarity. When the audience can easily identify a brand's content
                amidst the vast social media landscape, it strengthens the brand-consumer relationship. Consistency
                fosters trust, encouraging followers to engage without hesitation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualBlog;
