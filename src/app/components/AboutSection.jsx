"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 space-y-1">
        <li><strong>Languages & Frameworks:</strong> Flutter, Dart, REST APIs, WebSockets, HTML5, CSS3, Bootstrap</li>
        <li><strong>State Management Tools:</strong> BLoC, GetX, Provider</li>
        <li><strong>Backend & Storage:</strong> Firebase (Auth, Firestore, Storage, Realtime Database), Hive, SQFlite</li>
        <li><strong>Tools & IDEs:</strong> Android Studio, Visual Studio Code (VS Code), Xcode, App Store Connect, TestFlight, Git, GitHub, Postman, Figma, Canva, Notion</li>
        <li><strong>Deployment:</strong> Apple AppStore, Google Play Store, Amazon AppStore, Netlify</li>
        <li><strong>Other:</strong> Data Structures & Algorithms (DSA)</li>
      </ul>
    )
    
  },
  {
    title: "Education",
    id: "education",
    content: (
<ul className="list-disc pl-2 space-y-1">
  <li><strong>BPharm Graduate</strong> – swapped pills for pixels and loving it</li>
  <li><strong>Kerala University of Health Sciences</strong> – pharmacy grad turned full-time coder</li>
</ul>

    
    ),
  },
  // {
  //   title: "Certifications",
  //   id: "certifications",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li></li>
  //       <li></li>
  //     </ul>
  //   ),
  // },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am an experienced mobile app developer with expertise in building cross-platform applications. Skilled in state management, third-party integrations, and database implementation. I am a quick learner, always eager to expand my knowledge and skill set. As a team player, I’m excited to collaborate with others to create amazing applications.
</p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
