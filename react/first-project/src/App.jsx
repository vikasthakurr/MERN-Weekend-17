import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [activeSection, setActiveSection] = useState("react");

  useEffect(() => {
    console.log("Component rendered or count changed:", count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  const sections = {
    react: {
      title: "What is React?",
      icon: "⚛️",
      content: [
        "JavaScript library for building user interfaces",
        "Developed by Facebook (Meta) in 2013",
        "Component-Based Architecture",
        "Virtual DOM for efficient rendering",
        "Declarative UI programming",
        "Unidirectional Data Flow",
      ],
    },
    babel: {
      title: "Babel - JavaScript Compiler",
      icon: "🔄",
      content: [
        "Transpiles modern JavaScript (ES6+) and JSX",
        "Converts JSX to React.createElement() calls",
        "Ensures browser compatibility",
        'Example: <h1>Hello</h1> → React.createElement("h1", null, "Hello")',
        "Parsing → Transformation → Code Generation",
      ],
    },
    jsx: {
      title: "JSX - JavaScript XML",
      icon: "📝",
      content: [
        "HTML-like syntax in JavaScript",
        "Makes code more readable",
        "Use className instead of class",
        "Use camelCase for attributes (onClick, onChange)",
        "JavaScript expressions in curly braces {}",
        "Must return single parent element or Fragment",
      ],
    },
    fiber: {
      title: "React Fiber - Reconciliation Engine",
      icon: "🧵",
      content: [
        "New reconciliation algorithm (React 16+)",
        "Incremental rendering (breaking work into chunks)",
        "Priority scheduling for updates",
        "Pause, abort, or reuse work",
        "Keeps UI responsive during heavy computations",
        "Render Phase (interruptible) + Commit Phase",
      ],
    },
    components: {
      title: "Components - Building Blocks",
      icon: "🧩",
      content: [
        "Reusable pieces of UI",
        "Functional Components (modern approach)",
        "Class Components (legacy)",
        "Accept props and return React elements",
        "Can be nested and composed",
        "PascalCase naming convention",
      ],
    },
    virtualdom: {
      title: "Virtual DOM",
      icon: "🌳",
      content: [
        "Lightweight copy of actual DOM in memory",
        "JavaScript object representation",
        "Diffing: Compares new vs old Virtual DOM",
        "Reconciliation: Calculates minimum changes",
        "Batching: Updates only changed parts",
        "Faster performance, less DOM manipulation",
      ],
    },
    props: {
      title: "Props - Component Data",
      icon: "📦",
      content: [
        "Arguments passed to components",
        "Read-only (immutable)",
        "Parent to child data flow",
        "Can be any data type",
        'Example: <Greeting name="John" age={25} />',
        "Unidirectional data flow",
      ],
    },
    state: {
      title: "State - Component Memory",
      icon: "💾",
      content: [
        "Data that changes over time",
        "Mutable (can be updated)",
        "Triggers re-render when updated",
        "Private to component",
        "Managed with useState hook",
        "Asynchronous updates",
      ],
    },
    hooks: {
      title: "React Hooks",
      icon: "🪝",
      content: [
        "useState: Manage component state",
        "useEffect: Handle side effects",
        "useContext: Access context values",
        "useReducer: Complex state logic",
        "useMemo: Memoize values",
        "useCallback: Memoize functions",
        "useRef: Access DOM or persist values",
      ],
    },
  };

  return (
    <div className="app-wrapper">
      <div className="app-container">
        {/* Hero Section */}
        <div className="hero-section">
          <h1 className="app-title">⚛️ React Fundamentals</h1>
          <p className="subtitle">Interactive Guide to Core Concepts</p>
        </div>

        {/* Interactive Counter Demo */}
        <div className="counter-demo">
          <h2 className="section-heading">Live Demo: useState Hook</h2>
          <div className="counter-card">
            <p className="counter-label">Counter Value</p>
            <p className="counter-value">{count}</p>
          </div>

          <div className="button-container">
            <button onClick={handleClick} className="increment-button">
              Increment Counter
            </button>
          </div>

          {count > 0 && (
            <div className="status-message status-positive">
              <p>
                🎉 You clicked {count} {count === 1 ? "time" : "times"}!
              </p>
            </div>
          )}

          {count === 0 && (
            <div className="status-message status-zero">
              <p>🎯 Click the button to start counting</p>
            </div>
          )}
        </div>

        {/* Concept Navigation */}
        <div className="concepts-section">
          <h2 className="section-heading">Explore React Concepts</h2>

          <div className="concept-tabs">
            {Object.keys(sections).map((key) => (
              <button
                key={key}
                className={`concept-tab ${
                  activeSection === key ? "active" : ""
                }`}
                onClick={() => setActiveSection(key)}
              >
                <span className="tab-icon">{sections[key].icon}</span>
                <span className="tab-text">
                  {sections[key].title.split(" - ")[0]}
                </span>
              </button>
            ))}
          </div>

          <div className="concept-content">
            <div className="concept-header">
              <span className="concept-icon">
                {sections[activeSection].icon}
              </span>
              <h3>{sections[activeSection].title}</h3>
            </div>
            <ul className="concept-list">
              {sections[activeSection].content.map((item, index) => (
                <li key={index} className="concept-item">
                  <span className="bullet">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="features-grid">
          <h2 className="section-heading">Why React?</h2>
          <div className="grid-container">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h4>Fast</h4>
              <p>Virtual DOM ensures optimal performance</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h4>Flexible</h4>
              <p>Works with any tech stack</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">♻️</div>
              <h4>Reusable</h4>
              <p>Component-based architecture</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h4>Community</h4>
              <p>Large ecosystem and support</p>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="info-section">
          <h3 className="info-title">What You've Learned</h3>
          <ul className="info-list">
            <li>
              <strong>Component:</strong> App is a functional component
            </li>
            <li>
              <strong>State:</strong> count is managed with useState hook
            </li>
            <li>
              <strong>Effect:</strong> useEffect logs when count changes
            </li>
            <li>
              <strong>JSX:</strong> HTML-like syntax compiled by Babel
            </li>
            <li>
              <strong>Event:</strong> Button click updates state
            </li>
            <li>
              <strong>Re-render:</strong> Component re-renders when state
              changes
            </li>
            <li>
              <strong>Virtual DOM:</strong> React efficiently updates only what
              changed
            </li>
            <li>
              <strong>CSS Classes:</strong> Styles are separated in App.css file
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
