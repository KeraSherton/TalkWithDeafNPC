import TalkWithNpc from "./TalkWithNpc";
// Bob answers 'Sure.' if you ask him a question.

// He answers 'Whoa, chill out!' if you yell at him.

// He retorts 'Calm down, I know what I'm doing!' if you yell a question at him.

// He says 'Fine. Be that way!' if you address him without actually saying anything.

// He answers 'Whatever.' to anything else.

it("good answer for question", () => {
  expect(TalkWithNpc("how are you?")).toBe("Sure.");
});

it("good answer for yell at him", () => {
  expect(TalkWithNpc("how are you!")).toBe("Whoa, chill out!");
});

it("good answer for yell a question", () => {
  expect(TalkWithNpc("how are you?!")).toBe(
    "Calm down, I know what I'm doing!"
  );
});

it("good answer for nothing", () => {
  expect(TalkWithNpc("")).toBe("Fine. Be that way!");
});

it("good answer for anything", () => {
  expect(TalkWithNpc("asdasdasd")).toBe("Whatever.");
});
