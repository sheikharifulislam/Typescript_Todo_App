import React, { useRef } from "react";
interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

export const InputField: React.FC<Props> = ({
    todo,
    setTodo,
    handleAdd,
}: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form
            className="input"
            onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur();
            }}
        >
            <input
                type="text"
                placeholder="Enter a task"
                className="input_box"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                ref={inputRef}
            />
            <button className="input_submit" type="submit">
                Go
            </button>
        </form>
    );
};
