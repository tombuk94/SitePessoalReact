import React from 'react';
//import './Section.css'; // garante o estilo dos cards

function Card({ icon, title, text }) {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>      
    </div>
  );
}

export default function Projects() {
  return (
    <section id="ClarizenProjects">
      <h1 data-aos="fade-down">Clarizen Projects</h1>

      <p data-aos="fade-in">
        “Great projects are built one clear step at a time.”<br />
        - Tomas Buk<br />
      </p>

      <div className="container">
        <hr data-aos="zoom-in" data-aos-delay="300" />
        <img id="Clarizen" src="imagens/AW.png" alt="Clarizen" />
      </div>
    

      {/* 🔽 SEÇÃO IMPLANTAÇÃO DE PROJETOS */}
      <div className="section">
        <h2>Project Implementation</h2>
        <p className="section-description">
          My deployments consist of building workflows within the software, optimizing processes, automating repetitive tasks, and generating a visualization of the project data.
        </p>
        <div className="card-container">
          <Card
            icon="🔍"
            title="Flow Optimization"
            text="Identify and eliminate bottlenecks in the current processes"
          />
          <Card
            icon="🔗"
            title="Intelligent Automation"
            text="Reduce manual tasks with customized automations"
          />
          <Card
            icon="📊"
            title="Data Visualization"
            text="Creation of intuitive dashboards for real-time monitoring"
          />
          <Card
            icon="⭐"
            title="Full Integration"
            text="Connection of systems to centralize information"
          />
        </div>
      </div>

      {/* 🔽 SEÇÃO IMPLANTAÇÃO DA SOLUÇÃO */}
      <div className="section">
        <h2>Implementing the Solution</h2>
        <div className="card-container">
          <Card
            icon="💡"
            title="Understanding the Flow"
            text="I analyze the client's current processes in detail to understand their specific needs and points for improvement."
          />
          <Card
            icon="⚙️"
            title="Customized Configuration"
            text="I translate the workflow to the platform, holding frequent validation meetings to ensure compatibility."
          />
          <Card
            icon="📘"
            title="Training and Documentation"
            text="I provide the client with practical training and detailed documentation on the system implemented."
          />
        </div>
      </div>

      {/* 🔽 SEÇÃO PROJECT PHASES */}
      <div className="section">
        <h2>Project Phases</h2>
        <p className="section-description">
          Each project follows a structured lifecycle, ensuring clarity, transparency, and consistent results.
        </p>
        <div className="card-container">
          <Card
            icon="📝"
            title="Planning"
            text="Definition of objectives, scope, and resources to guarantee alignment with the client’s vision."
          />
          <Card
            icon="🚀"
            title="Execution"
            text="Development of workflows, automation setup, and configuration of dashboards and integrations."
          />
          <Card
            icon="✅"
            title="Validation"
            text="Frequent feedback loops and testing to ensure the solution meets client expectations."
          />
          <Card
            icon="📈"
            title="Delivery"
            text="Final implementation, training sessions, and ongoing support for sustainable adoption."
          />
        </div>
      </div>
        
      {/* 🔽 CLIENTES */}
      <h2>Clients</h2>
      <div className="container">
        <div className="Logos">
          <img src="imagens/Siemens.png" alt="Siemens" rel="noopener noreferrer" />
          <img src="imagens/Siemens-Energy.png" alt="Siemens" />
          <img src="imagens/Alicorp.svg" alt="Alicorp" />
          <img src="imagens/Tereos.png" alt="Tereos" />
          <img src="imagens/GrupoGloria.png" alt="Grupo Gloria" />
          <img src="imagens/Cempro.jpg" alt="Cempro" />
          <img src="imagens/DosPinos.png" alt="Dos Pinos" />
          <img src="imagens/CloudTarget.svg" alt="Cloud Target" />
          <img src="imagens/MRS.jpg" alt="MRS Editorial" />
          <img src="imagens/Bladex.jpg" alt="Bladex" />
        </div>
      </div>
    </section>
  );
}
