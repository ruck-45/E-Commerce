import { Button, Input, Textarea, Chip, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoIosCloseCircle } from "react-icons/io";
import axios from "axios";
import { getCookie } from "../../../utils/cookies";

const Create = () => {
  let apiUrl = process.env.REACT_APP_API_URL;
  if (process.env.NODE_ENV === "development") {
    apiUrl = process.env.REACT_APP_DEV_API_URL;
  }

  const token = getCookie("token");

  const colors = ["All", "White", "Beige", "Blue", "Brown", "Green", "Purple"];
  const topLavelCategory = ["Home"];
  const secondLavelCategory = ["Furniture", "Electronics", "Decorative"];
  const thirdLavelCategory = ["Carpets & Rugs", "Antiques"];

  const [activity, setActivity] = useState("");
  const [list, setList] = useState([]);
  const [skill, setSkill] = useState("");
  const [skillList, setSkillList] = useState([]);
  const [education, SetEducation] = useState("");
  const [educationList, SetEducationList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState({
    title: "",
    description: "",
    brand: "",
    color: "",
    price: "",
    discountPrice: "",
    totalQuantity: "",
    topLavelCategory: "",
    secondLavelCategory: "",
    thirdLavelCategory: "",
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  // const AddEducation = (e) => {
  //   e.preventDefault();

  //   SetEducationList((educationList) => {
  //     const update = [...educationList, education];
  //     console.log(update);
  //     return update;
  //   });
  //   SetEducation("");
  // };

  const AddActivity = (e) => {
    e.preventDefault();

    setList((list) => {
      const updatedList = [...list, activity];
      console.log(updatedList);
      return updatedList;
    });
    setActivity("");
  };

  // const addSkill = (e) => {
  //   e.preventDefault();
  //   setSkillList((skillList) => {
  //     const updatedListSkill = [...skillList, skill];
  //     console.log(updatedListSkill);
  //     return updatedListSkill;
  //   });
  //   setSkill("");
  // };

  const removeData = (i) => {
    const updatedList = list.filter((elem, idx) => {
      return i != idx;
    });
    setList(updatedList);
  };

  const removeSkill = (i) => {
    const updatedSkilllist = skillList.filter((elem, idx) => {
      return i != idx;
    });
    setSkillList(updatedSkilllist);
    console.log(updatedSkilllist);
  };

  const removeEducation = (i) => {
    const update = educationList.filter((elem, idx) => {
      return i != idx;
    });
    SetEducationList(update);
  };
  const handleClick = (event, i) => {
    event.preventDefault(); // Prevents the default behavior (e.g., page refresh)

    // Call your removeData function with the index
    removeData(i);
  };
  const handleNextClick = (event, i) => {
    event.preventDefault(); // Prevents the default behavior (e.g., page refresh)

    // Call your removeData function with the index
    removeSkill(i);
  };

  const handleEducation = (event, i) => {
    event.preventDefault();
    removeEducation(i);
  };

  async function handleSubmitForm(e) {
    e.preventDefault();
    setLoading(true);

    if (
      !input.department ||
      !input.employmentType ||
      !input.exp ||
      !input.industryType ||
      skillList.length === 0 ||
      educationList.length === 0 ||
      list.length === 0
    ) {
      setLoading(false);
      toast.error("Please Fill the Form Completely");
      return;
    }

    const data = {
      ...input,
      skills: { skills: skillList },
      education: { education: educationList },
      profile: { profile: list },
    };

    try {
      const response = await axios.post(`${apiUrl}/careers/createjob`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.data.success) {
        setLoading(false);
        return toast.error("Job Creation Failed");
      }

      toast.success("Job Creation Successful");
      setInput({
        title: "",
        description: "",
        brand: "",
        color: "",
        price: "",
        discountPrice: "",
        totalQuantity: "",
        topLavelCategory: "",
        secondLavelCategory: "",
        thirdLavelCategory: "",
      });
      setSkillList([]);
      SetEducationList([]);
      setList([]);
    } catch (error) {
      console.log(error);
      toast.error("Application Creation Failed");
    }

    setLoading(false);
  }

  return (
    <div className="flex flex-col items-center justify-between bg-center bg-no-repeat bg-cover">
      <div className="flex items-center justify-center p-[2rem]">
        <h1 className="text-3xl font-bold">Post Your Product</h1>
      </div>

      <form
        noValidate
        onSubmit={handleSubmitForm}
        action=""
        className="flex flex-col gap-[1rem] md:w-[45rem] w-[20rem]"
      >
        <div>
          <label htmlFor="">
            Title <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            name="title"
            id="title"
            size="sm"
            variant="bordered"
            color="primary"
            value={input.title}
            onChange={handleUserInput}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div>
          <label htmlFor="">
            Product Description <span className="text-red-700">*</span>
          </label>
          <Textarea
            variant="bordered"
            name="description"
            id="description"
            color="primary"
            size="sm"
            value={input.description}
            onChange={handleUserInput}
          />
        </div>

        <div>
          <label htmlFor="">
            Highlights (MSP) <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-row items-center justify-center gap-2 ">
            <Input
              type="text"
              variant="bordered"
              color="primary"
              name="Profile"
              id="Profile"
              size="sm"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button className="text-white bg-blue-500 py-[0.7rem] px-[1rem] rounded-xl" onClick={AddActivity}>
              Add
            </button>
          </div>
          <div className="flex gap-x-[0.5rem] gap-y-[0.8rem] flex-wrap mt-[1rem]">
            {list.map((data, i) => (
              <div className="flex">
                <Chip variant="shadow" size="lg" key={i}>
                  {data}
                </Chip>
                <IoIosCloseCircle
                  className="text-red-500 text-xl cursor-pointer translate-x-[-0.7rem] translate-y-[-0.2rem] bg-white rounded-full"
                  onClick={(event) => handleClick(event, i)}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="">
            Brand <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            name="brand"
            id="brand"
            value={input.brand}
            onChange={handleUserInput}
            size="sm"
            variant="bordered"
            color="primary"
            onKeyDown={handleKeyPress}
          />
        </div>
        <div>
          <label htmlFor="">
            Color <span className="text-red-500">*</span>
          </label>

          <Select
            defaultSelectedKeys={["Blue"]}
            disallowEmptySelection
            isRequired
            className="min-w-full"
            size="sm"
            variant="bordered"
            color="primary"
            name="color"
            id="color"
            value={input.color}
            onChange={handleUserInput}
          >
            {colors.map((data, index) => (
              <SelectItem key={data} value={data}>
                {data}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div>
          <label htmlFor="">
            Price <span className="text-red-500">*</span>
          </label>
          <Input
            type="number"
            name="price"
            id="price"
            size="sm"
            variant="bordered"
            color="primary"
            value={input.price}
            onChange={handleUserInput}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div>
          <label htmlFor="">
            discountPrice <span className="text-red-500">*</span>
          </label>
          <Input
            type="number"
            name="discountPrice"
            id="discountPrice"
            size="sm"
            variant="bordered"
            color="primary"
            value={input.discountPrice}
            onChange={handleUserInput}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div>
          <label htmlFor="">
            Total Quantity <span className="text-red-500">*</span>
          </label>
          <Input
            type="number"
            name="totalQuantitye"
            id="totalQuantity"
            size="sm"
            variant="bordered"
            color="primary"
            value={input.totalQuantity}
            onChange={handleUserInput}
            onKeyDown={handleKeyPress}
          />
        </div>
        {/* <div>
          <label htmlFor="">
            Education <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-row items-center justify-center gap-2 ">
            <Input
              type="text"
              variant="bordered"
              color="primary"
              name="Education"
              id="Education"
              size="sm"
              value={education}
              onChange={(e) => SetEducation(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button className="text-white bg-blue-500 py-[0.7rem] px-[1rem] rounded-xl" onClick={AddEducation}>
              Add
            </button>
          </div>
          <div className="flex gap-x-[0.5rem] gap-y-[0.8rem] flex-wrap mt-[1rem]">
            {educationList.map((data, i) => (
              <div className="flex">
                <Chip variant="shadow" size="lg" key={i}>
                  {data}
                </Chip>
                <IoIosCloseCircle
                  className="text-red-500 text-xl cursor-pointer translate-x-[-0.7rem] translate-y-[-0.2rem] bg-white rounded-full"
                  onClick={(event) => handleEducation(event, i)}
                />
              </div>
            ))}
          </div>
        </div> */}
        <div>
          <label htmlFor="">
            topLavelCategory <span className="text-red-500">*</span>
          </label>
          <Select
            defaultSelectedKeys={["Full-time"]}
            disallowEmptySelection
            isRequired
            className="min-w-full"
            size="sm"
            variant="bordered"
            color="primary"
            name="topLavelCategory"
            id="topLavelCategory"
            value={input.topLavelCategory}
            onChange={handleUserInput}
          >
            {topLavelCategory.map((data, index) => (
              <SelectItem key={data} value={data}>
                {data}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div>
          <label htmlFor="">
            secondLavelCategory <span className="text-red-500">*</span>
          </label>
          <Select
            defaultSelectedKeys={["In-office"]}
            disallowEmptySelection
            isRequired
            className="min-w-full"
            size="sm"
            variant="bordered"
            color="primary"
            name="secondLavelCategory"
            id="secondLavelCategory"
            value={input.secondLavelCategory}
            onChange={handleUserInput}
          >
            {secondLavelCategory.map((data, index) => (
              <SelectItem key={data} value={data}>
                {data}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div>
          <label htmlFor="">
            thirdLavelCategory <span className="text-red-500">*</span>
          </label>
          <Select
            defaultSelectedKeys={["Entry-level"]}
            disallowEmptySelection
            isRequired
            className="min-w-full"
            size="sm"
            variant="bordered"
            color="primary"
            name="thirdLavelCategory"
            id="thirdLavelCategory"
            value={input.thirdLavelCategory}
            onChange={handleUserInput}
          >
            {thirdLavelCategory.map((data, index) => (
              <SelectItem key={data} value={data}>
                {data}
              </SelectItem>
            ))}
          </Select>
          </div>
        {/* <div>
          <label htmlFor="">
            Images <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-row items-center justify-center gap-2">
            <Input
              type="file"
              name="skill"
              id="skill"
              size="sm"
              variant="bordered"
              color="primary"
              value={skill}
              onChange={(event) => setSkill(event.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button className="text-white bg-blue-500 py-[0.8rem] px-[1rem] rounded-xl" onClick={addSkill}>
              Add
            </button>
          </div>
          <div className="flex gap-x-[0.5rem] gap-y-[0.8rem] flex-wrap mt-[1rem]">
            {skillList?.map((data, i) => (
              <div className="flex">
                <Chip variant="shadow" size="lg" key={i}>
                  {data}
                </Chip>
                <IoIosCloseCircle
                  className="text-red-500 text-xl cursor-pointer translate-x-[-0.7rem] translate-y-[-0.2rem] bg-white rounded-full"
                  onClick={(event) => handleNextClick(event, i)}
                />
              </div>
            ))}
          </div>
        </div> */}
        <div className="flex flex-col items-center justify-between p-[2rem]">
          <Button
            variant="shadow"
            className="w-[10rem] py-[1rem] px-[2rem] text-white bg-blue-500"
            type="submit"
            isLoading={loading}
          >
            Submit
          </Button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default Create;
