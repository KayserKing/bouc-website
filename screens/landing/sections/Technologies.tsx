import { DiDocker, DiJava, DiNodejs } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { RiAngularjsFill, RiJavascriptFill, RiVuejsLine } from "react-icons/ri";
import { SiKubernetes } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="mt-8">
      <h1 className="text-2xl">Technology</h1>
      <div className="flex">
        <GrReactjs size={68} />
        <RiAngularjsFill size={68} />
        <RiVuejsLine size={68} />
        <DiNodejs size={68} />
        <DiJava size={68} />
        <RiJavascriptFill size={68} />
        <FaPython size={68} />
        <DiDocker size={68} />
        <SiKubernetes size={68} />
        <FaAws size={68} />
      </div>
    </div>
  );
};

export default Technologies;
