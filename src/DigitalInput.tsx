import { useRef } from "react";

interface DigitInputProps {
  onCheckCode: (isCorrect: boolean) => void;
  isDisabled?: boolean;
}

const DigitInput = ({ onCheckCode, isDisabled }: DigitInputProps) => {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleInput = (index: number, e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    // Allow only digits 1-9
    input.value = input.value.replace(/[^1-9]/g, "").slice(0, 1);

    if (input.value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const input = inputsRef.current[index];

    if (e.key === "Backspace") {
      if (input?.value === "") {
        const prevInput = inputsRef.current[index - 1];
        if (prevInput) {
          prevInput.focus();
          prevInput.value = "";
          e.preventDefault();
        }
      }
    }

    if (e.key === "Enter") {
      const code = inputsRef.current.map((input) => input?.value).join("");
      const isCorrect = code === "1963";
      if (!isCorrect) {
        // clear all input values and focus first
        inputsRef.current.forEach((input) => {
          if (input) input.value = "";
        });
        inputsRef.current[0]?.focus();
      }
      onCheckCode(isCorrect);
    }
  };

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {[0, 1, 2, 3].map((i) => (
        <input
          key={i}
          ref={(el) => (inputsRef.current[i] = el)}
          type="text"
          inputMode="numeric"
          pattern="[1-9]"
          maxLength={1}
          disabled={isDisabled ? isDisabled : false}
          style={{
            width: "6rem",
            height: "6rem",
            fontSize: "3rem",
            textAlign: "center",
            fontWeight: "bold",
            border: "none",
            backgroundColor: "transparent",
            backgroundImage: "url('inputBg.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: isDisabled ? "lightgrey" : "#222",
            outline: "none",
          }}
          onInput={(e) => handleInput(i, e)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          autoComplete="off"
        />
      ))}
    </div>
  );
};

export default DigitInput;
