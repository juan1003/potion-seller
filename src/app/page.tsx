"use client"

import { useState } from "react"
import BadassForm from "./components/badassform"
import Card from "./components/card"

export default function Home() {
  const [name, setName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const submitMessage = async (name: string, subject: string, description: string) => {
    const response = await fetch('/api/contact', {
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, subject, description})
    });
  
    return await response.json();
  }

  return (
    <main className="flex min-h-screen flex-col items-center lg:justify-center p-4 lg:p-24 gap-4">
      <Card title="Hello and Welcome!">
        <p className='text-md py-2  text-stone-400 border-b-2 border-l-4 border-stone-700 my-4 pl-2 rounded-b'>My name is Juan De Jesus, nice to meet you!</p>
        <p className='text-md py-2  text-stone-400 border-b-2 border-l-4 border-stone-700 my-4 pl-2 rounded-b'>As a Puerto Rican software engineer with nearly a decade of experience (8 years), my journey began with a healthcare startup where I played a pivotal role as a founding engineer. In the early stages, I proposed a strategic approach: 'What if we prioritize making informed decisions, launch with two essential features, and concentrate on gaining traction?' Unfortunately, the response was insistent on shipping every feature at launch. Fast forward three years, the outcome was disheartening—no product, no users, and ultimately, bankruptcy.</p>
        <p className='text-md py-2  text-stone-400 border-b-2 border-l-4 border-stone-700 my-4 pl-2 rounded-b'>As a response to this experience, I am extending my services in technical leadership to early-stage startups. My motivation is rooted in a passion for building, and I aspire to collaborate with founders across various industries. I believe in preventing promising concepts from going to waste, only to be picked up by big tech. Let's work together to bring innovative ideas to fruition and ensure their success.</p>
      </Card>
      <Card title="Mission/Vision">
        <p className="text-md py-2  text-stone-400 border-b-2 border-l-4 border-stone-700 my-4 pl-2 rounded-b">
          I'm here to help early-stage startups kick off strong by providing solid technical leadership. My thing? Building cool stuff. I'm all about teaming up with founders to turn their great ideas into standout products.
        </p>
        <p className="text-md py-2  text-stone-400 border-b-2 border-l-4 border-stone-700 my-4 pl-2 rounded-b">
          Imagine a world where awesome ideas don't fizzle out but take off in the hands of the people who came up with them. I'm in to team up with founders, making sure their innovative ideas stay true to their roots and don't get scooped up by big tech. Let's make your startup journey a success! 🚀
        </p>
      </Card>
      <Card title="What I have to offer?">
        <p className="text-md py-2  text-stone-400 border-b-2 border-l-4 border-stone-700 my-4 pl-2 rounded-b">
          I have experience in designing, developing, and deploying software systems efficiently. I'm well-versed in platforms like Vercel and Netlify for quick launches and can also customize solutions using AWS with Docker containers. My skills cover the entire software development lifecycle—from detailed planning to timely solution deployment. I thrive as a team player in software development.
        </p>
      </Card>
      <Card title="My Skills">
        <p className="text-md py-2  text-stone-400 border-b-2 border-l-4 border-stone-700 my-4 pl-2 rounded-b">
          I bring a particular skill set to the table, yet I'm open to embracing less conventional abilities. My proficiency spans languages like JavaScript, TypeScript, SQL, HTML, CSS, PHP, and I'm diving into Go. I've tackled corporate languages like C# and the dotnet ecosystem, and I'm well-versed in modern frameworks like ReactJS and Angular. My hands-on experience includes Symfony, a PHP-based web framework. I'm familiar with deployment tools like Docker and configuring deployments in GitLab, Netlify, and Vercel.
        </p>
      </Card>
      <Card title="Contact Me">
        <BadassForm 
          name={name}
          subject={subject}
          description={description}
          setName={setName}
          setSubject={setSubject}
          setDescription={setDescription}
          onSubmit={() => submitMessage(name, subject, description).then(console.log).catch(console.error)}
        />
      </Card>
    </main>
  )
}
