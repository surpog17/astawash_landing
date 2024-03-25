import React from "react";
import Pagination from "../../Components/Ui/Pagination";
import usePagination from "../../Components/Ui/Paginator";
import Testimonial from "../../Components/Ui/Testimonial";

export default function index() {
  const testimonialsData = [
    {
      userImage:
        "https://bc3-production-assets-cdn.basecamp-static.com/3974505/people/BAhpBLHxOQI=--67523325bed7732d9eb55e07eca29d87c3009b6b/avatar?v=1",
      userName: "Company 1",
      description:
        "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
      date: "January 2020 - December 2022",
      role: "Front End Developer",
    },
    {
      userImage:
        "https://bc3-production-assets-cdn.basecamp-static.com/3974505/people/BAhpBBXpQAI=--8bf290b3b64bc749cc0dde62a3a4a55ab0e6e7af/avatar?v=1",
      userName: "Company 2",
      description:
        "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
      date: "March 2018 - November 2019",
    },
    {
      userImage:
        "https://s3-alpha-sig.figma.com/img/1d62/ed7e/0df463b96e189800544e8f44b32f4f3c?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EUwjQVaZqApUWWNrIH1PC-033ei92p42Zd8OHAGE8YB9gpE8ydwmq1",
      userName: "Company 2",
      description:
        "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on users that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
      date: "March 2018 - November 2019",
      role: "Front End Developer",
    },
    {
      userImage:
        "https://s3-alpha-sig.figma.com/img/1d62/ed7e/0df463b96e189800544e8f44b32f4f3c?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EUwjQVaZqApUWWNrIH1PC-033ei92p42Zd8OHAGE8YB9gpE8ydwmqKfnWo1Lx1iFXeekFS67MShz-v9zbuJB2OzXpOM7rqMNzkS9cnH8nr5vPqkA9bYVQiGa1jhoHnz7~3eosu1GukoEp2BUItILIWK6FdhfOLSiQUc4oM33qUKJh6xQsGwdCwjVJEFb-dJQUcpPgSERjvn0OTMs4Eg~D4nDSApw-1zsq5Yz25Rwoed6duuqmLldC0ytNwQXrDalZH6FzWkcr~nn9wWw9muq-SSXqTwMR5UvAWmJOLDCZcFcD3~wMqb3WHEmZnNvHgPyfq~YjxcZRA4-iasI3Dlucg__",
      userName: "Company 2",
      description:
        "Led development initiatives and collaborated with cross-functional teams.",
      date: "March 2018 - November 2019",
      role: "Front End Developer",
    },
    {
      userImage:
        "https://bc3-production-assets-cdn.basecamp-static.com/3974505/people/BAhpBABqFgI=--0b066dc1ac77479d537719d8ddd68bbdd2608f47/avatar?v=1",
      userName: "Company 2",
      description:
        "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on users that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
      date: "March 2018 - November 2019",
      role: "Front End Developer",
    },
  ];
  let [page, setPage] = React.useState(1);
  const PER_PAGE = 1;
  const count = Math.ceil(testimonialsData?.length / PER_PAGE);
  const currentData = usePagination(testimonialsData, PER_PAGE);
  const handleChange = (p) => {
    setPage(p);
    currentData.jump(p);
  };
  return (
    <div
      id="testimonials"
      className="bg-[#eff0f5] md:min-h-screen md:px-32 px-5 py-10"
    >
      <div className="  items-center justify-between py-8">
        <div className="">
          <div className="border-t-[2px] border-gray-200"></div>
          <div className="flex gap-2 font-poppins items-center">
            <span className="text-xs font-semibold mb-4 text-primary">04</span>
            <h1 className="text-md font-bold mb-4 text-primary">Testimonial</h1>
          </div>
          <div className="flex gap-2 font-libre items-center w-96">
            <span className="font-semibold mb-4 text-[#071033] text-3xl">
              Through collaborations and partnerships, we produce best
              solutions.
            </span>
          </div>
        </div>

        <div className="gap-8">
          {currentData?.currentData()?.map((testimonial, index) => (
            <Testimonial
              key={index}
              index={index}
              userImage={testimonial.userImage}
              userName={testimonial.userName}
              description={testimonial.description}
              date={testimonial.date}
              role={testimonial.role}
            />
          ))}
        </div>

        {count > 1 && (
          <div className="flex justify-between mt-3 text-black">
            <div className="text-lg flex gap-3 font-poppins">
              <div>{page}</div>-<div>{count}</div>
            </div>
            <Pagination count={count} page={page} onChange={handleChange} />
          </div>
        )}
      </div>
    </div>
  );
}
