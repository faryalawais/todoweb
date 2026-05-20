import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import TaskInputForm from "../components/TaskInputForm";

vi.mock("../supabaseClient", () => ({
  supabase: {
    from: vi.fn().mockReturnValue({
      insert: vi.fn().mockResolvedValue({ data: [{ id: 1, title: "Test Task" }], error: null }),
    }),
  },
}));

describe("TaskInputForm", () => {
  test("adds a new task with valid title and description", async () => {
    render(<TaskInputForm onTaskAdded={vi.fn()} />);
    fireEvent.change(screen.getByPlaceholderText("Task Title"), { target: { value: "Test Task" } });
    fireEvent.change(screen.getByPlaceholderText("Task Description"), { target: { value: "Description" } });
    fireEvent.click(screen.getByText("Add Task"));
    expect(await screen.findByText("Task added successfully!")).toBeInTheDocument();
  });

  test("shows error when title is empty", async () => {
    render(<TaskInputForm onTaskAdded={vi.fn()} />);
    fireEvent.click(screen.getByText("Add Task"));
    expect(await screen.findByText("Task title is required.")).toBeInTheDocument();
  });
});
