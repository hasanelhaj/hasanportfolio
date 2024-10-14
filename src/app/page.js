"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Terminal } from 'lucide-react';

const HasanPortfolio = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const [isBooting, setIsBooting] = useState(true);
  const [bootText, setBootText] = useState('');
  const [visitors, setVisitors] = useState(0);
  const inputRef = useRef(null);
  const bootRef = useRef(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const sections = {
    home: "Welcome to Hasan El-haj's terminal.\nType 'help' for available commands.",
      about: "Results-driven Cybersecurity Professional with over 5 years of experience in cybersecurity and full-stack development. Proven expertise in enhancing cybersecurity posture by implementing advanced security measures, conducting thorough risk assessments, and optimizing vulnerability management processes. Strong familiarity with cybersecurity frameworks including NIST and ISO 27001. Skilled in analyzing complex data sets to identify trends and provide actionable insights that drive continuous improvement aligned with business objectives and regulatory requirements. Adept at fostering collaboration across cross-functional teams and effectively communicating with stakeholders to implement innovative solutions and best practices in secure coding.",
      skills: "• Threat Landscapes\n• Risk Assessment\n• NIST Compliance\n• Cybersecurity Operations\n• Vulnerability Management\n• Incident Response\n• Cross-Functional Teamwork\n• Continuous Monitoring\n• Regulatory Requirements",
      experience: `1. AI Security Software Engineer at Quantumverse AI (8/2024 - Present)
      • Developed and implemented robust AI security frameworks
      • Conducted vulnerability assessments and penetration testing
      • Designed and implemented privacy-preserving techniques
      • Collaborated with data scientists and engineers on secure AI algorithms

    2. Security Software Engineer at PGIP - Purdue Global Internship Program (1/2023 - 6/2024)
      • Conducted vulnerability assessments using OWASP ZAP
      • Optimized SQL queries, resulting in 25% decrease in database response time
      • Collaborated on full-stack development with React and Node.js
      • Participated in 20+ code reviews, reducing technical debt by 10%

    3. Software Engineer at Novalism (6/2019 - 1/2023)
      • Conducted security audits on 5 client applications
      • Developed 3 customized software prototypes using agile methodologies
      • Provided technical expertise to 10+ clients
      • Achieved 95% client satisfaction rate`,
      education: "• PG | Bachelor of Science in Cyber Security, Magna Cum Laude, 3.94 GPA (2024)\n• CC | Associate of Science in Computer Science, 3.9 GPA (2022)",
      certifications: "• Application Development Computer Programming Foundations Certificate (Cascadia College, June 2019)",
      awards: "• Magna Cum Laude\n• The Society for Collegiate Leadership and Achievement",
      languages: "• Arabic\n• English",
      contact: "Email: sehasanelhaj@gmail.com\nLinkedIn: linkedin.com/in/hasanelhaj\nPhone: 425-354-0302\nLocation: Bothell, WA",
      resume: `Hasan El-haj
    https://www.linkedin.com/in/hasanelhaj/
    Bothell, WA 4253540302 sehasanelhaj@gmail.com

    Professional Summary:
    Results-driven Cybersecurity Professional with over 5 years of experience in cybersecurity and full-stack development. Proven expertise in enhancing cybersecurity posture by implementing advanced security measures, conducting thorough risk assessments, and optimizing vulnerability management processes. Strong familiarity with cybersecurity frameworks including NIST and ISO 27001. Skilled in analyzing complex data sets to identify trends and provide actionable insights that drive continuous improvement aligned with business objectives and regulatory requirements. Adept at fostering collaboration across cross-functional teams and effectively communicating with stakeholders to implement innovative solutions and best practices in secure coding.

    Skills:
    THREAT LANDSCAPES, RISK ASSESSMENT, NIST COMPLIANCE, CYBERSECURITY OPERATIONS, VULNERABILITY MANAGEMENT, INCIDENT RESPONSE, CROSS-FUNCTIONAL TEAMWORK, CONTINUOUS MONITORING, REGULATORY REQUIREMENTS

    Experience:
    AI Security Software Engineer
    Quantumverse AI
    8/01/2024 - Present, Redmond, WA
    • Developed and implemented robust AI security frameworks that protect sensitive data and mitigate risks associated with adversarial attacks and data breaches, aligning with industry best practices and regulatory requirements.
    • Conducted vulnerability assessments and penetration testing to identify and address security weaknesses in AI models and systems, enhancing incident response and vulnerability management.
    • Designed and implemented privacy-preserving techniques to ensure compliance with data protection regulations, effectively safeguarding user privacy and optimizing cybersecurity operations.
    • Collaborated with data scientists and engineers to develop secure AI algorithms and models, fostering cross-functional collaboration and enhancing the overall cybersecurity posture of applications.

    Security Software Engineer
    PGIP- Purdue Global Internship Program
    1/01/2023 - 06/30/2024, Bothell, WA
    • Conducted vulnerability assessments utilizing tools like OWASP ZAP, identifying and resolving 5 medium-priority security issues to enhance cybersecurity measures and reduce risk exposure.
    • Assisted in optimizing SQL queries, resulting in a 25% decrease in average database response time, thereby improving operational efficiency and aligning with business objectives.
    • Collaborated on full-stack development with a focus on security features using React and Node.js, contributing to a 15% increase in application responsiveness and user security.
    • Participated in 20+ code reviews, suggesting improvements that led to a 10% reduction in technical debt and strengthened the underlying infrastructure for continuous monitoring and risk management.

    Software Engineer
    Novalism
    6/01/2019 - 1/01/2023, Bothell, WA
    • Conducted security audits on 5 client applications using static code analysis tools, identifying potential vulnerabilities that aided in enhancing adherence to cybersecurity frameworks such as NIST and ISO 27001.
    • Developed and presented 3 customized software prototypes utilizing agile methodologies, effectively addressing specific client security needs and aligning with long-term cybersecurity strategies.
    • Provided technical expertise on software products to 10+ clients, ensuring understanding of cybersecurity principles and fostering collaboration across diverse teams to optimize client solutions.
    • Offered support and troubleshooting, resulting in a 95% client satisfaction rate while applying risk assessment methodologies to enhance operational processes and incident response strategies.

    Certifications:
    Application Development Computer Programming Foundations Certificate
    Cascadia College, June 2019

    Awards:
    Magna Cum Laude
    The Society for Collegiate Leadership and Achievement

    Education:
    PG | Bachelor of Science In Cyber Security, Magna Cum Laude, 3.94 GPA, 2024
    CC | Associate of Science In Computer Science, 3.9 GPA, 2022

    Languages:
    • Arabic
    • English`,
      help: "Available commands:\n• about\n• skills\n• experience\n• education\n• certifications\n• awards\n• languages\n• contact\n• resume (displays full resume)\n• clear (clears the terminal)\n• exit (closes the session)"
    };


  const generateRandomHexLine = () => {
    const lineLength = Math.floor(windowSize.width / 16);
    return Array(lineLength).fill().map(() => Math.floor(Math.random() * 16).toString(16)).join('');
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setVisitors(prev => prev + 1);

    if (isBooting) {
      const lineHeight = 20;
      const maxLines = Math.ceil(windowSize.height / lineHeight);
      let lines = 0;
      const intervalId = setInterval(() => {
        if (lines < maxLines) {
          setBootText(prev => prev + generateRandomHexLine() + '\n');
          lines++;
          if (bootRef.current) {
            bootRef.current.scrollTop = bootRef.current.scrollHeight;
          }
        } else {
          clearInterval(intervalId);
          setTimeout(() => {
            setIsBooting(false);
            setOutput([{ type: 'output', text: sections.home }]);
          }, 1000);
        }
      }, 50);
      return () => clearInterval(intervalId);
    } else {
      inputRef.current?.focus();
    }
  }, [isBooting, windowSize]);

  const handleInput = (e) => {
    if (e.key === 'Enter') {
      const command = input.trim().toLowerCase();
      let response;

      if (sections[command]) {
        response = sections[command];
      } else if (command === 'clear') {
        setOutput([]);
        setInput('');
        return;
      } else if (command === 'exit') {
        response = "Closing session... Goodbye!";
      } else if (command === 'sudo show_stats') {
        response = `Total visitors: ${visitors}\nLast visit: ${new Date().toLocaleString()}`;
      } else {
        response = `Command not found: ${command}. Type 'help' for available commands.`;
      }

      setOutput([...output, { type: 'input', text: input }, { type: 'output', text: response }]);
      setInput('');

      if (command === 'exit') {
        setTimeout(() => setOutput([]), 2000);
      }
    }
  };

  if (isBooting) {
    return (
      <div ref={bootRef} className="w-screen h-screen bg-black text-white font-mono p-4 overflow-hidden">
        <pre className="whitespace-pre-wrap">{bootText}</pre>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen bg-black text-white font-mono p-4 flex flex-col">
      <div className="flex-grow overflow-auto mb-4">
        {output.map((item, index) => (
          <div key={index} className="mb-2">
            {item.type === 'input' ? (
              <div className="flex items-center">
                <span className="text-blue-400 mr-2">$</span>
                <span>{item.text}</span>
              </div>
            ) : (
              <pre className="whitespace-pre-wrap ml-4">{item.text}</pre>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <Terminal className="w-4 h-4 mr-2" />
        <span className="text-blue-400 mr-2">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInput}
          className="bg-transparent focus:outline-none flex-grow"
          autoFocus
        />
      </div>
    </div>
  );
};

export default HasanPortfolio;