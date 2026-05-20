import { render, fireEvent, waitFor } from "@testing-library/react";
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
  it("should add a new task with valid title and description", async () => {
    const { getByPlaceholderText, getByText } = render(<TaskInputForm onTaskAdded={vi.fn()} />);
    fireEvent.change(getByPlaceholderText("Task Title"), { target: { value: "Test Task" } });
    fireEvent.change(getByPlaceholderText("Task Description"), { target: { value: "Test Description" } });
    fireEvent.click(getByText("Add Task"));
    await waitFor(() => expect(getByText("Task added successfully!")).toBeInTheDocument());
  });

  it("should show error when title is empty", async () => {
    const { getByText } = render(<TaskInputForm onTaskAdded={vi.fn()} />);
    fireEvent.click(getByText("Add Task"));
    expect(getByText("Task title is required.")).toBeInTheDocument();
  });
});
