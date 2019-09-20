const TalkWithNpc = (msg = "") => {
  if (msg.endsWith("?")) return "Sure.";
  if (msg.endsWith("?!")) return "Calm down, I know what I'm doing!";
  if (msg.endsWith("!")) return "Whoa, chill out!";
  if (msg === "") return "Fine. Be that way!";
  else return "Whatever.";
};

export default TalkWithNpc;
