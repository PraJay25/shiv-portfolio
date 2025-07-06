"use client";

import React, { useEffect, useRef } from "react";

const images = [
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
  { src: "/tenserflow.png", label: "TensorFlow" },
  { src: "/python.png", label: "Python" },
  { src: "/gpt.png", label: "Open AI" },
  { src: "/gcp.png", label: "GCP" },
  { src: "/relativity.png", label: "Relativity" },
  { src: "/kubernet.png", label: "Kubernetes" },
  { src: "/RabbitMQ.png", label: "RabbitMQ" },
  { src: "/git.png", label: "GIT" },
  { src: "/git2.png", label: "GitHub" },
  { src: "/Gitlab.png", label: "GitLab" },
  { src: "/cicd.png", label: "Jenkins" },
  { src: "/tailwind.png", label: "Tailwind" },
  { src: "/three.png", label: "Three.js" },
  { src: "/node.jpg", label: "Node.js" },
  { src: "/aspnet.jpg", label: "ASP.NET" },
  { src: "/MySQL.png", label: "MySQL" },
  { src: "/nextjs.png", label: "Next.js" },
  { src: "/jquery.png", label: "JQuery" },
  { src: "/json.png", label: "JSON" },
  { src: "/rest.png", label: "REST" },
  { src: "/svn.png", label: "SVN" },
  { src: "/express.webp", label: "Express" },
  { src: "/post.png", label: "PostgreSQL" },
  { src: "/awss.webp", label: "AWS Services" },
  { src: "/chrome.png", label: "DevTools" },
  { src: "/open.png", label: "Open Source" },
  { src: "/golang.png", label: "Golang" },
  { src: "/css.png", label: "CSS" },
  { src: "/redis.png", label: "Redis" },
  { src: "/devops.png", label: "DevOps" },
  { src: "/Cloudflare.png", label: "Cloudflare" },
  { src: "/azure.png", label: "Azure" },
  { src: "/nuget.png", label: "NuGet" },
  { src: "/Spring.png", label: "Spring" },
  { src: "/HTML5.png", label: "HTML5" },
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

const GlobeCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current && (window as any).TagCanvas) {
      try {
        (window as any).TagCanvas.Start("myCanvas", "tags", {
          textColour: "#ffffff",
          outlineColour: "#00ffff",
          reverse: true,
          depth: 0.9,
          maxSpeed: 0.05,
          minSpeed: 0.01,
          wheelZoom: false,
          shuffleTags: true,
          shape: "sphere",
          zoom: 1,
          noSelect: true,
          textHeight: 10,
          imageMode: "both",
          imagePosition: "top",
          imageScale: 0.1,
          initial: [0.1, -0.1],
        });
      } catch (e) {
        console.error("TagCanvas error:", e);
      }
    }

    return () => {
      if ((window as any).TagCanvas) {
        (window as any).TagCanvas.Delete("myCanvas");
      }
    };
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-8 relative">
      {/* ✅ Canvas for rendering sphere */}
      <canvas id="myCanvas" ref={canvasRef} width={800} height={600} />

      {/* ✅ Hidden tag list used by TagCanvas */}
      <div style={{ display: "none" }}>
        <ul id="tags">
          {images.map((img, i) => (
            <li key={i}>
              <a href="#">
                <img src={img.src} alt={img.label} />
                {img.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GlobeCanvas;
