import { useState } from "react";
import DigitInput from "./DigitalInput";
import Confetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks";

const Unlock = () => {
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isDisplay, setIsDisplay] = useState(false);
  const { width, height } = useWindowSize();

  const handleCheckCode = (result: boolean) => {
    setIsCorrect(result);
    setIsDisplay(true);
    // if (!result) {
    //   // Reset the error message after 5 seconds
    //   setTimeout(() => {
    //     setIsCorrect(false);
    //     setIsDisplay(false);
    //   }, 1000);
    // }
  };

  const Congrats = () => {
    return (
      <div
        style={{
          textAlign: "center",
          animation: "pop 0.6s ease-out",
        }}
      >
        <h1>Congratulations! </h1>
        <h1>You've unlocked your bonus prize!</h1>

        <style>
          {`
          @keyframes pop {
            0% { transform: scale(0.5); opacity: 0; }
            60% { transform: scale(1.2); opacity: 1; }
            100% { transform: scale(1); }
          }
        `}
        </style>
      </div>
    );
  };

  const Proceed = () => {
    return (
      <div
        style={{
          display: "flex-inline",
          textAlign: "center",
          animation: "pop 0.6s ease-out",
        }}
      >
        <h1>Proceed to claim your bonus prize!</h1>
        <img
          style={{ maxWidth: "30vw", maxHeight: "30vh", overflow: "hidden" }}
          src="/prize.png"
          alt="Proceed"
        />
      </div>
    );
  };

  const WrongCode = () => {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Wrong code! Try Again❌</h1>
      </div>
    );
  };

  return (
    <div
      style={{
        backgroundImage: "url(/Picture1.png)",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isCorrect && (
        <Confetti width={width * 0.99 ?? 0} height={height * 0.99 ?? 0} />
      )}

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "3rem",
            left: "3rem",
          }}
        >
          <img
            style={{ maxWidth: "30vw", maxHeight: "30vh", overflow: "hidden" }}
            src="/Picture3.png"
            alt="Unlock"
          />
        </div>
        <div className="unlock-header">
          {isCorrect ? (
            <Congrats />
          ) : (
            <img
              style={{
                maxWidth: "40vw",
                maxHeight: "40vh",
                overflow: "hidden",
              }}
              src="/Picture2.png"
              alt="Unlock"
            />
          )}
        </div>

        <div style={{ display: "flex", gap: "0.5rem" }}>
          <DigitInput onCheckCode={handleCheckCode} isDisabled={isCorrect} />
        </div>
        <div>
          {isDisplay && (
            <div style={{ marginTop: "1rem", fontWeight: "bold" }}>
              {isCorrect ? <Proceed /> : <WrongCode />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Unlock;
