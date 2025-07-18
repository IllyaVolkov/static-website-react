import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

type ButtonGroupProps = {
  next?: () => void;
  previous?: () => void;
};

const ButtonGroup = ({ next, previous }: ButtonGroupProps) => {
  return (
    <div className="flex items-center gap-2 mx-auto">
      <button
        aria-label="play_icon"
        className="hover:text-secondary text-neutral-200 hover:bg-[#f3f3f3bc] rounded-full p-2"
        onClick={previous}
      >
        <KeyboardBackspaceOutlinedIcon className="text-3xl " />
      </button>
      <button
        aria-label="play_icon"
        className="hover:text-secondary text-neutral-200 rotate-180  hover:bg-[#f3f3f3bc] rounded-full p-2"
        onClick={next}
      >
        <KeyboardBackspaceOutlinedIcon className="text-3xl " />
      </button>
    </div>
  );
};

export default ButtonGroup;
