import React, { useState } from "react";

function FortuneFinder() {
  const [name, setName] = useState("");
  const [zodiac, setZodiac] = useState("");
  const [dob, setDob] = useState("");
  const [clicked, setClicked] = useState(false);
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const commonProblems = [
    "You work hard but still don’t get results.",
    "You feel stuck in your career.",
    "You give your best but still fail.",
    "You always fall for the wrong person.",
    "You are scared to love again.",
    "You feel alone even in a relationship.",
    "You trust people, but they break it.",
    "You earn well but still feel poor.",
    "You are always struggling financially.",
    "You want to be rich but don’t know how.",
    "You want to make your family proud but feel lost.",
    "You compare yourself to others too much.",
    "You feel like you're not good enough.",
    "You want to change but can't.",
    "You overthink everything.",
    "You can't sleep due to stress.",
    "You feel emotionally drained.",
    "You can't let go of the past.",
    "You don’t know what you want in life.",
    "You feel like your life has no meaning.",
    "You study hard but still forget everything.",
    "You fear failure all the time.",
    "You get rejected again and again.",
    "You help everyone but no one helps you.",
    "You feel judged for who you are.",
    "You feel everything in life is temporary.",
    "You feel stuck while others move ahead."
  ];

  const solutions = {
    "You work hard but still don’t get results.": "Focus on strategy, not just effort. Take feedback & pivot. 💡",
    "You feel stuck in your career.": "Learn a new skill, talk to a mentor, update your resume. 🚀",
    "You give your best but still fail.": "Failure teaches more than success—keep refining. 🔁",
    "You always fall for the wrong person.": "Reflect on patterns, set boundaries, choose wisely. 🧠",
    "You are scared to love again.": "Heal first. Love when you're ready, not when you're lonely. ❤️",
    "You feel alone even in a relationship.": "Open up communication. Don't settle for silence. 🗣️",
    "You trust people, but they break it.": "Trust is earned. Learn and grow, but stay kind. 🌱",
    "You earn well but still feel poor.": "Track expenses, save smart, invest. Money = mindset. 💸",
    "You are always struggling financially.": "Upskill, budget, seek advice—take control step by step. 📈",
    "You want to be rich but don’t know how.": "Start small: side hustle, learn investing, read books. 📚",
    "You want to make your family proud but feel lost.": "Define your own path. Clarity brings confidence. 🔍",
    "You compare yourself to others too much.": "Your race is different. Progress > perfection. 🛤️",
    "You feel like you're not good enough.": "You are. Self-worth isn’t external—affirm it daily. 🌟",
    "You want to change but can't.": "Start with one habit. Change is gradual, not instant. ⌛",
    "You overthink everything.": "Write it down, talk it out, or take action. 📝",
    "You can't sleep due to stress.": "Meditation, journaling, or talking helps. 💤",
    "You feel emotionally drained.": "Say no more often. Recharge alone. 🧘‍♀️",
    "You can't let go of the past.": "Accept, forgive, move forward. The past doesn’t define you. 🕊️",
    "You don’t know what you want in life.": "Explore without pressure. Curiosity leads to purpose. 🔍",
    "You feel like your life has no meaning.": "Meaning is created. Help others, chase growth. ✨",
    "You study hard but still forget everything.": "Use spaced repetition and teach what you learn. 🧠",
    "You fear failure all the time.": "Act despite fear. Every failure is data. 🧪",
    "You get rejected again and again.": "Rejection redirects you. Stay persistent. 💪",
    "You help everyone but no one helps you.": "Set boundaries. Help, but don’t burn out. 🛡️",
    "You feel judged for who you are.": "Be authentic. Those who matter don’t judge. 💙",
    "You feel everything in life is temporary.": "Yes, and that’s why it's precious. Be present. ⏳",
    "You feel stuck while others move ahead.": "Focus inward. Your timing is unique. ⏰"
  };

  const getFortune = (e) => {
    e.preventDefault();
    setLoading(true);
    setShowSolution(false);
    setTimeout(() => {
      const randomProblem = commonProblems[Math.floor(Math.random() * commonProblems.length)];
      setProblem(randomProblem);
      setClicked(true);
      setLoading(false);
    }, 1500);
  };

  const getSolution = () => {
    setLoading(true);
    setTimeout(() => {
      setSolution(solutions[problem]);
      setShowSolution(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2>🔮 Fortune Finder</h2>
        <form onSubmit={getFortune} style={styles.form}>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />
          <select value={zodiac} onChange={(e) => setZodiac(e.target.value)} required style={styles.select}>
            <option value="">Select Your Zodiac Sign 🪐</option>
            <option value="Aries">♈ Aries</option>
            <option value="Taurus">♉ Taurus</option>
            <option value="Gemini">♊ Gemini</option>
            <option value="Cancer">♋ Cancer</option>
            <option value="Leo">♌ Leo</option>
            <option value="Virgo">♍ Virgo</option>
            <option value="Libra">♎ Libra</option>
            <option value="Scorpio">♏ Scorpio</option>
            <option value="Sagittarius">♐ Sagittarius</option>
            <option value="Capricorn">♑ Capricorn</option>
            <option value="Aquarius">♒ Aquarius</option>
            <option value="Pisces">♓ Pisces</option>
          </select>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            {loading ? "🔄 Thinking..." : "✨ Check My Fortune"}
          </button>
        </form>

        {clicked && (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <h3>😟 Your Struggle:</h3>
            <p style={{ fontWeight: "bold" }}>{problem}</p>
            {!showSolution && (
              <button onClick={getSolution} style={styles.solutionBtn}>
                {loading ? "🔄 Analyzing..." : "💡 Get Solution"}
              </button>
            )}
            {showSolution && (
              <>
                <h3>✅ Suggested Path:</h3>
                <p style={{ color: "#2e8b57" }}>{solution}</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "#f3f4f6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    background: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 0 10px rgba(0,0,0,0.15)",
    width: "90%",
    maxWidth: "400px",
    textAlign: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc"
  },
  select: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4f46e5",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold"
  },
  solutionBtn: {
    marginTop: "10px",
    padding: "10px",
    borderRadius: "8px",
    backgroundColor: "#10b981",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default FortuneFinder;
