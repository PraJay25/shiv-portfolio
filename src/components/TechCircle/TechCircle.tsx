import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const techStack = [
  { src: "/angular.png", label: "Angular" },
  { src: "/aws.png", label: "AWS" },
  { src: "/c-.png", label: "C++" },
  { src: "/c-sharp.png", label: "C-Sharp" },
  { src: "/docker.png", label: "Docker" },
  { src: "/java.png", label: "Java" },
  { src: "/js.png", label: "JavaScript" },
  { src: "/net.png", label: ".Net" },
  { src: "/React.png", label: "React" },
  { src: "/typescript.png", label: "Typescript" },
  { src: "/kafka.png", label: "Kafka" },
  { src: "/apache.png", label: "Apache" },
  { src: "/tenserflow.png", label: "Tenserflow" },
  { src: "/python.png", label: "Python" },
  { src: "/gpt.png", label: "Open AI" },
  { src: "/gcp.png", label: "GCP" },
  { src: "/relativity.png", label: "Relativity" },
  { src: "/kubernet.png", label: "Kubernetes" },
  { src: "/RabbitMQ.png", label: "RabbitMQ" },
  { src: "/git.png", label: "GIT" },
  { src: "/git2.png", label: "GitHub" },
  { src: "/Gitlab.png", label: "GitLab" },
  { src: "/cicd.png", label: "Jetkins" },
  { src: "/tailwind.png", label: "Tailwind" },
  { src: "/three.png", label: "Three" },
  { src: "/node.jpg", label: "Node" },
  { src: "/aspnet.jpg", label: "ASP.NET" },
  { src: "/MySQL.png", label: "MySQL" },
  { src: "/nextjs.png", label: "Next" },
  { src: "/jquery.png", label: "JQuery" },
  { src: "/json.png", label: "JSON" },
  { src: "/rest.png", label: "REST" },
  { src: "/svn.png", label: "SVN" },
  { src: "/express.webp", label: "Express" },
  { src: "/post.png", label: "Postgre" },
  { src: "/awss.webp", label: "AWS Services" },
  { src: "/chrome.png", label: "DevTools" },
  { src: "/open.png", label: "Open Source" },
  { src: "/golang.png", label: "Golang" },
  { src: "/css.png", label: "CSS" },
  { src: "/redis.png", label: "Redis" },
  { src: "/devops.png", label: "DevOps" },
  { src: "/Cloudflare.png", label: "Cloudflare" },
  { src: "/azure.png", label: "AZURE" },
  { src: "/nuget.png", label: "NuGet" },
  { src: "/Spring.png", label: "Spring" },
  { src: "/HTML5.png", label: "HTML" },
  { src: "/Cassandra.png", label: "Cassandra" },
  { src: "/Ubuntu.png", label: "Ubuntu" },
  { src: "/Material UI.png", label: "Material UI" },
  { src: "/Vue.js.png", label: "Vue" },
  { src: "/Swagger.png", label: "Swagger" },
  { src: "/Stack Overflow.png", label: "Stack Overflow" },
  { src: "/Bootstrap.png", label: "Bootstrap" },
  { src: "/GitHub Codespaces.png", label: "GitHub Codespaces" },
  { src: "/MongoDB.png", label: "MongoDB" },
];

const TechCircle = () => {
  const [visibleIcons, setVisibleIcons] = useState(techStack.slice(0, 5));
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIcons((prev) => {
        const newIcons = [
          ...prev.slice(1),
          techStack[(index + 5) % techStack.length],
        ];
        setIndex((prevIndex) => (prevIndex + 1) % techStack.length);
        return newIcons;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative flex items-center justify-center w-[400px] h-[400px]">
      {visibleIcons.map((tech, i) => (
        <motion.div
          key={tech.label}
          className="absolute transition-all"
          animate={{ opacity: i === 4 ? 0.5 : 1 }}
        >
          <Image
            src={tech.src}
            alt={tech.label}
            width={50}
            height={50}
            className="rounded-full transition-all"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default TechCircle;
